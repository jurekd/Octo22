<?php
    function isEditable($table){
        $result = false;
        switch($table){
            case 'tasks':
                $result = true;
                break;
            case 'event':
                $result = true;
                break;
            case 'multimedia':
                $result = true;
                break;
            default:
                $result = false;
                break;
        }
        return $result;
    }

    function isAdmin(){
        if(isset($_SESSION['Admin']) && ($_SESSION['Admin'] === true)){
            return true;
        } else {
            return false;
        }
    }

    function getAdminSession(){
        if(isAdmin()){
            return true;
        } else {
            header('HTTP/1.1 401 Unauthorised');
        }
    }

    function logoutAdmin(){
        if(isset($_SESSION['Logged'])){
            unset($_SESSION['Logged']);
            unset($_SESSION['Login']);
            unset($_SESSION['userID']);
            unset($_SESSION['sessionKey']);
            unset($_SESSION['Admin']);
            session_destroy();
        }
    }

    function loginAdmin($login, $password){
        //$result = Query("SELECT * FROM `users` WHERE `type`='admin' AND `email`='$login'", Main);
        $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['users']);
        $result = $DatabaseCore->Select("*", "`type`='admin' AND `email`='$login'");
        $row = mysqli_fetch_assoc($result);
        if(md5($password) === $row['password']){
            $_SESSION['Logged'] = true;
            $_SESSION['Login'] = $login;
            $_SESSION['userID'] = $row['id'];
            $_SESSION['name'] = $row['name'];
            $_SESSION['surname'] = $row['surname'];
            $_SESSION['Admin'] = true;
            $_SESSION['sessionKey'] = generateRandomString(20);
            return true;
        } else {
            header('HTTP/1.1 401 Unauthorised');
        }
    }

    function adminGenerateForms($table, $id){
        if(isAdmin() && isEditable($table)){
            $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot'][$table]);
            if($id != 0){
                $result = $DatabaseCore->Select("*", "`id`='$id'");
                $row = mysqli_fetch_assoc($result);
            }
            $DatabaseCore2 = new DatabaseCore($GLOBALS['DataRoot']['dictionary']);
            $struct = array();
            for($i = 1; $i < $GLOBALS['DataRoot'][$table]->GetColumnsCount(); $i++){
                $name = $GLOBALS['DataRoot'][$table]->GetColumns();
                $name = $name[$i][0];
                if($GLOBALS['DataRoot'][$table]->IsEditable($name)){
                    $type = $GLOBALS['DataRoot'][$table]->GetColumns();
                    $type = $type[$i][1];
                    if($id == 0){
                        $value = '';
                    } else {
                        $value = $GLOBALS['DataRoot'][$table]->GetColumns();
                        $value = $value[$i][0];
                        $value = $row[$value];
                    }
                    $translation = $GLOBALS['DataRoot'][$table]->GetColumns();
                    $translation = $translation[$i][5];
                    if($translation != ''){
                        $result2 = $DatabaseCore2->Select("*", "`name`='$translation'");
                        $row2 = mysqli_fetch_assoc($result2);
                        $translation = $row2['content'];
                    }
                    array_push($struct, array('name' => $name, 'type' => $type, 'value' => $value, 'translation' => $translation));
                }
            }
            $response = new JSONify();
            $response->setContent($struct);
            $response->send();
        } else {
            header('HTTP/1.1 401 Unauthorised');
        }
    }

    function adminGetInstances($table){
        if(isAdmin() && isEditable($table)){
            $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot'][$table]);
            $result = $DatabaseCore->Select();
            $tmp = array();
            while($row = mysqli_fetch_assoc($result)){
                array_push($tmp, array("id" => $row['id'], "name" => $row['name']));
            }
            $response = new JSONify();
            $response->setContent($tmp);
            $response->send();
        } else {
            header('HTTP/1.1 401 Unauthorised');
        }
    }

    function addedit($table, $id){
        if(isAdmin() && isEditable($table)){
            $tmp = array();
            $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot'][$table]);
            $columns = $GLOBALS['DataRoot'][$table]->GetColumns();
            for($i = 1; $i < $GLOBALS['DataRoot'][$table]->GetColumnsCount(); $i++){
                if(isset($_POST[$columns[$i][0]]) || isset($_FILES[$columns[$i][0]])){
                    if($GLOBALS['DataRoot'][$table]->IsEditable($columns[$i][0])){
                        if($columns[$i][1] == 'file'){
                            //var_dump($_FILES[$columns[$i][0]]);
                            $tmp[$columns[$i][0]] = UploadImages($_FILES[$columns[$i][0]], 800, 'Uploads', $columns[$i][0]);
                            //echo $tmp[$columns[$i][0]];
                        } else {
                            $tmp[$columns[$i][0]] = $_POST[$columns[$i][0]];
                        }
                    }
                }
            }
            if($id == 0){
                $DatabaseCore->Insert($tmp);
            } else {
                $DatabaseCore->Update($tmp, "`id`='$id'");
            }
        } else {
            header('HTTP/1.1 401 Unauthorised');
        }
    }

//////////////////////////////////////
    function reArrayFiles(&$file_post) {
        $file_ary = array();
        $file_count = count($file_post['name']);
        $file_keys = array_keys($file_post);
        for ($i=0; $i<$file_count; $i++) {
            foreach ($file_keys as $key) {
                $file_ary[$i][$key] = $file_post[$key][$i];
            }
        }
        return $file_ary;
    }
    
    function UploadImages($file, $size, $path, $name){
        //var_dump($file);
        if(is_array($file) !== FALSE){
            $i = 0; $result = FALSE; $format = '';
            //foreach ($array as $file){
                $filename = $file['name'];
		        $filetype = $file['type'];
		        $tmpfilename = $file['tmp_name'];
		        $dir = $_SERVER['DOCUMENT_ROOT']."/".$path;
                $time = new DateTimeC();
                switch($filetype){
                    case 'image/jpeg':
                        $format = '.jpg';
                        break;
                    case 'image/png':
                        $format = '.png';
                        break;
                }
		        $newname = $name.$time->ToString('smhDMY').$i.$format;
                //echo $newname.'\n';
		        $uploadfile = $dir.'/'.$newname;
                //echo $uploadfile.'\n';
                if(move_uploaded_file($tmpfilename, $uploadfile)){
                    //echo $uploadfile.'\n';
                    if($filetype == 'image/jpeg'){
                        $src = imagecreatefromjpeg($uploadfile);
                    } else if($filetype == 'image/png'){
                        $src = imagecreatefrompng($uploadfile);
                    }
                    $width = imagesx($src);
                    $height = imagesy($src);
                    if(($width > $size) || ($height > $size)){
                        if($width > $height){
                            $scale = $size/$width;
                        } else {
                            $scale = $size/$height;
                        }
                        $y = floor($height * $scale);
                        $x = floor($width * $scale);
                        $dst = imagecreatetruecolor($x, $y);
                        imagecopyresampled($dst, $src, 0, 0, 0, 0, $x, $y, $width, $height);
                        if($filetype == 'image/jpeg'){
                            imagejpeg($dst, $dir.$newname);
                        } else if($filetype == 'image/png'){
                            imagepng($dst, $dir.$newname);
                        }
                    }
                    $file = $path.'/'.$newname;
                    $result = $file;
                    $i = $i + 1;
                } else {
                    return FALSE;
                }
            //}
            return $result;
        } else {
            return FALSE;
        }
    }
?>