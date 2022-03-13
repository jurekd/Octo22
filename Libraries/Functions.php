<?php
    function AddModules($array){
        for($i=0; $i<count($array); $i++){
            require_once('Modules/'.$array[$i].'/init.php');
        }
    }

    function LoadModulesByPage($array){
        if(is_array($array)){
            if(isset($_GET['page'])){
                foreach ($array as $key => $value){
                    if($key == $_GET['page']){
                        for($i=0; $i<count($value); $i++){
                            require_once('Modules/'.$value[$i].'/init.php');
                        }
                    }
                }
            }
        }
    }

    function CountArrayRows(array &$array){
        if(is_array($array)){
            $i = 0;
            foreach($array as $arr){
                $i = $i + 1;
            }
            return $i;
        } else {
            return FALSE;
        }
    }

    function GetLanguageCookie(){
        if(isset($_COOKIE['Language']) !== FALSE){
            return $_COOKIE['Language'];
        } else {
            return DefaultL;
        }
    }

    function GM($property){
        $result = Query("SELECT * FROM `messages` WHERE `name`='$property'");
        $row = mysqli_fetch_assoc($result);
        return $row['message'];
    }

    function ValidateArray($array, $values){
        $result = TRUE;
        if(is_array($array) && is_array($values)){
            foreach ($array as $argument => $conditions){
                foreach ($conditions as $type => $value){
                    if($type == 'maxlength'){
                        if(strlen($values[$argument]) > $value){
                            $result = 'Error: '.$argument.' have higher length than '.$value;
                        }
                    } else if($type == 'contains'){
                        if(strpos($values['$argument'], $value) === FALSE){
                            $result = 'Error: '.$argument.' must contain "'.$value.'" string';
                        }
                    } else if($type == 'maxvalue'){
                        if($values['$argument'] > $value){
                            $result = 'Error: '.$argument.' have higher value than '.$value;
                        }
                    } else if($type == 'minvalue'){
                        if($values['$argument'] < $value){
                            $result = 'Error: '.$argument.' have lower value than '.$value;
                        }
                    } else if($type == 'except'){
                        if(strpos($values['$argument'], $value) !== FALSE){
                            $result = 'Error: '.$argument.' cannot contain "'.$value.'" string';
                        }
                    } else if($type == 'type'){
                        if($value == 'numeric'){
                            if(!is_numeric($values[$argument])){
                                $result = 'Error: '.$argument.' must be a numeric value';
                            }
                        } else if($value == 'text'){
                            if(!is_string($values[$argument])){
                                $result = 'Error: '.$argument.' must be a string value';
                            }
                        } else if($value == 'bool'){
                            if(!is_bool($values[$argument])){
                                $result = 'Error: '.$argument.' must be a boolean value';
                            }
                        } else if($value == 'array'){
                            if(!is_array($values[$argument])){
                                $result = 'Error: '.$argument.' must be an array';
                            }
                        } else if($value == 'notempty'){
                            if(trim($values[$argument]) == ''){
                                $result = 'Error: '.$argument.' cannot be empty';
                            }
                        }
                    }
                }
            }
        }
        return $result;
    }
    /*
    ------Pattern
    $array = array(
        'email' => array('maxlength' => '100', 'contains' => '@'),
        'name' => array('maxlength' => '10')
    );
    $values = array(
        'email' => 'abc@def.com',
        'name' => 'lucas'
    );
    */

    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    function rim(&$string) { 
        // ----- remove HTML TAGs ----- 
        $string = preg_replace ('/<[^>]*>/', ' ', $string); 
        
        // ----- remove control characters ----- 
        $string = str_replace("\r", '', $string);
        $string = str_replace("\n", ' ', $string);
        $string = str_replace("\t", ' ', $string);
        $string = str_replace("/", '', $string);
        $string = str_replace("\\", '', $string);
        
        // ----- remove multiple spaces ----- 
        $string = trim(preg_replace('/ {2,}/', ' ', $string)); 
    }

?>