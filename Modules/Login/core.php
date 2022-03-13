<?php
    function isLogged(){
        if(isset($_SESSION['Logged']) && ($_SESSION['Logged'] === TRUE)){
            return TRUE;
        } else {
            return FALSE;
        }
    }

    function logout(){
        if(isset($_SESSION['Logged'])){
            // $log = new logEvent($_SESSION['userID'], 'userLoggedOut');
            // $log->setContent(array('sessionKey' => $_SESSION['sessionKey']));
            // $log->Save();
            logEvent(0, 0, 'user_logged_out', 'self');
            unset($_SESSION['Logged']);
            unset($_SESSION['Login']);
            unset($_SESSION['userID']);
            unset($_SESSION['sessionKey']);
            unset($_SESSION['basic']);
            session_destroy();
        }
    }

    class Users {
        function Count($arg = 'All'){
            if($arg == 'All'){
                return QueryCount('users', 'Settings');
            } else if($arg == 'Registered'){
                return QueryCount('users', 'Settings', 'registered', 'registered');
            } else if($arg == 'Unregistered'){
                return (QueryCount('users', 'Settings') - QueryCount('users', 'Settings', 'registered', 'registered'));
            } else {
                return FALSE;
            }
        }
        function Exist($login){
            if((QueryCount('users', 'Settings', 'login', $login) !== FALSE) && (QueryCount('users', 'Settings', 'login', $login) > 0)){
                return TRUE;
            } else {
                return FALSE;
            }
        }
    }

    function LoginExist($login){
        $result = Query("SELECT Count(*) as Count FROM `users` WHERE `email`='$login'", Main);
        $count = mysqli_fetch_assoc($result);
        $count = $count['Count'];
        if($count > 0){
            return TRUE;
        } else {
            return FALSE;
        }
    }

    function getSession(){
        if(isLogged()){
            $tmp = array(
                'name' => $_SESSION['name'],
                'surname' => $_SESSION['surname'],
                'avatar' => $_SESSION['avatar'],
                'type' => $_SESSION['type'],
                'basic' => $_SESSION['basic'],
				'survey' => $_SESSION['survey']
            );
            $response = new JSONify();
            $response->setContent($tmp);
            $response->send();
        } else {
            header('HTTP/1.1 401 Unauthorised');
        }
    }

    function setAvatar($avatar){
        if(isLogged()){
            $_SESSION['avatar'] = $avatar;
            $id = $_SESSION['userID'];
            Query("UPDATE `users` SET `avatar`='$avatar' WHERE `id`='$id'", Main);
        } else {
            header('HTTP/1.1 401 Unauthorised');
        }
    }

    function userAuthorisation(){
        if(isset($_POST['login'], $_POST['password'])){
            $login = $_POST['login'];
            $result = Query("SELECT * FROM `users` WHERE `email`='$login'", Main);
            $row = mysqli_fetch_assoc($result);
            if(md5($_POST['password']) == $row['password']){
                $_SESSION['Logged'] = true;
                $_SESSION['Login'] = $login;
                $_SESSION['userID'] = $row['id'];
                $_SESSION['name'] = $row['name'];
                $_SESSION['surname'] = $row['surname'];
                $_SESSION['avatar'] = $row['avatar'];
                $_SESSION['type'] = $row['type'];
                $_SESSION['basic'] = $row['basic'];
				$_SESSION['survey'] = $row['survey'];
                $_SESSION['sessionKey'] = generateRandomString(20);
                // $log = new logEvent($_SESSION['userID'], 'userLoggedIn');
                // $log->setContent(array('sessionKey' => $_SESSION['sessionKey']));
                // $log->Save();
                logEvent(0, 0, 'user_logged_in', 'self');
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    function EmailExist($email){
        $result = Query("SELECT Count(*) as Count FROM `users` WHERE `email`='$email'", Main);
        $count = mysqli_fetch_assoc($result);
        $count = $count['Count'];
        if($count > 0){
            return TRUE;
        } else {
            return FALSE;
        }
    }

    function AccountVerified($login){
        $result = Query("SELECT * FROM `users` WHERE `login`='$login' LIMIT 1", Main);
        $row = mysqli_fetch_assoc($result);
        if($row['status'] == 'verified'){
            return TRUE;
        } else {
            return FALSE;
        }
    }

    function VerifyAccount($key){
        if(RowExist('users', 'status', $key, Main)){
            $result = Query("SELECT * FROM `users` WHERE `status`='$key' LIMIT 1", Main);
            $row = mysqli_fetch_assoc($result);
            if(Query("UPDATE `users` SET `status`='verified' WHERE `ID`='".$row['ID']."'", Main)){
                return TRUE;
            } else {
                return FALSE;
            }
        } else {
            return FALSE;
        }
    }

    function CreateUser($login, $password, $email){
        $date = new DateTimeC();
        $date = $date->ToSQL();
        $password = md5($password);
        $key = $login.generateRandomString(20);
        if(Query("INSERT INTO `users` (`login`, `password`, `email`, `status`) VALUES ('$login', '$password', '$email', '$key')", Main)){
            $mail = new PHPMailer;
            $mail->isSMTP();
            $mail->SMTPDebug = 2;
            $mail->Debugoutput = 'html';
            $mail->Host = SMTPGet('Host');
            $mail->Port = SMTPGet('Port');
            $mail->SMTPAuth = true;
            $mail->Username = SMTPGet('Username');
            $mail->Password = SMTPGet('Password');
            $mail->setFrom(SMTPGet('Username'), SMTPGet('Name'));
            $mail->addReplyTo(SMTPGet('Replyto'), SMTPGet('Name'));
            $mail->addAddress($email, 'John Doe');
            $mail->Subject = GM('login_verify_emailmessage').' '.SMTPGet('Name');
            $mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
            $mail->AltBody = 'This is a plain-text message body';
            if (!$mail->send()) {
                echo "Mailer Error: " . $mail->ErrorInfo;
            }
            return TRUE;
        } else {
            return FALSE;
        }
    }
?>