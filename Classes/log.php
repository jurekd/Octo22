<?php
class logEvent{
    private $Root = array('user' => '', 'event' => '', 'content' => array(), 'eventDate' => '');

    function __construct($user, $event){
        $eventDate = new DateTimeC();
        $this->Root['user'] = $user;
        $this->Root['event'] = $event;
        $this->Root['eventDate'] = $eventDate->ToSQL();
    }

    public function setContent($array) {
        if(is_array($array)){
            $this->Root['content'] = $array;
        }
    }

    public function Save() {
        $user = $this->Root['user'];
        $event = $this->Root['event'];
        $date = $this->Root['eventDate'];
        $content = json_encode($this->Root['content']);
        Query("INSERT INTO `logs` (`user_id`, `event`, `date`, `content`) VALUES ('$user', '$event', '$date', '$content')");
    }
}
?>
