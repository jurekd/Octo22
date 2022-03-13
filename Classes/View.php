<?php
    class View{
        private $Array;
        private $ArraySize;

        function __construct(){
            $this->Array = array();
            $this->ArraySize = 0;
        }

        public function AddItem($content){
            $this->Array[$this->ArraySize] = $content;
            $this->ArraySize = $this->ArraySize + 1;
        }

        public function DisplayGrid(){
            if($this->ArraySize != 0){
                echo '<div id="Grid">';
                for($i=0; $i<$this->ArraySize; $i++){
                    echo '<div id="GridElement">'.$this->Array[$i].'</div>';
                }
                echo '</div>';
            }
        }

        public function DisplayList(){
            if($this->ArraySize != 0){
                echo '<div id="List">';
                for($i=0; $i<$this->ArraySize; $i++){
                    echo '<div id="ListItem">'.$this->Array[$i].'</div>';
                }
                echo '</div>';
            }
        }

        public function DisplayRWDHorizontalMenu(){
            echo '<div id="menu-switch">MENU</div><nav id="r-menu"><ul>';
            for($i=0; $i<$this->ArraySize; $i++){
                echo '<li>'.$this->Array[$i].'</li>';
            }
            echo '</ul></nav>';
        }
    }
?>