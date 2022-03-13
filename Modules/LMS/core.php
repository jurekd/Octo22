<?php

class CourseController {
    private $course_id = 0;
    private $user_id = 0;
    function __construct($courseid, $userid){
        $this->course_id = $courseid;
        $this->user_id = $userid;
    }

    private function detectCourse($element){
        $userid = $this->user_id;
        $courseid = $this->course_id;
        $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['activity']);
        $result = $DatabaseCore->Select("*", "`user_id`='$userid' AND `course_status`='open' AND `course_id`='$courseid'");
        if(mysqli_num_rows($result) == 0){
            $tmp = $this->startCourse();
            return $tmp[$element];
        } else {
            $row = mysqli_fetch_assoc($result);
            return $row[$element];
        }
    }

    private function startCourse(){
        $userid = $this->user_id;
        $courseid = $this->course_id;
        $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['modules']);
        $DatabaseCore2 = new DatabaseCore($GLOBALS['DataRoot']['tasks']);
        $content = array();
        $result = $DatabaseCore->Select("*", "`course_id`='$courseid'");
        while($row = mysqli_fetch_assoc($result)){
            $date = new DateTimeC();
            $tmp = array(
                'module_id' => $row['id'],
                'start_date' => $date->ToSQL(),
                'status' => 'new',
                'enter_number' => '1',
                'tasks' => array()
            );
            $module_id = $row['id'];
            $result2 = $DatabaseCore2->Select("*", "`module_id`='$module_id' AND `reference_id`='0'");
            while($row2 = mysqli_fetch_assoc($result2)){
                $task_id = $row2['id'];
                $tmp2 = array(
                    'task_id' => $row2['id'],
                    'status' => 'new',
                    'name' => $row2['name'],
                    'enter_number' => '0',
                    'tasks' => array()
                );
                $result3 = $DatabaseCore2->Select("*", "`module_id`='$module_id' AND `reference_id`='$task_id'");
                while($row3 = mysqli_fetch_assoc($result3)){
                    array_push($tmp2['tasks'], array(
                        'task_id' => $row3['id'],
                        'status' => 'new',
                        'name' => $row3['name'],
                        'enter_number' => '0'
                    ));
                }
                array_push($tmp['tasks'], $tmp2);
            }
            array_push($content, $tmp);
        }
        $Jobj = new JSONify();
        $Jobj->SetContent($content);
        $Jcontent = $Jobj->generateJSON();
        $DatabaseCore->SwitchTable($GLOBALS['DataRoot']['activity']);
        $date = new DateTimeC();
        $dat = $date->ToSQL();
        $tmp = array(
            'user_id' => $userid,
            'course_id' => $courseid,
            'course_status' => 'open',
            'course_time_start' => $dat,
            'course_number_of_enter' => '1',
            'content' => $Jcontent
        );
        logEvent($courseid, 0, 'course_started', 'self');
        //echo json_encode($tmp);
        $DatabaseCore->Insert($tmp);
        return $tmp;
    }

    public function getCurrentModule(){
        $content = json_decode($this->detectCourse('content'), true);
        $result = false;
        foreach($content as $module){
            //$module = json_decode(json_encode($module), true);
            if($module['status'] != 'closed'){
                $result = $module;
                break 1;
            }
        }
        return $result;
    }

    public function getCurrentTask(){
        $tmp = 0;
        $content = json_decode($this->detectCourse('content'), true);
        $result = false;
        foreach($content as $module){
            //$module = json_decode(json_encode($module), true);
            if($module['status'] != 'closed'){
                foreach($module['tasks'] as $task){
                    //$task = json_decode(json_encode($task), true);
                    $tmp = $task['task_id'];
                    if($task['status'] != 'closed'){
                        $result = $task['task_id'];
                        break 2;
                    }
                }
            }
        }
        if($result === false){
            $result = $tmp;
        }
        return $result;
    }

    public function getCurrentSubtask($id){
        $content = json_decode($this->detectCourse('content'), true);
        $result = false;
        foreach($content as $module){
            if($module['status'] != 'closed'){
                foreach($module['tasks'] as $task){
                    if($task['task_id'] == $id){
                        $i = 0;
                        foreach($task['tasks'] as $subtask){
                            if($subtask['status'] != 'closed'){
                                $result = $i;
                                break 3;
                            }
                            $i = $i + 1;
                        }
                    }
                }
            }
        }
        return $result;
    }

    public function getTask($id){
        $content = json_decode($this->detectCourse('content'), true);
        $result = false;
        foreach($content as $module){
            if($module['status'] != 'closed'){
                foreach($module['tasks'] as $task){
                    if($task['task_id'] == $id){
                        $result = $task['task_id'];
                        break 2;
                    } else {
                        foreach($task['tasks'] as $subtask){
                            if($subtask['task_id'] == $id){
                                $result = $subtask['task_id'];
                                break 3;
                            }
                        }
                    }
                }
            }
        }
        return $result;
    }

    public function getTaskParam($id, $param){
        $content = json_decode($this->detectCourse('content'), true);
        $result = false;
        foreach($content as $module){
            if($module['status'] != 'closed'){
                foreach($module['tasks'] as $task){
                    if($task['task_id'] == $id){
                        $result = $task[$param];
                        break 2;
                    } else {
                        foreach($task['tasks'] as $subtask){
                            if($subtask['task_id'] == $id){
                                $result = $subtask[$param];
                                break 3;
                            }
                        }
                    }
                }
            }
        }
        return $result;
    }

    public function getCourseProgress(){
        $content = json_decode($this->detectCourse('content'), true);
        $all = 0;
        $resolved = 0;
        foreach($content as $module){
            foreach($module['tasks'] as $task){
                $all = $all + 1;
                if($task['status'] == 'closed'){
                    $resolved = $resolved + 1;
                }
            }
        }
        return $resolved / $all;
    }

    public function enterTask($task_id){
        $content = json_decode($this->detectCourse('content'), true);
        $verify = $this->getTask($task_id);
        if($verify == $task_id){
            for($i=0; $i<sizeof($content); $i++){
                for($j=0; $j<sizeof($content[$i]['tasks']); $j++){
                    if($content[$i]['tasks'][$j]['task_id'] == $task_id){
                        $content[$i]['tasks'][$j]['enter_number'] = (int)$content[$i]['tasks'][$j]['enter_number'] + 1;
                        if($content[$i]['tasks'][$j]['status'] == 'new'){
                            $content[$i]['tasks'][$j]['status'] = 'in_progress';
                            break 2;
                        }
                    } else {
                        for($k=0; $k<sizeof($content[$i]['tasks'][$j]['tasks']); $k++){
                            if($content[$i]['tasks'][$j]['tasks'][$k]['task_id'] == $task_id){
                                $content[$i]['tasks'][$j]['tasks'][$k]['enter_number'] = (int)$content[$i]['tasks'][$j]['tasks'][$k]['enter_number'] + 1;
                                if($content[$i]['tasks'][$j]['tasks'][$k]['status'] == 'new'){
                                    $content[$i]['tasks'][$j]['tasks'][$k]['status'] = 'in_progress';
                                    break 3;
                                }
                            }
                        }
                    }
                }
            }
            $content = json_encode($content, JSON_UNESCAPED_UNICODE);
            $this->updateCourse(array('content' => $content));
        } else {
            return false;
        }
    }

    public function CompleteTask($task_id){
        $content = json_decode($this->detectCourse('content'), true);
        $verify = $this->getTask($task_id);
        $completedTasks = 0;
        if($verify == $task_id){
            for($i=0; $i<sizeof($content); $i++){
                for($j=0; $j<sizeof($content[$i]['tasks']); $j++){
                    $completedTasks = 0;
                    if($content[$i]['tasks'][$j]['task_id'] == $task_id){
                        if($content[$i]['tasks'][$j]['status'] != 'closed'){
                            $content[$i]['tasks'][$j]['status'] = 'closed';
                            //break 2;
                        }
                    } else {
                        for($k=0; $k<sizeof($content[$i]['tasks'][$j]['tasks']); $k++){
                            if($content[$i]['tasks'][$j]['tasks'][$k]['status'] == 'closed'){
                                $completedTasks = $completedTasks + 1;
                                if($completedTasks == sizeof($content[$i]['tasks'][$j]['tasks'])){
                                    $content[$i]['tasks'][$j]['status'] = 'closed';
                                }
                            }
                            if($content[$i]['tasks'][$j]['tasks'][$k]['task_id'] == $task_id){
                                if($content[$i]['tasks'][$j]['tasks'][$k]['status'] != 'closed'){
                                    $content[$i]['tasks'][$j]['tasks'][$k]['status'] = 'closed';
                                    $completedTasks = $completedTasks + 1;
                                    if($completedTasks == sizeof($content[$i]['tasks'][$j]['tasks'])){
                                        $content[$i]['tasks'][$j]['status'] = 'closed';
                                    }
                                    //break 3;
                                }
                            }
                        }
                    }
                }
            }
            $content = json_encode($content, JSON_UNESCAPED_UNICODE);
            $this->updateCourse(array('content' => $content));
        } else {
            return false;
        }
    }

    public function enterModule(){
        $module = $this->getCurrentModule();
        //
    }

    private function updateCourse($content){
        $courseid = $this->course_id;
        $course = json_encode($content, JSON_UNESCAPED_UNICODE);
        $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['activity']);
        $userid = $_SESSION['userID'];
        $result = $DatabaseCore->Update($content, "`course_id`='$courseid' AND `course_status`<>'closed' AND `user_id`='$userid'");
        if($result !== false){
            return true;
        } else {
            return false;
        }
    }

    public function continueCourse(){
        $courseid = $this->detectCourse('id');
        if($courseid !== false){
            return $this->getCurrentModule();
        } else {
            $this->startCourse();
            return $this->getCurrentModule();
        }
    }
}

