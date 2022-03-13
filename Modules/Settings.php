<?php
    //////// Type page's mods
    $ModulesArr = array('Login');
    AddModules($ModulesArr);
    $ModPageArr = array(
        'home' => array('Login'),
        'register' => array('PHPMailer')
    );
    LoadModulesByPage($ModPageArr);

    if(isset($_SESSION['Admin']) && ($_SESSION['Admin'] !== FALSE)){
        require_once('Modules/Upload/init.php');
        require_once('Modules/AdminPanel/init.php');
    } else {
        if(isset($_GET['page']) && ($_GET['page'] == 'LoginAdmin')){
            require_once('Modules/AdminPanel/init.php');
        }
    }
?>