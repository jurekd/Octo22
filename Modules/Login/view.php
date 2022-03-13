<?php
    require_once('Modules/Login/core.php');

    function LoginPages($page){
        if(IsLogged()){
            //
        } else {
            if($page == 'login'){
                ShowLoginForm();
            } else if($page == 'register'){
                ShowRegisterForm();
            }
        }
    }

    function ShowLoginForm(){
        echo '<div id="LoginForm">';
        $GLOBALS['WSM']->Put();
        $form = new Form('LoginForm', '?page=login&amp;action=login');
        $form->AddInput('login', GM('login_form_login'), 100, 'text');
        $form->AddInput('password', GM('login_form_password'), 20, 'password');
        $form->SetButton(GM('login_button_login'));
        $form->DisplayForm();
        echo '<br><a href="?page=register">'.GM('login_form_createacc').'</a>';
        echo '</div>';
    }

    function ShowRegisterForm(){
        echo '<div id="RegisterForm">';
        $GLOBALS['WSM']->Put();
        $form = new Form('registerform', '?page=register&amp;action=register');
        $form->AddInput('login', GM('login_form_login'), 100, 'text');
        $form->AddInput('password1', GM('login_form_password'), 20, 'password');
        $form->AddInput('password2', GM('login_form_repeatpassword'), 20, 'password');
        $form->AddInput('email', 'E-mail', 200, 'text');
        $form->SetButton(GM('login_button_register'));
        $form->DisplayForm();
        echo '</div>';
    }
?>