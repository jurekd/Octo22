<?php
    class Form{
        private $Name;
        private $Action;
        private $Method;
        private $Enctype;
        private $Inputs = array('START');
        private $Button = 'Wyślij';

        function __construct($name, $action = 'index.php', $method = 'POST', $enctype = FALSE){
            $this->Name = $name;
            $this->Action = $action;
            $this->Method = $method;
            if($enctype == FALSE){
                $this->Enctype = '';
            } else if($enctype == TRUE){
                $this->Enctype = 'enctype="multipart/form-data"';
            }
            return TRUE;
        }

        public function AddInput($name, $placeholder, $maxvalue, $type = 'text', $value = '', $collection = '', $selected = '', $multiple = FALSE, $filetype = ''){
            $Count = count($this->Inputs);
            $result = '';
            if($type == 'textarea'){
                $result = '<textarea id="'.$name.'" name="'.$name.'" placeholder="'.$placeholder.'" maxlength="'.$maxvalue.'">'.$value.'</textarea>';
            } else if($type == 'checkbox'){
                if($selected == 'selected'){
                    $result = '<div id="W"><input type="checkbox" id="'.$name.'" name="'.$name.'" value="'.$value.'" checked="checked"> '.$collection.'</div>';
                } else {
                    $result = '<div id="W"><input type="checkbox" id="'.$name.'" name="'.$name.'" value="'.$value.'"> '.$collection.'</div>';
                }
            } else if($type == 'radio'){
                if($selected == 'selected'){
                    $result = '<div id="W"><input type="radio" id="'.$name.'" name="'.$name.'" value="'.$value.'" checked="checked"> '.$collection.'</div>';
                } else {
                    $result = '<div id="W"><input type="radio" id="'.$name.'" name="'.$name.'" value="'.$value.'"> '.$collection.'</div>';
                }
            } else if($type == 'select'){
                $result = '<select id="'.$name.'" name="'.$name.'">';
                for($i=0; $i<count($collection); $i++){
                    if($selected == $collection[$i]['text']){
                        $result = $result.'<option value="'.$collection[$i]['value'].'" selected="selected">'.$collection[$i]['text'].'</option>';
                    } else {
                        $result = $result.'<option value="'.$collection[$i]['value'].'">'.$collection[$i]['text'].'</option>';
                    }
                }
                $result = $result.'</select>';
            } else if($type == 'file'){
                if($multiple == FALSE){
                    $result = '<input class="File" type="file" id="'.$name.'" name="'.$name.'" accept="'.$filetype.'">';
                } else {
                    $result = '<input class="File" type="file" multiple id="'.$name.'" name="'.$name.'" accept="'.$filetype.'">';
                }
            } else {
                $result = '<input type="'.$type.'" id="'.$name.'" name="'.$name.'" placeholder="'.$placeholder.'" value="'.$value.'" maxlength="'.$maxvalue.'">';
            }
            $this->Inputs[$Count] = $result;
        }

        public function AddLabel($text){
            $Count = count($this->Inputs);
            $result = '<div id="W">'.$text.'</div>';
            $this->Inputs[$Count] = $result;
        }

        public function SetButton($name){
            $this->Button = $name;
        }

        public function DisplayForm(){
            echo '<form id="'.$this->Name.'" name="'.$this->Name.'" action="'.$this->Action.'" method="'.$this->Method.'" '.$this->Enctype.'>';
            for($i=1; $i<count($this->Inputs); $i++){
                echo $this->Inputs[$i];
            }
            echo '<input id="Button" name="Button" type="submit" value="'.$this->Button.'">';
            echo '</form>';
        }
    }
?>