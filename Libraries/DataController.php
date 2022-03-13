<?php
    function Query($query, $language = 'language'){
        $QueryData['host'] = 'octo.jduda.eu';
        $QueryData['password'] = 'Test177!';
        $QueryData['user'] = 'gettech_octo';
        $QueryData['Main'] = 'gettech_octo_testPL';
        $QueryData['PL'] = 'gettech_octo_testPL';
        //$QueryData['host'] = 'localhost';
        //$QueryData['password'] = 'Test177!';
        //$QueryData['user'] = 'gettech_octo';
        //$QueryData['Main'] = 'gettech_octoPL';
        //$QueryData['PL'] = 'gettech_octoPL';
        if(isset($language) && ($language) == 'language'){
            if(isset($_COOKIE['Language']) !== FALSE){
                $language = $_COOKIE['Language'];
            } else {
                $language = DefaultL;
            }
        }
        if((isset($query) && !empty($query)) && (isset($language) && !empty($language))){
            $Connection = mysqli_connect($QueryData['host'], $QueryData['user'], $QueryData['password'], $QueryData[$language]);
            if (!$Connection) {
                die('Could not connect: '.mysqli_error($Connection));
            }
            mysqli_query($Connection, "SET CHARSET utf8");
            mysqli_query($Connection, "SET NAMES `utf8` COLLATE `utf8_unicode_ci`");
            //mysqli_select_db($Connection, $QueryData[$language]);
            $result = mysqli_query($Connection, $query) or die('MySQL error: '.mysqli_error($Connection));
            mysqli_close($Connection);
            return $result;
        } else {
            return FALSE;
        }
    }

    function SMTPGet($value){
        $Array['Host'] = 'mail.example.com';
        $Array['Port'] = 25;
        $Array['Username'] = 'yourname@example.com';
        $Array['Replyto'] = 'yourname@example.com';
        $Array['Password'] = '';
        $Array['Name'] = 'Framework';
        return $Array[$value];
    }

    function TableExist($table, $language = 'language'){
        if(isset($language) && ($language) == 'language'){
            if(isset($_COOKIE['Language']) !== FALSE){
                $language = $_COOKIE['Language'];
            } else {
                $language = DefaultL;
            }
        }
        $result = Query("SHOW TABLES LIKE '$table'", $language);
        if(mysqli_num_rows($result) > 0){
            return TRUE;
        } else {
            return FALSE;
        }
    }

    function RowExist($table, $condition, $value, $language = 'language'){
        if(isset($language) && ($language) == 'language'){
            if(isset($_COOKIE['Language']) !== FALSE){
                $language = $_COOKIE['Language'];
            }
        }
        $result = Query("SELECT * FROM `".$table."` WHERE `".$condition."`='$value' LIMIT 1", $language);
        if(mysqli_num_rows($result) > 0){
            return TRUE;
        } else {
            return FALSE;
        }
    }

    function QueryCount($table, $language = 'language', $condition = NULL, $value = NULL){
        if(isset($language) && ($language) == 'language'){
            if(isset($_COOKIE['Language']) !== FALSE){
                $language = $_COOKIE['Language'];
            } else {
                $language = DefaultL;
            }
        }
        if((isset($table) && !empty($table)) && (isset($language) && !empty($language))){
            if($condition == NULL){
                $result = Query("SELECT Count(*) as Count FROM `$table`", $language);
                $count = mysqli_fetch_assoc($result);
                return $count['Count'];
            } else {
                $result = Query("SELECT Count(*) as Count FROM `$table` WHERE `$condition`='$value'", $language);
                $count = mysqli_fetch_assoc($result);
                return $count['Count'];
            }
        } else {
            return FALSE;
        }
    }
?>