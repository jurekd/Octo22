<?php
class DataTable{
    private $_name;
    private $_columns;

    function __construct($name){
        $this->_name = $name;
        $this->_columns = array(
            array('id', 'int', '', 'primary_key')
        );
    }

    public function Name() {
        return $this->_name;
    }

    public function AddColumn($name, $type, $value, $editable, $translation = ''){
        if(isset($name, $type, $value)){
            if(in_array($type, array('int', 'boolean', 'datetime', 'varchar', 'text', 'float', 'richtext', 'file'), true)){
                //if(is_int($value) || ($value == NULL)){
                    $result = array($name, $type, $value, '', $editable, $translation);
                    //print_r($result);
                    array_push($this->_columns, $result);
                /*} else {
                    return false;
                }*/
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function IsEditable($column){
        $result = false;
        for($i=0; $i<$this->GetColumnsCount(); $i++){
            $tmp = $this->GetColumns();
            if($column == $tmp[$i][0]){
                if($tmp[$i][4] == true){
                    $result = true;
                    break;
                } else {
                    $result = false;
                    break;
                }
            }
        }
        return $result;
    }

    public function GetColumnsCount(){
        return count($this->_columns);
    }

    public function GetColumns(){
        return $this->_columns;
    }

    public function GetAttributes(){
        $result = array();
        foreach($this->_columns as $col){
            array_push($result, $col[0]);
        }
        return $result;
    }

}
?>
