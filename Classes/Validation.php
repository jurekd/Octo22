<?php
    class Validation{
        private $Array = array();
        private $ArraySize;

        function __construct(){
            $this->Array = array();
            $this->ArraySize = 0;
        }

        public function AddCondition($name, $value, $type, $cvalue){
            $this->Array[$this->ArraySize] = array('name' => $name, 'value' => $value, 'type' => $type, 'cvalue' => $cvalue);
            $this->ArraySize = $this->ArraySize + 1;
        }

        public function Validate(){
            $result = TRUE;
            if($this->ArraySize > 0){
                foreach ($this->Array as $item){
                    if($item['type'] == 'maxlength'){
                        if(strlen($item['value']) > $item['cvalue']){
                            $result = 'Error: '.$item['name'].' have higher length than '.$item['cvalue'];
                        }
                    } else if($item['type'] == 'minlength'){
                        if(strlen($item['value']) < $item['cvalue']){
                            $result = 'Error: '.$item['name'].' have lower length than "'.$item['cvalue'];
                        }
                    } else if($item['type'] == 'contains'){
                        if(strpos($item['value'], $item['cvalue']) === FALSE){
                            $result = 'Error: '.$item['name'].' must contain "'.$item['cvalue'].'" string';
                        }
                    } else if($item['type'] == 'maxvalue'){
                        if($item['value'] > $item['cvalue']){
                            $result = 'Error: '.$item['name'].' have higher value than '.$item['cvalue'];
                        }
                    } else if($item['type'] == 'minvalue'){
                        if($item['value'] < $item['cvalue']){
                            $result = 'Error: '.$item['name'].' have lower value than '.$item['cvalue'];
                        }
                    } else if($item['type'] == 'except'){
                        if(strpos($item['value'], $item['cvalue']) !== FALSE){
                            $result = 'Error: '.$item['name'].' cannot contain "'.$item['cvalue'].'" string';
                        }
                    } else if($item['type'] == 'type'){
                        if($item['cvalue'] == 'numeric'){
                            if(!is_numeric($item['value'])){
                                $result = 'Error: '.$item['name'].' must be a numeric value';
                            }
                        } else if($item['cvalue'] == 'text'){
                            if(!is_string($item['value'])){
                                $result = 'Error: '.$item['name'].' must be a string value';
                            }
                        } else if($item['cvalue'] == 'bool'){
                            if(!is_bool($item['value'])){
                                $result = 'Error: '.$item['name'].' must be a boolean value';
                            }
                        } else if($item['cvalue'] == 'array'){
                            if(!is_array($item['value'])){
                                $result = 'Error: '.$item['name'].' must be an array';
                            }
                        } else if($item['cvalue'] == 'notempty'){
                            if(trim($item['value']) == ''){
                                $result = 'Error: '.$item['name'].' cannot be empty';
                            }
                        }
                    }
                }
            } else {
                $result = 'Error: Object have no items to validate';
            }
            return $result;
        }
    }
?>