<?php
function getPageContent($page){
    $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['dictionary']);
    $result = $DatabaseCore->Select("`name`, `content`", "`page`='all'");
    //$result = Query("SELECT `name`, `content` FROM `dictionary` WHERE `page`='all'");
    while($row = mysqli_fetch_assoc($result)){
        $tmp[$row['name']] = $row['content'];
    }
    $result = $DatabaseCore->Select("`name`, `content`", "`page`='$page'");
    //$result = Query("SELECT `name`, `content` FROM `dictionary` WHERE `page`='$page'");
    while($row = mysqli_fetch_assoc($result)){
        $tmp[$row['name']] = $row['content'];
    }
    $DatabaseCore->SwitchTable($GLOBALS['DataRoot']['pages']);
    $result = $DatabaseCore->Select("*", "`name`='$page'");
    $row = mysqli_fetch_assoc($result);
    $tmp['page_content'] = $row['content'];
    $response = new JSONify();
    $response->setContent($tmp);
    $response->generateJSON();
    $response->send();
}

function getCategories(){
    $i = 0;
    $result = Query("SELECT * FROM `categories`");
    while($row = mysqli_fetch_assoc($result)){
        $tmp[$i] = $row;
        $i += 1;
    }
    $response = new JSONify();
    $response->setContent($tmp);
    $response->generateJSON();
    $response->send();
}

function getMenuPages(){
    $DatabaseCore = new DatabaseCore($GLOBALS['DataRoot']['pages']);
    $result = $DatabaseCore->Select("*", "`menu`='true'");
    $i = 0;
    while($row = mysqli_fetch_assoc($result)){
        $tmp[$i] = $row['name'];
    }
    $response = new JSONify();
    $response->setContent($tmp);
    $response->generateJSON();
    $response->send();
}
?>