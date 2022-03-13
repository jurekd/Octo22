function workingTimer(){

        $(".btn_start").hide();
        $(".pol-star").hide();
        $(".clock").show();

        var Timer = function(config){

        var self = this;
        var $container = $(config.container);
        var sec = 0;
        var limit = parseInt($container.data("timeup"));
        var actualKey = 0;
        var clearTime=function(){
            sec=0;

        }

        var injectTemplate = function(){
            //$container.html("<span id=\"minutes\">00</span>:<span id=\"seconds\">00</span>")
            $container.html("<span class=\"minutes\">00</span>:<span class=\"seconds\">00</span>")
        }

        var padLeft = function(val) {
            return val > 9 ? val : "0" + val;
        }

        var checkRanges = function(minutes, seconds){
            minutes = parseInt(minutes);
            var target = getNextRange(); // 40
            //

            var breakpoint = target / 100;
            var step = Math.round(parseFloat(breakpoint * limit));
            if(step <= minutes){ // zmiana stanu

                if(actualKey == 1){
                    $('#myModal').modal('show');
                }
                $container.css({color: config.ranges[target]});
                ++actualKey;
            }
        }

        var getNextRange = function(minutes, timeUp){
           var keys = Object.keys(config.ranges);  // []
           return parseInt(keys[actualKey]);
        }

        var runIt = function(){

            setInterval(function () {
                var seconds = padLeft(++sec % 60);
                var minutes = padLeft(parseInt(sec / 60, 10));
                var Elements = document.getElementsByClassName("seconds");

                for(var i = 0 ; i<Elements.length ; i++  )
                {
                    document.getElementsByClassName("seconds")[i].innerHTML= seconds;
                    document.getElementsByClassName("minutes")[i].innerHTML= minutes;
                }

                checkRanges(sec, seconds);
            }, 1000);
        }

        var init = function(){
            $container.show();
            injectTemplate();
            runIt();
            console.log(config)
        }

        init();

        return {
            actualState: function(){
                return actualKey;
            },
            clearTime:clearTime
        }

    }

       $Locals.timerOne = new Timer({
            "container" : ".clock",
            "ranges" : {
                70: "#ffa500", // po 20% bedzie kolor cecece
                100: "#CC3300"  // po 50 cacaca
            }
        });

        $("#scoreboardBtn").show()
}
