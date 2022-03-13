<?php
    class DateTimeC{
        private $Year;
        private $Month;
        private $Day;
        private $Hour;
        private $Minute;
        private $Second;
        private $DateT;

        function __construct($date = 'now'){
            if($date == 'now'){
                $cdate = new DateTime($date, new DateTimeZone('Europe/Warsaw'));
                $this->DateT = $cdate;
            } else {
                $cdate = new DateTime($date, new DateTimeZone('Europe/Warsaw'));
                $this->DateT = $cdate;
            }
            if($cdate !== FALSE){
                //$result = getdate(strtotime($result));
                $this->Year = $cdate->format('Y');
                $this->Month = $cdate->format('m');
                $this->Day = $cdate->format('d');
                $this->Hour = $cdate->format('H');
                $this->Minute = $cdate->format('i');
                $this->Second = $cdate->format('s');
                return TRUE;
            } else {
                return FALSE;
            }
        }

        public function FromDate($date){
            if($date == 'now'){
                $cdate = new DateTime($date, new DateTimeZone('Europe/Warsaw'));
                $result = date_format($cdate, "d-m-Y H:i:s");
            } else {
                $result = new DateTime($date, new DateTimeZone('Europe/Warsaw'));
            }
            if(strtotime($result) !== FALSE){
                $result = getdate(strtotime($result));
                $ThisTime = mktime($this->Hour, $this->Minute, $this->Second, $this->Month, $this->Day, $this->Year);
                $OtherTime = mktime($result['hours'], $result['minutes'], $result['seconds'], $result['mon'], $result['mday'], $result['year']);
                return $ThisTime - $OtherTime;
            } else {
                return FALSE;
            }
        }

        public function FromDateC($date){
            $result = getdate(strtotime($result));
            $ThisTime = mktime($this->Hour, $this->Minute, $this->Second, $this->Month, $this->Day, $this->Year);
            $OtherTime = mktime($date->Hour, $date->Minute, $date->Second, $date->Month, $date->Day, $date->Year);
            return $ThisTime - $OtherTime;
        }

        public function ToSQL(){
            $result = $this->Year.'-'.$this->Month.'-'.$this->Day.' '.$this->Hour.':'.$this->Minute.':'.$this->Second;
            return $result;
        }

        public function ToString($format = 'default'){
            $Years = $this->Year;
            $Months = $this->Month;
            $Days = $this->Day;
            $Hours = $this->Hour;
            $Minutes = $this->Minute;
            $Seconds = $this->Second;
            $LYears = substr($Years, 2, 4);
            if($Months < 10){
                $Months = '0'.$Months;
            }
            if($Days < 10){
                $Days = '0'.$Days;
            }
            if($Hours < 10){
                $Hours = '0'.$Hours;
            }
            if($Minutes < 10){
                $Minutes = '0'.$Minutes;
            }
            if($Seconds < 10){
                $Seconds = '0'.$Seconds;
            }

            if($format == 'default'){
                $result = $Years.'-'.$Months.'-'.$Days.' '.$Hours.':'.$Minutes.':'.$Seconds;
            } else {
                $dict = array('Y', 'M', 'D', 'h', 'm', 's', 'y');
                $val   = array($Years, $Months, $Days, $Hours, $Minutes, $Seconds, $LYears);
                $result = str_replace($dict, $val, $format);
            }
            return $result;
        }

        public function Expired(){
            $result = new DateTime('now', new DateTimeZone('Europe/Warsaw'));
            //$result = getdate(strtotime(date_format($cdate, "d-m-Y H:i:s")));
            //$ThisTime = mktime($this->Hour, $this->Minute, $this->Second, $this->Month, $this->Day, $this->Year);
            //$OtherTime = mktime($result->format('H'), $result->format('i'), $result->format('s'), $result->format('m'), $result->format('d'), $result->format('Y'));
            //$val = $this->DateT->diff($result);
            //echo $result." ".$this->DateT."\n";
            if($result > $this->DateT){
                return TRUE;
            } else {
                return FALSE;
            }
        }
    }
?>