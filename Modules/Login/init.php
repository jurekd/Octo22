<?php
    require_once('../Modules/Login/view.php');
    if(IsLogged()){
        if(isset($_GET['action'])){
            if($_GET['action'] == "logout"){
                Logout();
            }
        }
    } else {
        if(isset($_GET['action'])){
            if($_GET['action'] == "login"){
                if(isset($_POST['login'], $_POST['password'])){
                    if(LoginExist($_POST['login'])){
                        if(AccountVerified($_POST['login'])){
                            $BPassword = GetPasswordByLogin($_POST['login']);
                            if($BPassword !== FALSE){
                                if(md5($_POST['password']) == $BPassword){
                                    $_SESSION['Logged'] = TRUE;
                                    $_SESSION['Login'] = $_POST['login'];
                                    $_GET['page'] = 'home';
                                } else { $GLOBALS['WSM']->Set(GM('login_error_loginorpass'), 'error'); }
                            } else { $GLOBALS['WSM']->Set(GM('login_error_loginorpass'), 'error'); }
                        } else { $GLOBALS['WSM']->Set(GM('login_error_notverified'), 'error'); }
                    } else { $GLOBALS['WSM']->Set(GM('login_error_loginorpass'), 'error'); }
                } else { $GLOBALS['WSM']->Set(GM('error_largnotdefined'), 'error'); }
            //////////////////////////////////////////////////////////////////
            } else if($_GET['action'] == "register"){
                if(isset($_POST['email'], $_POST['login'], $_POST['password1'], $_POST['password2'])){
                    $valid = new Validation();
                    $valid->AddCondition('email', $_POST['email'], 'type', 'notempty');
                    $valid->AddCondition('email', $_POST['email'], 'contains', '@');
                    $valid->AddCondition('email', $_POST['email'], 'contains', '.');
                    $valid->AddCondition('email', $_POST['email'], 'maxlength', 200);
                    $valid->AddCondition('login', $_POST['login'], 'type', 'notempty');
                    $valid->AddCondition('login', $_POST['login'], 'maxlength', 100);
                    $valid->AddCondition('password', $_POST['password1'], 'type', 'notempty');
                    $valid->AddCondition('password', $_POST['password1'], 'minlength', 8);
                    $valid->AddCondition('password', $_POST['password1'], 'maxlength', 20);
                    if($valid->Validate()){
                        if(!LoginExist($_POST['login'])){
                            if(!EmailExist($_POST['email'])){
                                if($_POST['password1'] == $_POST['password2']){
                                    if(CreateUser($_POST['login'], $_POST['password1'], $_POST['email'])){
                                        $GLOBALS['WSM']->Set(GM('login_succes_registered'), 'info');
                                        $_GET['page'] = 'login';
                                    }
                                } else { $GLOBALS['WSM']->Set(GM('login_error_passcorrect'), 'error'); }
                            } else { $GLOBALS['WSM']->Set(GM('login_error_emailexist'), 'error'); }
                        } else { $GLOBALS['WSM']->Set(GM('login_error_loginexist'), 'error'); }
                    } else { $GLOBALS['WSM']->Set($valid->Validate(), 'error'); }
                } else { $GLOBALS['WSM']->Set(GM('error_largnotdefined'), 'error'); }
            } else if($_GET['action'] == 'verify'){
                if(isset($_GET['key'])){
                    if(VerifyAccount($_GET['key'])){
                        $GLOBALS['WSM']->Set(GM('login_succes_verified'), 'info');
                    } else { $GLOBALS['WSM']->Set(GM('error'), 'error'); }
                } else { $GLOBALS['WSM']->Set(GM('error'), 'error'); }
            }
        }
    }
?>