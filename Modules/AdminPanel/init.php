<?php
    require_once('Modules/AdminPanel/view.php');
    // Actions
    if(IsAdmin()){
        if(isset($_GET['action'])){
            if($_GET['action'] == 'LogoutAdmin'){
                unset($_SESSION['Admin']);
                session_destroy();
                $GLOBALS['WSM']->Set(GM('admin_success_logout'), 'info');
                session_start();
            //////////////////////////////////////////////////////////////////
            } else if($_GET['action'] == 'AddNews'){
                if(isset($_POST['title'], $_POST['content'])){
                    $valid = new Validation();
                    $valid->AddCondition('title', $_POST['title'], 'type', 'notempty');
                    $valid->AddCondition('title', $_POST['title'], 'maxlength', 500);
                    $valid->AddCondition('content', $_POST['content'], 'type', 'notempty');
                    $valid->AddCondition('content', $_POST['content'], 'maxlength', 5400);
                    if($valid->Validate()){
                        if(AddNews($_POST['title'], $_POST['content'])){
                            $GLOBALS['WSM']->Set(GM('admin_success_newsadded'), 'info');
                        } else { $GLOBALS['WSM']->Set(GM('error'), 'error'); }
                    } else { $GLOBALS['WSM']->Set($valid->Validate(), 'error'); }
                } else { $GLOBALS['WSM']->Set(GM('error_argnotdefined'), 'error'); }
            //////////////////////////////////////////////////////////////////
            } else if($_GET['action'] == 'AddAlbum'){
                if(isset($_POST['name'])){
                    $valid = new Validation();
                    $valid->AddCondition('name', $_POST['name'], 'type', 'notempty');
                    $valid->AddCondition('name', $_POST['name'], 'maxlength', 500);
                    if($valid->Validate()){
                        if(AddAlbum($_POST['name'], $_POST['description'])){
                            $GLOBALS['WSM']->Set(GM('admin_success_albumadded'), 'info');
                        } else { $GLOBALS['WSM']->Set(GM('error'), 'error'); }
                    } else { $GLOBALS['WSM']->Set($valid->Validate(), 'error'); }
                } else { $GLOBALS['WSM']->Set(GM('error_argnotdefined'), 'error'); }
            //////////////////////////////////////////////////////////////////
            } else if($_GET['action'] == 'AddImage'){
                if(isset($_FILES['image'], $_POST['album'])){
                    $file_ary = reArrayFiles($_FILES['image']);
                    if(AddImage($file_ary, $_POST['album'])){
                        $GLOBALS['WSM']->Set(GM('admin_success_imagesadded'), 'info');
                    } else { $GLOBALS['WSM']->Set(GM('error'), 'error'); }
                } else { $GLOBALS['WSM']->Set(GM('error_argnotdefined'), 'error'); }
            //////////////////////////////////////////////////////////////////
            } else if($_GET['action'] == 'DelNews'){
                if(isset($_GET['id'])){
                    if(DelNews($_GET['id'])){
                        $GLOBALS['WSM']->Set(GM('admin_success_newsdeleted'), 'info');
                    } else { $GLOBALS['WSM']->Set(GM('admin_error_newsnotexist'), 'error'); }
                } else { $GLOBALS['WSM']->Set('Nie zdefiniowano argumentów', 'error'); }
            //////////////////////////////////////////////////////////////////
            } else if($_GET['action'] == 'DelAlbum'){
                if(isset($_GET['id'])){
                    if(DelAlbum($_GET['id'])){
                        $GLOBALS['WSM']->Set(GM('admin_success_albumdeleted'), 'info');
                    } else { $GLOBALS['WSM']->Set(GM('admin_error_albumnotexist'), 'error'); }
                } else { $GLOBALS['WSM']->Set(GM('error_argnotdefined'), 'error'); }
            //////////////////////////////////////////////////////////////////
            } else if($_GET['action'] == 'DelImage'){
                if(isset($_GET['id'])){
                    if(DelImage($_GET['id'])){
                        $GLOBALS['WSM']->Set(GM('admin_success_imagedeleted'), 'info');
                    } else { $GLOBALS['WSM']->Set(GM('admin_error_imagenotexist'), 'error'); }
                } else { $GLOBALS['WSM']->Set(GM('error_argnotdefined'), 'error'); }
            //////////////////////////////////////////////////////////////////
            } else if($_GET['action'] == 'UpdatePage'){
                if(isset($_POST['content'], $_GET['id'])){
                    if(UpdateContent($_GET['id'], $_POST['content'])){
                        $GLOBALS['WSM']->Set(GM('admin_success_contentchanged'), 'info');
                    } else { $GLOBALS['WSM']->Set(GM('error'), 'error'); }
                } else { $GLOBALS['WSM']->Set(GM('error_argnotdefined'), 'error'); }
            }
        }
    } else {
        if(isset($_GET['action']) && ($_GET['action'] == 'LoginAdmin')){
            if(isset($_POST['login'], $_POST['password'])){
                if(LoginAdmin($_POST['login'], $_POST['password'])){
                    $GLOBALS['WSM']->Set(GM('admin_success_logged'), 'info');
                } else { $GLOBALS['WSM']->Set(GM('login_error_loginorpass'), 'error'); }
            } else { $GLOBALS['WSM']->Set(GM('error_argnotdefined'), 'error'); }
        }
    }
?>