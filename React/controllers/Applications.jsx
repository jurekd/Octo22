export default class Applications {
    


    static workingTimer() {

        $(".btn_start").hide();
        $(".pol-star").hide();
        $(".clock").show();

        var Timer = function (config) {

            var self = this;
            var $container = $(config.container);
            var sec = 0;
            var limit = parseInt($container.data("timeup"));
            var actualKey = 0;
            var interval = false;
            var clearTime = function () {
                sec = 0;
                window.clearInterval(interval);
                var seconds = '00';
                var minutes = '00';
                var Elements = document.getElementsByClassName("seconds");

                for (var i = 0; i < Elements.length; i++) {
                    document.getElementsByClassName("seconds")[i].innerHTML = seconds;
                    document.getElementsByClassName("minutes")[i].innerHTML = minutes;
                }
                $(".btn_start").show();
                $(".pol-star").show();
                checkRanges(sec, seconds);
            }

            var injectTemplate = function () {
                //$container.html("<span id=\"minutes\">00</span>:<span id=\"seconds\">00</span>")
                $container.html("<span class=\"minutes\">00</span>:<span class=\"seconds\">00</span>")
            }

            var padLeft = function (val) {
                return val > 9 ? val : "0" + val;
            }

            var checkRanges = function (minutes, seconds) {
                minutes = parseInt(minutes);
                var target = getNextRange(); // 40
                //

                var breakpoint = target / 100;
                var step = Math.round(parseFloat(breakpoint * limit));
                if (step <= minutes) { // zmiana stanu

                    if (actualKey == 1) {
                        $('#myModal').modal('show');
                    }
                    $container.css({ color: config.ranges[target] });
                    ++actualKey;
                }
            }

            var getNextRange = function (minutes, timeUp) {
                var keys = Object.keys(config.ranges);  // []
                return parseInt(keys[actualKey]);
            }

            var runIt = function () {

                interval = setInterval(function () {
                    var seconds = padLeft(++sec % 60);
                    var minutes = padLeft(parseInt(sec / 60, 10));
                    var Elements = document.getElementsByClassName("seconds");

                    for (var i = 0; i < Elements.length; i++) {
                        document.getElementsByClassName("seconds")[i].innerHTML = seconds;
                        document.getElementsByClassName("minutes")[i].innerHTML = minutes;
                    }

                    checkRanges(sec, seconds);
                }, 1000);
            }

            var init = function () {
                $container.show();
                injectTemplate();
                runIt();
                console.log(config)
            }

            init();

            return {
                actualState: function () {
                    return actualKey;
                },
                clearTime: clearTime
            }

        }

        $Locals.timerOne = new Timer({
            "container": ".clock",
            "ranges": {
                70: "#ffa500", // po 20% bedzie kolor cecece
                100: "#CC3300"  // po 50 cacaca
            }
        });

        $("#scoreboardBtn").show()
    }

//    ApplicationsData = [
// {'Intelect':'jez','Lesson':1,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Crossword/M1L2.html'},
// {'Intelect':'jez','Lesson':2,'Task':4,'Url':'/AplikacjeJavaScriptOffLine/Crossword/M2L4.html'},
// {'Intelect':'jez','Lesson':5,'Task':4,'Url':'/AplikacjeJavaScriptOffLine/Crossword/M5L4.html'},
// {'Intelect':'jez','Lesson':7,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Crossword/M7L2.html'},
// {'Intelect':'jez','Lesson':3,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/FillInBlank/M3_2.html'},
// {'Intelect':'jez','Lesson':8,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/FillInBlank/M8_1.html'},
// {'Intelect':'ruch','Lesson':2,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/Puzzle/M2L3.html'},
// {'Intelect':'ruch','Lesson':3,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Puzzle/M3L2.html'},
// {'Intelect':'ruch','Lesson':4,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/Puzzle/M4L3.html'},
// {'Intelect':'ruch','Lesson':5,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Puzzle/M5L2.html'},
// {'Intelect':'jez','Lesson':2,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/WordMatching/M2L3.html'},
// {'Intelect':'jez','Lesson':1,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/WordUnscramble/M1L3.html'},
// {'Intelect':'jez','Lesson':3,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/WordUnscramble/M3L1.html'},
// {'Intelect':'jez','Lesson':5,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/WordUnscramble/M5L3.html'},
// {'Intelect':'jez','Lesson':6,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/WordUnscramble/M6L2.html'},
// {'Intelect':'ruch','Lesson':1,'Task':4,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M1L4.html'},
// {'Intelect':'ruch','Lesson':2,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M2L2.html'},
// {'Intelect':'ruch','Lesson':2,'Task':4,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M2L4.html'},
// {'Intelect':'ruch','Lesson':3,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M3L1.html'},
// {'Intelect':'ruch','Lesson':5,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M5L1.html'},
// {'Intelect':'ruch','Lesson':6,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M6L1.html'},
// {'Intelect':'ruch','Lesson':7,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M7L2.html'},
// {'Intelect':'jez','Lesson':1,'Task':4,'Url':'/AplikacjeJavaScriptOffLine/word-search-game-master/LingwistykM1L4.html'},
// {'Intelect':'jez','Lesson':2,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/word-search-game-master/LingwistykM2L1.html'},
// {'Intelect':'jez','Lesson':3,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/word-search-game-master/LingwistykM3L3.html'},
// {'Intelect':'jez','Lesson':7,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/word-search-game-master/LingwistykM7L1.html'},
// {'Intelect':'jez','Lesson':6,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/word-search-game-master/LingwistykM6L1.html'},

// ]



}

