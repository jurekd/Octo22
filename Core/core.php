<?php
require_once('../Links/Default.php');

if(isset($_GET['action'], $_GET['page'])){
    switch($_GET['action']){
        case 'getPageContent':
            getPageContent($_GET['page']);
            break;
        case 'getCategories':
            getCategories();
            break;
        case 'loginUser':
            if(userAuthorisation()){
                //
            } else {
                header('HTTP/1.1 401 Unauthorised');
            }
            break;
        case 'setAvatar':
            setAvatar($_GET['avatar']);
            break;
        case 'logout':
            logout();
            break;
        case 'getMenuPages':
            getMenuPages();
            break;
        case 'getCourses':
            getCourses();
            break;
        case 'getModules':
            getModules($_GET['data']);
            break;
        case 'logEvent':
            logEvent($_POST['course'], $_POST['task'], $_POST['event'], $_POST['newtask']);
            break;
        case 'getTasks':
            getTasks($_GET['data']);
            break;
        case 'getApps':
            getApps($_GET['task_id'], $_GET['intelect']);
            break;
        case 'getLastTask':
            getLastTask($_GET['data'], $_GET['intelect']);
            break;
        case 'getProgress':
            getProgress($_GET['course']);
            break;
        case 'getTask':
            getTask($_GET['data'], $_GET['task'], $_GET['intelect']);
            break;
        case 'enterTask':
            enterTask($_GET['course'], $_GET['task']);
            break;
        case 'getSession':
            getSession();
            break;
        case 'getLogs':
            getLogs();
            break;
        case 'getTeacher':
            getTeacher();
            break;
        ///////////////////////////
        case 'loginAdmin':
            loginAdmin($_POST['login'], $_POST['password']);
            break;
        case 'getAdminSession':
            getAdminSession();
            break;
        case 'getInstances':
            adminGetInstances($_GET['item']);
            break;
        case 'generateForm':
            adminGenerateForms($_GET['item'], $_GET['id']);
            break;
        case 'addedit':
            addedit($_GET['item'], $_GET['id']);
            break;
        case 'logoutAdmin':
            logoutAdmin();
            break;
        //////////////////
        default:
            header('HTTP/1.1 400 Bad Request');
            break;
    }
} else{
    header('HTTP/1.1 412 Precondition Failed');
}
?>