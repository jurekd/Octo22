<?php
    ini_set("display_errors", 1);
    header('Content-Type: application/json');
    require_once('../../Libraries/Init.php');
    require_once('../../Libraries/DataController.php');
    require_once('../../Libraries/Functions.php');
    if(isset($_GET['category'])){
        $category = $_GET['category'];
        rim($category);
        $array = array();
        $i = 0;
        $result = Query("SELECT * FROM `projects` WHERE `category`='$category'");
        while($row = mysqli_fetch_assoc($result)){
            $splited = explode(';', $row['links']);
            if(is_array($splited)){
                $array[$i] = array(
                    'links' => $splited,
                    'description' => $row['description'],
                    'title' => $row['title']
                    );
                $i = $i + 1;
            }
        }
        echo json_encode($array);
    }
?>