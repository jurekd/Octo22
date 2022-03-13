<?php
class DatabaseCore{
    private $_table;

    function __construct($table){
        $this->_table = $table;
    }

    public function SwitchTable($table){
        $this->_table = $table;
    }

    public function Select($thing = "*", $cond = "", $other = ""){
        $name = $this->_table->Name();
        $result = "SELECT $thing FROM `$name`";
        if($cond != ""){
            $result = $result." WHERE $cond";
        }
        if($other != ""){
            $result = $result." ".$other;
        }
        return Query($result);
    }

    public function Insert($array){
        $vals = "";
        $cols = "";
        $first = "";
        foreach ($array as $key => $value){
            if(in_array($key, $this->_table->GetAttributes(), true)){
                $cols = $cols.$first."`$key`";
                $vals = $vals.$first."'$value'";
                $first = ", ";
            }
        }
        $name = $this->_table->Name();
        $result = "INSERT INTO `$name` ($cols) VALUES ($vals)";
        //echo $result;
        return Query($result);
    }

    public function Update($array, $cond){
        $update = '';
        $first = '';
        foreach($array as $key => $value){
            $update = $update.$first."`$key`='$value'";
            $first = ', ';
        }
        $name = $this->_table->Name();
        //print_r($array);
        $result = "UPDATE `$name` SET $update WHERE ".$cond;
        return Query($result);
    }

}
?>