function getCourses(){
    if(isLogged()){
        $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['courses']);
        $result = $DatabaseCore->Select();
        $i = 0;
        $tmp = array();
        while($row = mysqli_fetch_assoc($result)){
            $tmp[$i] = $row['name'];
            $i = $i + 1;
        }
        $response = new JSONify();
        $response->setContent($tmp);
        $response->generateJSON();
        $response->send();
    } else {
        header('HTTP/1.1 401 Unauthorised');
    }
}

function getModules($courseId){
    if(isLogged()){
        $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['modules']);
        $result = $DatabaseCore->Select("*", "`course_id` = '$courseId'");
        $i = 0;
        $tmp = array();
        while($row = mysqli_fetch_assoc($result)){
            $tmp[$i] = $row['name'];
            $i = $i + 1;
        }
        $response = new JSONify();
        $response->setContent($tmp);
        $response->generateJSON();
        $response->send();
    } else {
        header('HTTP/1.1 401 Unauthorised');
    }
}
class eventLogger {
    private $Course;
    private $Module;
    private $Task;

    function __construct($course, $module, $task){
        $this->Course = $course;
        $this->Module = $module;
        $this->Task = $task;
    }

    public function logEvent($event, $taskid = 'self'){
        if($taskid == 'self'){
            $taskid = $this->Task;
        }
        $sessionKey = $_SESSION['sessionKey'];
        $lastkey = new DatabaseCore($GLOBALS['DataRoot']['logs']);
        $result = $lastkey->Select("count(*) as total", "`session_key`='$sessionKey'");
        $row = mysqli_fetch_assoc($result);
        if($row['total'] > 0){
            $date = new DateTimeC();
            $date = $date->ToSQL();
            $result = $lastkey->Select("*", "`session_key`='$sessionKey'");
            $row = mysqli_fetch_assoc($result);
            $log = json_decode($row['content'], true);
            array_push($log, array("date" => $date, "event" => $event, "courseid" => $this->Course, "moduleid" => $this->Module, "taskid" => $this->Task, "to_taskid" => $taskid));
            $log = json_encode($log, JSON_UNESCAPED_UNICODE);
            $lastkey->Update(array("content" => $log), "`session_key`='$sessionKey'");
        } else {
            $date = new DateTimeC();
            $date = $date->ToSQL();
            $user = $_SESSION['userID'];
            $log = array();
            array_push($log, array("date" => $date, "event" => $event, "courseid" => $this->Course, "moduleid" => $this->Module, "taskid" => $this->Task, "to_taskid" => $taskid));
            $log = json_encode($log, JSON_UNESCAPED_UNICODE);
            $lastkey->Insert(array("user_id" => $user, "date" => $date, "content" => $log, "session_key" => $sessionKey));
        }
    }
}
function logEvent($course_id, $taskid, $event, $newtask = 'self'){
    if(isLogged()){
        // $log = new logEvent($_SESSION['userID'], $event);
        // $log->setContent(array('sessionKey' => $_SESSION['sessionKey']));
        // $log->Save();
        if($event == "interpreter_started_with_success_with_correct"){
            $Course = new CourseController($course_id, $_SESSION['userID']);
            $Course->CompleteTask($taskid);
        }
        $log = new eventLogger($course_id, 1, $taskid);
        $log->logEvent($event, $newtask);
    } else {
        header('HTTP/1.1 401 Unauthorised');
    }
}

