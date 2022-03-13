<?php
    class JSONify{
        private $Root = array('header' => array(), 'content' => array());

        function __construct(){
            //
        }

        public function setContent($array) {
            if(is_array($array)){
                $this->Root['content'] = $array;
            }
        }

        public function setHeader($array){
            if(is_array($array)){
                $this->Root['header'] = $array;
            }
        }

        public function generateJSON() {
            return json_encode($this->Root['content'], JSON_UNESCAPED_UNICODE);
        }

        public function send(){
            header('Content-Type: application/json; charset=utf-8');
            echo json_encode($this->Root, JSON_UNESCAPED_UNICODE);
        }
    }
?>