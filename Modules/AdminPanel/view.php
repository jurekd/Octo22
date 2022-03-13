<?php
    require_once('Modules/AdminPanel/core.php');

    function AdminPanelPages($page){
        if(IsAdmin()){
            if($page == 'LoginAdmin'){
                ShowAdminPanel();
            } else if($page == 'AdminPanel'){
                ShowAdminPanel();
            } else if($page == 'AddNews'){
                ShowAddNewsForm();
            } else if($page == 'AddAlbum'){
                ShowAddAlbumForm();
            } else if($page == 'AddImage'){
                ShowAddImageForm();
            } else if($page == 'UpdatePage'){
                if(isset($_GET['id'])){
                    ShowUpdatePageForm($_GET['id']);
                } else { $GLOBALS['WSM']->Set(GM('admin_error_idnotdefined'), 'error'); }
            } else if($page == 'UpdateNews'){
                if(isset($_GET['id'])){
                    ShowUpdateNewsForm($_GET['id']);
                }
            }
        } else {
            if($page == 'LoginAdmin'){
                ShowLoginAdmin();
            }
        }
    }

////////////////////////////////////////////////////

    function ShowLoginAdmin(){
        echo '<div id="LoginAdmin">';
        $GLOBALS['WSM']->Put();
        $form = new Form('LoginAdmin', '?page=LoginAdmin&amp;action=LoginAdmin');
        $form->AddInput('login', GM('login_form_login'), 100, 'text');
        $form->AddInput('password', GM('login_form_password'), 20, 'password');
        $form->SetButton(GM('login_button_login'));
        $form->DisplayForm();
        echo '</div>';
    }

    function ShowAdminPanel(){
        if(IsAdmin()){
            $GLOBALS['WSM']->Put();
            echo '<div id="SignText">'.GW('admin_label_adminpanel').'</div>';
            $view = new View();
            $view->AddItem('<a href="?page=AddNews" id="AdminPanel">'.GM('admin_menu_addnews').'</a>');
            $view->AddItem('<a href="?page=AddAlbum">'.GM('admin_menu_addalbum').'</a>');
            $view->AddItem('<a href="?page=AddImage">'.GM('admin_menu_addimages').'</a>');
            $view->AddItem('<a href="?page=LoginAdmin&amp;action=LogoutAdmin">'.GM('login_button_logout').'</a>');
            $view->DisplayGrid();
        }
    }

    function ShowAddNewsForm(){
        if(IsAdmin()){
            $GLOBALS['WSM']->Put();
            echo '<div id="SignText">'.GW('admin_menu_addalbum').'</div>';
            $form = new Form('addnews', '?page=AdminPanel&amp;action=AddNews');
            $form->AddInput('title', GM('admin_form_title'), 500, 'text');
            $form->AddInput('content', GM('admin_form_content'), 5400, 'textarea');
            $form->SetButton(GM('button_add'));
            $form->DisplayForm();
        }
    }

    function ShowUpdateNewsForm($id){
        if(IsAdmin()){
            $GLOBALS['WSM']->Put();
            echo '<div id="SignText">'.GW('admin_label_updatenews').'</div>';
            $result = Query("SELECT * FROM `news` WHERE `ID`='$id'");
            $row = mysqli_fetch_assoc($result);
            $form = new Form('addnews', '?page=AdminPanel&amp;action=UpdateNews&amp;id='.$id);
            $form->AddInput('title', GM('admin_form_title'), 500, 'text', $row['name']);
            $form->AddInput('content', GM('admin_form_content'), 5400, 'textarea', $row['description']);
            $form->SetButton(GM('button_change'));
            $form->DisplayForm();
        }
    }

    function ShowAddAlbumForm(){
        if(IsAdmin()){
            $GLOBALS['WSM']->Put();
            echo '<div id="SignText">'.GW('admin_menu_addalbum').'</div>';
            $form = new Form('addalbum', '?page=AdminPanel&amp;action=AddAlbum');
            $form->AddInput('name', GM('admin_form_name'), 500, 'text');
            $form->AddInput('description', GM('admin_form_description'), 5400, 'textarea');
            $form->SetButton(GM('button_add'));
            $form->DisplayForm();
        }
    }

    function ShowAddImageForm(){
        if(IsAdmin()){
            $GLOBALS['WSM']->Put();
            echo '<div id="SignText">'.GW('admin_menu_addimages').'</div>';
            $result = Query("SELECT * FROM `albums`");
            $i = 0;
            $collection = '';
            while($row = mysqli_fetch_assoc($result)){
                $collection[$i] = array('value' => $row['ID'], 'text' => $row['name']);
                $i = $i + 1;
            }
            if($i != 0){
                $form = new Form('AddImage', '?page=AdminPanel&amp;action=AddImage', 'POST', TRUE);
                $form->AddLabel(GM('admin_form_choosealbum').':');
                $form->AddInput('album', 'Album', 400, 'select', '', $collection);
                $form->AddLabel(GM('admin_form_chooseimages').':');
                $form->AddInput('image[]', 'image', 0, 'file', '', '', '', TRUE, 'image/jpeg,image/png');
                $form->SetButton(GM('button_add'));
                $form->DisplayForm();
            } else {
                echo GM('admin_error_albumhavenoelements');
            }
        }
    }

    function ShowUpdatePageForm($id){
        if(IsAdmin()){
            $GLOBALS['WSM']->Put();
            $result = Query("SELECT * FROM `Pages` WHERE `ID`='$id'");
            $row = mysql_fetch_assoc($result);
            $form = new Form('UpdatePage', '?page=UpdatePage&amp;action=UpdatePage&amp;id='.$id);
            $form->AddInput('content', '', 5000, 'textarea', $row['content']);
            $form->SetButton(GM('button_change'));
            $form->DisplayForm();
        }
    }
?>