function getTasks($course_id){
    if(isLogged()){
        $Course = new CourseController($course_id, $_SESSION['userID']);
        $module = $Course->getCurrentModule();
        $response = new JSONify();
        $response->setContent($module);
        $response->generateJSON();
        $response->send();
    } else {
        header('HTTP/1.1 401 Unauthorised');
    }
}
function getLastTask($course_id, $intelect){
    if(isLogged()){
        $user = $_SESSION['userID'];
        $Course = new CourseController($course_id, $_SESSION['userID']);
        // Session
        $getDialogs = new DatabaseCore($GLOBALS['DataRoot']['dialogs']);
        $getAudio = new DatabaseCore($GLOBALS['DataRoot']['audio']);
        $GetLastSession = new DatabaseCore($GLOBALS['DataRoot']['logs']);
        //
        $LastSession = $GetLastSession->Select("*", "`user_id`='$user'", "ORDER BY `date` DESC LIMIT 1");
        if(mysqli_num_rows($LastSession) > 0){
            $row = mysqli_fetch_assoc($LastSession);
            $currentSession = $row['content'];
            $currentSession = json_decode($currentSession, true);
            $subtask_id = false;
            $task_id = false;
            foreach($currentSession as $obj){
                if($obj['event'] == 'task_loaded'){
                    $subtask_id = $obj['to_taskid'];
                }
                if($obj['event'] == 'task_changed_to'){
                    $subtask_id = $obj['to_taskid'];
                }
            }
            if($subtask_id === false){
                $task_id = $Course->getCurrentTask();
                $subtask_id = $Course->getCurrentSubtask($task_id);
            } else {
                $LastTask = new DatabaseCore($GLOBALS['DataRoot']['tasks']);
                $lasttask = $LastTask->Select("*", "`id`='$subtask_id'");
                $row = mysqli_fetch_assoc($lasttask);
                $task_id = $row['reference_id'];
                if($task_id == 0){
                    $task_id = $subtask_id;
                }
                $subtask_id = $Course->getCurrentSubtask($task_id);
            }
        } else {
            $task_id = $Course->getCurrentTask();
            $subtask_id = $Course->getCurrentSubtask($task_id);
        }

        // Other
        $Course->enterTask($task_id);
        $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['tasks']);
        $result = $DatabaseCore->Select("*", "`id`='$task_id'");
        $row = mysqli_fetch_assoc($result);
        $tmp = array('task_id' => $row['id'],
                    'name' => $row['name'],
                    'content' => $row['content'],
                    'currentSubtask' => $subtask_id,
                    'subtasks' => array()
                    );
        $result = $DatabaseCore->Select("*", "`reference_id`='$task_id'");
            while($row = mysqli_fetch_assoc($result)){
                $taskid = $row['id'];
                $avatars = array();
                $result2 = $getDialogs->Select("*", "`task_id`='$taskid'");
                while($row2 = mysqli_fetch_assoc($result2)){
                    array_push($avatars, array("name" => $row2['type'], "content" => $row2['content'], "profile" => $row2['profil']));
                }
                // Audio
                $result3 = $getAudio->Select("*", "`task_id`='$taskid'");
                $audioLink = '';
                while($row3 = mysqli_fetch_assoc($result3)){
                    $audioLink = $row3['link'];
                }
                ////
                array_push($tmp['subtasks'], array(
                    'task_id' => $row['id'],
                    'name' => $row['name'],
                    'content' => $row['content'],
                    'alternative' => $row['task_intra'],
                    'kinestetyk' => $row['task_kinest'],
                    'naturalist' => $row['task_natur'],
                    'natur_hint' => $row['task_natur_suggest'],
                    'natur_code' => $row['task_natur_code'],
                    'natur_answer' => $row['correct_answer_natur'],
                    'status' => $Course->getTaskParam($row['id'], 'status'),
                    'defaultTime' => 7,
                    'facebook_link' => $row['facebook_link'],
                    'avatar_dialog' => $avatars,
                    'correct_answer' => $row['correct_answer'],
                    'audioLink' => $audioLink
                ));
            }
        $response = new JSONify();
        $response->setContent($tmp);
        $response->generateJSON();
        $response->send();
    } else {
        header('HTTP/1.1 401 Unauthorised');
    }
}
function getApps($task_id, $intelect) {
    if(isLogged()){
        $getApp = new DatabaseCore($GLOBALS['DataRoot']['applications']);
        $result = $getApp->Select("*", "`task_id`='$task_id' AND `intelect`='$intelect'");
        if(mysqli_num_rows($result) > 0){
            $rows = mysqli_fetch_assoc($result);
            $tmp = array(
                "name" => $rows['name'],
                "iframe" => $rows['iframe']
            );
            $response = new JSONify();
            $response->setContent($tmp);
            $response->generateJSON();
            $response->send();
        } else {
            header('HTTP/1.1 200 OK');
        }
    } else {
        header('HTTP/1.1 401 Unauthorised');
    }
}
function getTask($course_id, $task_id, $intelect){
    if(isLogged()){
        $getDialogs = new DatabaseCore($GLOBALS['DataRoot']['dialogs']);
        $getAudio = new DatabaseCore($GLOBALS['DataRoot']['audio']);
        $Course = new CourseController($course_id, $_SESSION['userID']);
        $task_id = $Course->getTask($task_id);
        $Course->enterTask($task_id);
        if($task_id !== false){
            $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['tasks']);
            $result = $DatabaseCore->Select("*", "`id`='$task_id'");
            $row = mysqli_fetch_assoc($result);
            $tmp = array('task_id' => $row['id'],
                    'name' => $row['name'],
                    'content' => $row['content'],
                    'subtasks' => array()
                    );
            $result = $DatabaseCore->Select("*", "`reference_id`='$task_id'");
            while($row = mysqli_fetch_assoc($result)){
                $taskid = $row['id'];
                $avatars = array();
                $result2 = $getDialogs->Select("*", "`task_id`='$taskid'");
                while($row2 = mysqli_fetch_assoc($result2)){
                    array_push($avatars, array("name" => $row2['type'], "content" => $row2['content'], "profile" => $row2['profil']));
                }
                // Audio
                $result3 = $getAudio->Select("*", "`task_id`='$taskid'");
                $audioLink = '';
                while($row3 = mysqli_fetch_assoc($result3)){
                    $audioLink = $row3['link'];
                }
                ////
                array_push($tmp['subtasks'], array(
                    'task_id' => $row['id'],
                    'name' => $row['name'],
                    'content' => $row['content'],
                    'alternative' => $row['task_intra'],
                    'kinestetyk' => $row['task_kinest'],
                    'naturalist' => $row['task_natur'],
                    'natur_hint' => $row['task_natur_suggest'],
                    'natur_code' => $row['task_natur_code'],
                    'natur_answer' => $row['correct_answer_natur'],
                    'status' => $Course->getTaskParam($row['id'], 'status'),
                    'defaultTime' => 7,
                    'facebook_link' => $row['facebook_link'],
                    'avatar_dialog' => $avatars,
                    'correct_answer' => $row['correct_answer'],
                    'audioLink' => $audioLink
                ));
            }
            $response = new JSONify();
            $response->setContent($tmp);
            $response->generateJSON();
            $response->send();
        } else {
            header('HTTP/1.1 401 Unauthorised');
        }
    } else {
        header('HTTP/1.1 401 Unauthorised');
    }
}
function getProgress($course_id){
    if(isLogged()){
        $Course = new CourseController($course_id, $_SESSION['userID']);
        $result = $Course->getCourseProgress();
        $response = new JSONify();
        $response->setContent(array('progress' => $result));
        $response->send();
    } else {
        header('HTTP/1.1 401 Unauthorised');
    }
}
function enterTask($course_id, $task_id){
    if(isLogged()){
        $Course = new CourseController($course_id, $_SESSION['userID']);
        $result = $Course->enterTask($task_id);
    } else {
        header('HTTP/1.1 401 Unauthorised');
    }
}
function getLogs(){
    $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['activity']);
    $tmp = array();
    $result = $DatabaseCore->Select();
    $row = mysqli_fetch_assoc($result);
    $tmp['course_status'] = $row['course_status'];
    $tmp['course_time_start'] = $row['course_time_start'];
    $tmp['content'] = json_decode($row['content'], true);
    $DatabaseCore->SwitchTable($GLOBALS['DataRoot']['logs']);
    $result = $DatabaseCore->Select("*", "", "ORDER BY `id` DESC");
    $tmp['logs_activity'] = array();
    while($row = mysqli_fetch_assoc($result)){
        array_push($tmp['logs_activity'], array('date' => $row['date'], 'event' => $row['event'], 'content' => $row['content']));
    }
    echo '<pre>';
    print_r($tmp);
    echo '</pre>';
}
function getTeacher(){
    if(isLogged() && ($_SESSION['type'] == 'teacher')){
        $uid = $_SESSION['userID'];
        $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['users']);
        $DatabaseCore2 = new DatabaseCore($GLOBALS['DataRoot']['activity']);
        $students = $DatabaseCore->Select("*", "`teacher`='$uid' order by surname,name");
        $tmp = array();
        while($student = mysqli_fetch_assoc($students))
		{
            $sid = $student['id'];
			$in_progress=0;
			$new=0;
			$closed=0;
			$result = $DatabaseCore2->Select("course_time_start,content", "user_id=".$sid);
				while($row = mysqli_fetch_assoc($result))
				{
				 $json = json_decode($row['content']);
				 //print_r($json);
				 if($json!=null) 
					 $tasks=$json[0]->tasks;
				 if($tasks!=null)
				 {
					 foreach($tasks as $value)
					 {
						 foreach($value->tasks as $x)
						 {			 
						  if($x->status=='new') 
						   $new++;
						  elseif($x->status=='in_progress') 
						   $in_progress++;
						  elseif($x->status=='closed') 
						   $closed++;
						 }
					 }
					array_push($tmp, array(
						'name' => $student['name'],
						'surname' => $student['surname'],
						'start' => $row['course_time_start'],
						'new' => $new,
						'in_progress' => $in_progress,
						'closed' => $closed
					));
				 }
				}
        }
        $response = new JSONify();
        $response->setContent($tmp);
        $response->generateJSON();
        $response->send();
    } else {
        header('HTTP/1.1 401 Unauthorised');
    }
}
?>