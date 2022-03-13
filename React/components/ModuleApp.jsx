import React from 'react';
import Connector from '../services/Connector.jsx';
import Applications from '../controllers/Applications.jsx';
import AppsController from '../controllers/AppsController.jsx';

export default class ModuleApp extends React.Component{
    constructor(props){
        super(props);
        this.User = false;
        this.state = {
            render: false,
            currentTask: false,
            currentPage: 0,
            currentIntelect: 'przy',
            tasksList: [],
            tasksMap:{},
            dialogSpeaks: false,
            applications: false,
            appShow: false,
            hintRevealed: false
        };
        this.audioPlayer = false;
        this.intelectEnum = ['wp', 'muz', 'przy', 'matlog', 'ruch', 'jez', 'intra', 'inter'];
        this.Intelect = {
            wp: ["SPATIAL-VISUAL", "/Theme/Images/Intelect/wp/wp_bg.jpg", "/Theme/Images/Intelect/wp/wp_ikona.png", "/Theme/Images/Intelect/wp/wp_avatar.png", "wp"],
            muz: ["MUSICAL","/Theme/Images/Intelect/muz/muz_bg.jpg", "/Theme/Images/Intelect/muz/muz_ikona.png","/Theme/Images/Intelect/muz/muz_avatar.png", "muz"],
            przy: ["NATURALIST","/Theme/Images/Intelect/przy/przy_bg.jpg", "/Theme/Images/Intelect/przy/przy_ikona.png", "/Theme/Images/Intelect/przy/przy_avatar.png", "przy"],
            matlog: ["LOGICAL-MATHEMATICAL", "", "/Theme/Images/Intelect/matlog/matlog_ikona.png", "/Theme/Images/Intelect/matlog/matlog_avatar.png", "matlog"],
            ruch: ["BODILY-KINESTETIC", "/Theme/Images/Intelect/ruch/ruch_bg.jpg", "/Theme/Images/Intelect/ruch/ruch_ikona.png", "/Theme/Images/Intelect/ruch/ruch_avatar.png", "ruch"],
            jez: ["LINGUISTIC", "/Theme/Images/Intelect/jez/jez_bg.jpg", "/Theme/Images/Intelect/jez/jez_ikona.png", "/Theme/Images/Intelect/jez/jez_avatar.png", "jez"],
            intra: ["INTRAPERSONAL", "/Theme/Images/Intelect/intra/intra_bg.jpg", "/Theme/Images/Intelect/intra/intra_ikona.png", "/Theme/Images/Intelect/intra/intra_avatar.png", "intra"],
            inter: ["INTERPERSONAL", "/Theme/Images/Intelect/inter/inter_bg.jpg", "/Theme/Images/Intelect/inter/inter_ikona.png", "/Theme/Images/Intelect/inter/inter_avatar.png", "inter"],
        };
       ////////////////////////////////////////////
        //Popup variable
        ///////////////////////////////////////////
        this.lessonToRev = {'firstPage': false, 'revReq':true, 'revTitle':false, 'revWhole': []/*{'revModId':false, 'revMod':false, 'revLess':false }*/ };
        this.currentRev = false;
        this.firstLength = false;
        this.Stopper = true;
        ///////////////////////////////////////////
        this.CurentUserPosition = 0;
        this.launchCount = 0;
        this.border = Math.floor(Math.random() * 10) + 1;
        if((!localStorage.intelect) || (localStorage.intelect == "undefined")){
            var inte = Math.floor(Math.random() * 7) + 0;
            this.state.currentIntelect = this.intelectEnum[inte];
            Connector.logEvent('1', '0', `intelect_random_for[${this.state.currentIntelect}]`, 'self');
            localStorage.intelect = this.state.currentIntelect;
        } else {
            this.state.currentIntelect = localStorage.intelect;
        }
        Connector.getSession().then((data) => {
            this.User = data;
            if(this.User.basic == '1') {
                this.state.currentIntelect = 'matlog';
                localStorage.intelect = 'matlog';
            }
            this.getTasks().then((response) => {
                var obj = this.setLastTask();
                this.getTask(obj[0], obj[1]);
            });
        });
    }
    setLastTask() {
        for(var i=1; i<this.state.tasksList.length; i++){
            for(var j=0; j<this.state.tasksList[i].tasks.length; j++){
                if(this.state.tasksList[i].tasks[j].status != 'closed') {
                    return [this.state.tasksList[i].task_id, j];
                }
            }
        }
    }
    getApps() {
        return new Promise((resolve, reject) => {
            this.setState({appShow: false});
            var data = {
                task_id: this.currentPage.task_id,
                intelect: this.state.currentIntelect
            };
            Connector.getHTTP('getApps', data).then((response) => {
                if (response.content) {
                    this.setState({ applications: response.content });
                    resolve();
                } else {
                    this.setState({ applications: false });
                    reject();
                }
            }).catch((err) => {
                this.setState({applications: false});
                reject();
            });
        });
    }
    getTasks() {
        return new Promise((resolve, reject) => {
            Connector.getHTTP('getTasks', { data: 1 }).then((response) => {
                this.state.tasksList = response.content.tasks;
                this.setState({tasksList: response.content.tasks});
                for(let i=0;i<this.state.tasksList.length;i++)
				  for(let j=0;j<this.state.tasksList[i].tasks.length;j++)
				  {
					//console.log(j);
					this.state.tasksMap[this.state.tasksList[i].tasks[j].task_id]=[parseInt(this.state.tasksList[i].task_id),j,i];
				  }
                resolve();
            });
        });
    }
    get currentLesson() {
        for(var i=0; i<this.state.tasksList.length; i++){
            if(this.state.tasksList[i].task_id == this.state.currentTask.task_id){
                return i;
            }
        }
    }
    changePage(pageIndex){
        let oldTaskId = this.currentPage.task_id;
        $(window).scrollTop();
        $(document).scrollTop();
        $('html').scrollTop();
        if ($Locals.timerOne) {
            $Locals.timerOne.clearTime();
        }
        this.pouse();
        this.state.currentPage = pageIndex;
        this.setState({currentPage: pageIndex, hintRevealed: false});
        this.enterTask(1, this.currentPage.task_id);
        this.launchCount = 0;
        this.border = Math.floor(Math.random() * 10) + 1;
        this.showDialog("on_page_launch");
        this.getApps();
        Connector.logEvent('1', oldTaskId, 'task_chnged_to', this.currentPage.task_id);
    }
    setIntelect(_name){
        Connector.logEvent('1', this.currentPage.task_id, `intelect_set_to_[${_name}]`, 'self');
        localStorage.intelect = _name;
        this.state.currentIntelect = _name;
        this.setState({currentIntelect: _name});
        this.getTask(this.state.currentTask.task_id, this.state.currentPage);
        this.getApps();
    }
    getTask(taskId, pageIndex){
        this.setState({render: false});
        if ($Locals.timerOne) {
            $Locals.timerOne.clearTime();
        }
        if(this.state.render) {
            Connector.logEvent('1', this.currentPage.task_id, `module_changed_to`, taskId);
        }
        Connector.getTask((taskId) ? taskId : null, this.state.currentIntelect).then((response) => {
            this.setState({ currentTask: response.content,
                currentPage: (pageIndex) ? pageIndex : 0,
                render: true,
                hintRevealed: false
            });
            this.border = Math.floor(Math.random() * 10) + 1;
            this.launchCount = 0;
            this.showDialog("on_page_launch");
            this.getApps();
        });
    }
    get currentPage(){
        return this.state.currentTask.subtasks[this.state.currentPage];
    }
    get taskPages(){
        return this.state.currentTask.subtasks;
    }
    get intelect(){
        return this.Intelect[this.state.currentIntelect];
    }
    showDialog(_name) {
        // $("#dialogbox").show;
        this.currentPage.avatar_dialog.forEach((value, index) => {
            if ((value.name == _name) && (value.profile == this.intelect[0])) {
                // $('#dialogbox').html(value.content);
                this.setState({dialogSpeaks: value.content});
            }
        })
    }
    checkComplete(){
        // var complete = true;
        // $('.page-link').each(function () {
        //     if (!$(this).hasClass('closed_page')) {
        //         complete = false;
        //     }
        // });
        // if (complete == true) {
        //     $($('.leftSide')[$Locals.currentLesson]).addClass('closed');
        // }
    }
    outf(text) {
        var mypre = document.getElementById("output");
        mypre.innerHTML = mypre.innerHTML + text;
    }
    builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }
    codeLaunch(){
        var prog = document.getElementById("yourcode").value;
        prog = prog.replace(/^\s*[\r\n]/gm, "");
        var lastLine = prog.substr(prog.lastIndexOf("\n") + 1);
        if (lastLine.replace(/^\s*/g, "") == "")
            lastLine = prog.substr(prog.substr(prog.substr(0, prog.lastIndexOf("\n") - 1).lastIndexOf("\n") + 1));
        if (lastLine.indexOf("print") == -1)
            prog = prog.substr(0, prog.lastIndexOf("\n") == -1 ? 0 : prog.lastIndexOf("\n") + 1) + "print(" + lastLine + ")";
        var mypre = document.getElementById("output");
        mypre.innerHTML = '';
        Sk.pre = "output";
        Sk.configure({
            output: this.outf, read: this.builtinRead, python3: true, execLimit: 1000, inputfun: (str) => {
                return window.prompt(str);
            }, inputfunTakesPrompt: true
        });
        var myPromise = Sk.misceval.asyncToPromise(() => {
            return Sk.importMainWithBody("<stdin>", false, prog, true);
        });

        myPromise.then((mod) => {
            var rawStr = $('#output').text().replace(/^\s+|\s+$/gm, '');
            var correctAnswer = this.currentPage.correct_answer;
            if(this.state.currentIntelect == 'przy') {
                correctAnswer = this.currentPage.natur_answer;
            }
            if (correctAnswer == rawStr) {
                this.showDialog("task_completed_with_success");
                // this.currentPage.status = 'closed';
                this.state.currentTask.subtasks[this.state.currentPage].status = 'closed';
                this.setState({currentTask: this.state.currentTask});
                // $($('.page-link')[$Locals.currentPage]).addClass('closed_page');
                this.checkComplete();
                this.isTaskComplete();
                this.forceUpdate();
                if ($Locals.timerOne) {
                    $Locals.timerOne.clearTime();
                }
                $('#zadanie_sukces').modal('show');
                Connector.logEvent('1', this.currentPage.task_id, `interpreter_started_with_success_with_correct`, 'self');
            } else {
                this.launchCount = this.launchCount + 1;
                if (this.launchCount <= 2) {
                    this.showDialog("task_failed_" + this.launchCount);
                } else {
                    this.showDialog("task_failed_more");
                }
                if (this.border == this.launchCount) {
                    $("#PO").modal("show");
                    this.showDialog("hint_requested");
                    Connector.logEvent('1', this.currentPage.task_id, `hint_requested`, 'self');
                }
                Connector.logEvent('1', this.currentPage.task_id, `task_failed_tried[${this.launchCount}]`, 'self');
                // VM.logEvent(1, $Locals.currentTaskId, 'interpreter_started_with_success_but_notcorrect', 'self');
            }
        }, (err) => {
                var errStr = err.toString();
                var errLine = errStr.substr(errStr.indexOf('line')).match(/\d+/);
                var errDesc = errStr.substr(0, errStr.indexOf('on line') - 1);;
                var errMsg = 'Błąd!';
                this.launchCount = this.launchCount + 1;
                if (this.launchCount <= 2) {
                    this.showDialog("task_failed_" + this.launchCount);
                } else {
                    this.showDialog("task_failed_more");
                }
                if (this.border == this.launchCount) {
                    $("#PO").modal("show");
                    this.showDialog("hint_requested");
                    Connector.logEvent('1', this.currentPage.task_id, `hint_requested`, 'self');
                }
                Connector.logEvent('1', this.currentPage.task_id, `task_error_tried[${this.launchCount}]`, 'self');
                if (errLine != null)
                    errMsg = 'Błąd w linii ' + parseInt(errLine, 10) + ':\n' + errDesc;
                this.outf(errMsg);
                // VM.logEvent(1, $Locals.currentTaskId, 'interpreter_started_with_error', 'self');
                // VM.logEvent(1, $Locals.currentTaskId, errStr, 'self');
            });
    }
    showIT(){
        Connector.logEvent('1', this.currentPage.task_id, `user_want_to_see_code`, 'self');
        this.showDialog("hint_revealed");
        this.setState({hintRevealed: true});
    }
    showPList() {
        /* Pokazywanie i ukrywanie tabeli wyników */
        if ($('#ScoreBoard').is(':visible')) {
            $("#ScoreBoard").slideToggle("slow");
            $("#scoreboardBtn").text("Zobacz, który jesteś?");
            Connector.logEvent('1', this.currentPage.task_id, `user_want_to_see_score`, 'self');
            // ScoreBoardIsVisible = false;
        } else {
            $("#ScoreBoard").slideToggle("slow");
            $("#scoreboardBtn").text("Ukryj liste");
            // ScoreBoardIsVisible = true;
            this.ChangeUserPositionOnScoreBoard();
        }
    }
    ChangeUserPositionOnScoreBoard() {
        setInterval(function () {
            var lis = document.getElementById("ScoreBoard").getElementsByTagName("li");
            var TimeOfOpponentBeforeUser = parseInt($(lis[this.CurentUserPosition + 1]).attr('data-sortAs'));
            var lis = document.getElementById("ScoreBoard").getElementsByTagName("li");
            var minutes = parseInt(document.getElementsByClassName("minutes")[0].innerHTML);
            var seconds = parseInt(document.getElementsByClassName("seconds")[0].innerHTML);
            var UserTime = minutes * 60 + seconds;

            if (UserTime > TimeOfOpponentBeforeUser) {
                $(lis[this.CurentUserPosition]).fadeToggle();
                $(lis[this.CurentUserPosition + 1]).fadeToggle();
                $(lis[this.CurentUserPosition]).before($(lis[this.CurentUserPosition + 1]));
                $(lis[this.CurentUserPosition]).fadeToggle();
                $(lis[this.CurentUserPosition + 1]).fadeToggle();
                this.CurentUserPosition++;
            }

        }, 1000);
    }
    setAvatar(avatar) {
        var data = {
            'avatar': avatar
        };
        Connector.getHTTP('setAvatar', data).then((data) => {
            $('#wybierz_avatar').modal('hide');
            // $('#userAvatar').attr("src", "Theme/Images/icon_people/" + avatar + ".png");
            this.User.userAvatar = avatar;
            this.forceUpdate();
        });
    }
    play() {
        // console.log(`/${this.currentPage.audioLink}`);
        // var audio = document.getElementById("Audio");
        // console.log(audio);
        // console.log(audio.play());
        this.audioPlayer = new Audio(this.currentPage.audioLink);
        this.audioPlayer.play();
        var AudioPlayerStartElements = document.getElementsByClassName('AudioPlayerStart');
        var AudioPlayerStopElements = document.getElementsByClassName('AudioPlayerStop');

        //
        for (var i = 0; i < AudioPlayerStartElements.length; ++i) {
            var item = AudioPlayerStartElements[i];

            item.style.color = "#45a9ff";
        }

        for (var i = 0; i < AudioPlayerStopElements.length; ++i) {
            var item = AudioPlayerStopElements[i];
            item.style.color = "#337ab7";
        }
        this.forceUpdate();
        Connector.logEvent('1', this.currentPage.task_id, `user_played_audio`, 'self');
    }
    menuToggle(){
        e.preventDefault();
        $("#col-3").removeClass("Lesson_Menu_CLOSE_Path_OPEN");
        $("#col-1").toggleClass("Menu_CLOSED");
        $("#col-3").toggleClass("Lesson_Menu_CLOSED");
        if ($("#col-1").hasClass("Menu_CLOSED") && $("#col-2").hasClass("Path_OPEN")) {
            $("#col-3").toggleClass("Lesson_Menu_CLOSE_Path_OPEN");
        }
        setTimeout(() => {
            $("#logout a span").toggleClass("remove");
            $("#userFunction ul li a span").toggleClass("remove");
            $("#logout a i").toggleClass("menu_icons_small");
            $("#logout a i").toggleClass("patch");
            $("#userFunction ul li a i").toggleClass("menu_icons_small");
            $("#intelect_main_icon").toggleClass("intelect_main_icon");
            $("#intelect_main_icon_li").toggleClass("menu_Intelect_main_icons_small");
            $("#userBox").toggleClass("remove");
            $("#userBox_small").toggleClass("remove");
            $("#otherIntelect").toggleClass("remove");
        }, 200);
    }
    patchToggle() {
        e.preventDefault();
        $("#col-3").removeClass("Lesson_Menu_CLOSE_Path_OPEN");
        $("#col-2").toggleClass("Path_OPEN");
        $("#col-3").toggleClass("Lesson_Path_OPEN");
        if ($("#col-1").hasClass("Menu_CLOSED") && $("#col-2").hasClass("Path_OPEN")) {
            $("#col-3").toggleClass("Lesson_Menu_CLOSE_Path_OPEN");
        }
        if ($("#col-2").hasClass("Path_OPEN")) {
            setTimeout(() => {
                $("#lessonWay span").toggleClass("remove");
            }, 500);
        } else {
            $("#lessonWay span").toggleClass("remove");
        }
    }
    pouse() {
        // var audio = document.getElementById("Audio");
        // audio.pause();
        if(this.audioPlayer instanceof Audio) {
            this.audioPlayer.pause();
        }
        var AudioPlayerStartElements = document.getElementsByClassName('AudioPlayerStart');
        var AudioPlayerStopElements = document.getElementsByClassName('AudioPlayerStop');

        for (var i = 0; i < AudioPlayerStartElements.length; ++i) {
            var item = AudioPlayerStartElements[i];
            item.style.color = "#337ab7";
        }

        for (var i = 0; i < AudioPlayerStopElements.length; ++i) {
            var item = AudioPlayerStopElements[i];

            item.style.color = "#45a9ff";
        }
    }
    enterTask(course, task){
        var data = {
            "course": course,
            "task": task
        }
        Connector.getHTTP('enterTask', data);
    }
    componentDidMount(){
        if(this.state.hintRevealed) {
            $(".podpowiedz_kod").show();
        } else {
            $(".podpowiedz_kod").hide();
        }
       // $("#Lesson").replaceWith( "<h2>New heading</h2>" );
        if (this.User.userAvatar == 'none') {
            $('#wybierz_avatar').modal('show');
        }
    }
    zoom() {
        $('#aplikacja_duza').modal('show');
        Connector.logEvent('1', this.currentPage.task_id, `user_zoomed_application`, 'self');
    }
    isTaskComplete(){
        var complete = true;
        this.state.currentTask.subtasks.forEach((task) => {
            if(['in_progress', 'new'].includes(task.status)) {
                complete = false;
            }
        });
        if(complete) {
            this.state.tasksList.forEach((task) => {
                if(task.task_id == this.state.currentTask.task_id) {
                    task.status = 'closed';
                }
            });
            this.setState({tasksList: this.state.tasksList});
        }
    }

    /*
    *************************************************************************************************
    **************************************Funcja popup'u*********************************************
    *************************************************************************************************
    */
    closePopup() {
        $('#popup').hide();
        var r;
        if(this.lessonToRev.revWhole.length==0)
            r = false;
        else r = confirm("Czy chcesz zrezygnowac z reszty powtórki?");  
        if(r){
            for(var i = 0; i < this.lessonToRev.revWhole.length; i++){
                //Connector.logEvent();
                this.lessonToRev.revWhole.splice(i,1);
            }
        }
        if(this.lessonToRev.revWhole.length==0 || r) {
            this.lessonToRev.revReq=false;
            if(this.firstLength)
                if(this.state.currentTask.task_id == this.lessonToRev.firstPage.firstMod) this.changePage(this.lessonToRev.firstPage.firstPage);
                else this.getTask(this.lessonToRev.firstPage.firstMod, this.lessonToRev.firstPage.firstPage);
        }
    }
    getRevision() {
        return new Promise((resolve, reject) => {
            Connector.getHTTP('getRev', {data:1}).then((response) => {
                this.lessonToRev.revTitle = response.content[0].revTitle;
                this.lessonToRev.revReq = response.content[0].revReq;
                for(var i = 0; i < response.content[0].revLess.length; i++)
                    LOOP: for(var j = 0; j < this.state.tasksList.length; j++){
                        for(var k = 0; k < this.state.tasksList[j].tasks.length; k++){
                            if(response.content[0].revLess[i] == this.state.tasksList[j].tasks[k].task_id) {
                                this.lessonToRev.revWhole[i] = {'revModId': this.state.tasksList[j].task_id, 'revMod': j, 'revLess': k};
                                break LOOP;
                            }
                        }
                    }
                this.Stopper = false;
                resolve();
            });
        });
    }
    updateList(modul, less) {
        //Connector.logEvent();
        if(!this.firstLength) {
            this.lessonToRev.firstPage = {'firstMod': this.state.currentTask.task_id, 'firstPage': this.state.currentPage};
            this.firstLength = true;
        }
        var num;
        for(var i = 0; i < this.lessonToRev.revWhole.length; i++){
            if(this.lessonToRev.revWhole[i].revLess == less && this.lessonToRev.revWhole[i].revModId == modul){
                num = i;
                break;
            }
        }
        this.currentRev = this.lessonToRev.revWhole[num];
        this.lessonToRev.revWhole.splice(num,1);
        this.lessonToRev.revReq = false;
        if(this.state.currentTask.task_id == modul) this.changePage(less);
        else this.getTask(modul, less);
    }
    showPopup(){
        var num = false;
        if(this.currentRev.revLess == this.state.currentPage && this.currentRev.revModId == this.state.currentTask.task_id) num = true;
        if(this.lessonToRev.revWhole.length != 0 && num){
            $('#popup').show();
            this.lessonToRev.revReq = true;
        }
    }
    /*
    ************************************************************************************************
    */
    
    componentDidUpdate(){
        if(this.state.hintRevealed) {
            $(".podpowiedz_kod").show();
        } else {
            $(".podpowiedz_kod").hide();
        }
        $('.helper').click(() => {
            $('.helper').siblings(".helper_code").removeClass("helper_code");
            this.showDialog("on_task_reveal");
            Connector.logEvent('1', this.currentPage.task_id, `user_clicked_helper`, 'self');
        });
        if(this.state.currentTask.subtasks){
            this.replaceTask();
        }
        $('a#test').click(() => {
            this.showDialog("on_task_reveal");
            this.setState({appShow: true});
            Connector.logEvent('1', this.currentPage.task_id, `user_clicked_trial`, 'self');
        });
       // $("#Lesson").replaceWith( "<h2>New heading</h2>" );
       
    //    for(var i = 0 ; i < ApplicationsData.length ; i++){
           
    //         if(this.currentLesson == ApplicationsData[i]['Lesson'] && (this.state.currentPage + 1) == ApplicationsData[i]['Task'] && localStorage.intelect == ApplicationsData[i]['Intelect']){
    //             $("#Task").replaceWith( '<iframe src="'+ApplicationsData[i]['Url']+'" height="600" width="910" style="border:none;"></iframe>' );
    //         }

    //        console.log(ApplicationsData[i]['Url']);
    //    }
        /*
        ************************************
        */
        if(this.lessonToRev.revWhole.length == 0 && this.Stopper) {
            this.getRevision();
        }
        if(!this.lessonToRev.revReq) {
            $('#popup').hide();
        } else {
            if(this.lessonToRev.revWhole.length==0) this.lessonToRev.revTitle = "Nic więcej powtórzenia";
            $('#popup').show();
        }
        /*
        ***********************************
        */
    }
    replaceTask() {
        if(this.state.currentIntelect == 'przy') {
            $('#Task').html(this.currentPage.naturalist);
            $(".podpowiedz_kod").html(this.currentPage.natur_code);
            $(".helper_code").html(this.currentPage.natur_hint);
        } else if(this.state.currentIntelect == 'inter') {
            $('#Task').html(this.currentPage.alternative);
        } else if(this.state.currentIntelect == 'ruch') {
            $('#Task').html(this.currentPage.kinestetyk);
        }
    }
    render(){
        if(!this.state.render) { return <div id="loaderBody"><div id="loader"> </div></div>; }

        const audioPlayer = <div id="AudioPlayer" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>

                    </div>
                    <div className="modal-body">
                    <video id="Audio" controls>
                        <source src={`/${this.currentPage.audioLink}`} type="audio/mpeg" />
                    </video>
                    </div>
                </div>
            </div>
        </div>

        return (<div>
        <div id="popup" style={{'position':'fixed','zIndex': 9999,'display': 'block','backgroundColor':'rgba(235,235,235,0.5)', 'width': 100 + '%', 'height': 100 + '%'}}>
        <div id='lessonList' style={{'fontSize':4+'vh','width':40+'%','height':60+'%','position':'absolute','top':20+'%','left':30+'%', 'textAlign':'center'}}>
                    <div>{this.lessonToRev.revTitle}</div>
                    
                    <ul style={{'listStyle':'none'}}>{this.lessonToRev.revWhole.map((lesson, index) => {
                        return (<li key={index} >
                            <a id="lessonRev" target="_blank" onClick={() => this.updateList(lesson.revModId, lesson.revLess)} style={{'cursor':'pointer'}}>Modul {lesson.revMod} Lekcja {lesson.revLess+1}</a>
                        </li>)
                    })}</ul>
                    
            </div>
            <button style={{'border':'outset','lineHeight':100+'%','position':'absolute','height':10+'%','width':10+'%','top':2+'%','right':2+'%', 'fontSize': 500 + '%'}} onClick={() => this.closePopup()}>X</button>
        </div>
            <div id="backGround" style={{'backgroundImage': `url(${this.intelect[1]})`, 'backgroundSize':'100% 100%'}}></div>
            <div id="PO" className="modal fade" role="dialog">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title" style={{'color':'green'}}> Czy napewno chcesz zobaczyć podpowiedź </h4>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">NIE</button>
                <button id="tak_chce" onClick={() => this.showIT()} type="button" className="btn btn-default" data-dismiss="modal">TAK</button>
            </div>
        </div>
    </div>
</div>
<div id="Zegar" className="modal fade" role="dialog">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Zegar</h4>
            </div>
            <div className="modal-body">
                <p className="minutnik_p"> Ta strona zajmie Ci : 7 min.</p>
                <p className="wyzwanie"> Podejmujesz wyzwanie?</p>
                <p className="minutnik_p pol-star">Gotowy do startu! </p>
                <a className="btn btn-primary btn-block btn-black btn_kurs btn_start" onClick={()=>Applications.workingTimer()} data-dismiss="modal">START</a>
                <div className="clock" data-timeup="420">
                    <span className="minutes">00</span>:<span className="seconds">00</span>
                </div>
                <button type="button" id="scoreboardBtn" style={{'display': 'none'}} className="btn btn-primary btn-block btn-black btn_sprawdz center-block"
                    onClick={()=>this.showPList()}>
                    Zobacz, który jesteś?
                </button>
            </div>
            
            <ol id="ScoreBoard" className="list-group text-center " style={{'display': 'none'}}>
                <li data-sortAs="0" id="UserPosition" className="list-group-item">{this.User.userName} {this.User.userSurname} <b><span className="minutes">00</span>:<span className="seconds">00</span></b> </li>
                <li data-sortAs="304" className="list-group-item">Tomasz Nowak <b>05:04</b></li>
                <li data-sortAs="368" className="list-group-item">Anna Nowakowka <b>06:08</b></li>
                <li data-sortAs="432" className="list-group-item">Adam Kowalczyk <b>07:12</b></li>    
            </ol>
              
            
        </div>
    </div>
</div>



<div id="col-2">
    <div id="Path">
        <div className="margin-bottom">
            <a id="patch-toggle" className="patch-toggle_active" onClick={()=>patchToggle()} href="#"><span id="main_icon"><i className="fa fa-bars ham-position" aria-hidden="true"></i></span></a>
        </div>
        <div id="lessonWay">
            <div className="scrollStyle">
                <ul style={{'paddingLeft': '0px'}}>
                    {this.state.tasksList.map((task, index) => {
                        return (<li key={index} className={`intrapersonal_active leftSide ${task.status}`}>
                            <a id="task_hint" onClick={() => this.getTask(task.task_id)} style={{'cursor':'pointer'}}>{index}<span className="remove" style={{'cursor':'pointer'}}>.&nbsp;&nbsp;{task.name}</span></a>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    </div>
</div>
<div id="col-1">
    <div id="Menu">
        <div className="margin-bottom">
            <a id="menu-toggle" onClick={()=>this.menuToggle()} href="#"><span id="main_icon"><i className="fa fa-cog ham-position" aria-hidden="true"></i></span></a>
        </div>
        <div id="userBox" className="margin-bottom">
            <img id="userAvatar" src={`Theme/Images/icon_people/${this.User.userAvatar}.png`} alt="" style={{'width':'60px'}} />
            <div id="userInformation" className="margin-bottom">
                <ul style={{'paddingLeft': '0px'}}>
                    <li>{this.User.userName} {this.User.userSurname}</li>
                </ul>
            </div>
        </div>
        <div id="userBox_small" className="margin-bottom remove">
            <div id="inicjaly">AC</div>
        </div>
        {(this.User.basic == "0") && <div id="Intelect">
            <div id="mainIntelect">
                <ul id="intelect_main_icon" className="intelect_main_icon">
                    <li id="intelect_main_icon_li">
                        <a id="intelect_Main" href="#">
                            <center><img src={this.intelect[3]} alt="avatar" style={{'backgroundColor': '#4867AA', 'borderRadius':'60px'}} /></center>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="otherIntelect">
                <div>
                    <ul className="intelect_icons">
                        <li>
                            <a id="intelect_wp" href="#">
                                <center><img
                                src="/Theme/Images/Intelect/wp/wp_ikona.png"
                                alt="avatar"
                                style={{'backgroundColor': '#4867AA','borderRadius':'60px'}}
                                onClick={() => {this.setIntelect('wp')}} /></center>
                            </a>
                        </li>
                        <li>
                            <a id="intelect_muz" href="#">
                                <center><img
                                src="/Theme/Images/Intelect/muz/muz_ikona.png"
                                alt="avatar"
                                style={{'backgroundColor': '#4867AA','borderRadius':'60px'}}
                                onClick={() => {this.setIntelect('muz')}} /></center>
                            </a>
                        </li>
                        <li>
                            <a id="intelect_przy" href="#">
                                <center><img
                                src="/Theme/Images/Intelect/przy/przy_ikona.png"
                                alt="avatar"
                                style={{'backgroundColor': '#4867AA','borderRadius':'60px'}}
                                onClick={() => {this.setIntelect('przy')}} /></center>
                            </a>
                        </li>
                    </ul>
                    <ul className="intelect_icons">
                        <li>
                            <a id="intelect_matlog" href="#">
                                <center><img
                                src="/Theme/Images/Intelect/matlog/matlog_ikona.png"
                                alt="avatar"
                                style={{'backgroundColor': '#4867AA','borderRadius':'60px'}}
                                onClick={() => {this.setIntelect('matlog')}} /></center>
                            </a>
                        </li>
                        <li>
                            <a id="intelect_ruch" href="#">
                                <center><img
                                src="/Theme/Images/Intelect/ruch/ruch_ikona.png"
                                alt="avatar"
                                style={{'backgroundColor': '#4867AA','borderRadius':'60px'}}
                                onClick={() => {this.setIntelect('ruch')}} /></center>
                            </a>
                        </li>
                        <li>
                            <a id="intelect_jez" href="#">
                                <center><img
                                src="/Theme/Images/Intelect/jez/jez_ikona.png"
                                alt="avatar"
                                style={{'backgroundColor': '#4867AA','borderRadius':'60px'}}
                                onClick={() => {this.setIntelect('jez')}} /></center>
                            </a>
                        </li>
                    </ul>
                    <ul className="intelect_icons">
                        <li>
                            <a id="intelect_intra" href="#">
                                <center><img
                                src="/Theme/Images/Intelect/intra/intra_ikona.png"
                                alt="avatar"
                                style={{'backgroundColor': '#4867AA','borderRadius':'60px'}}
                                onClick={() => {this.setIntelect('intra')}} /></center>
                            </a>
                        </li>
                        <li>
                            <a id="intelect_inter" href="#">
                                <center><img
                                src="/Theme/Images/Intelect/inter/inter_ikona.png"
                                alt="avatar"
                                style={{'backgroundColor': '#4867AA','borderRadius':'60px'}}
                                onClick={() => {this.setIntelect('inter')}} /></center>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>}
        {(this.User.basic == "0") && <div id="userFunction">
            <ul style={{'paddingLeft': '0px'}}>
                {/* <li><a href="#"><span className="">Mapa Postępu</span>&nbsp;<i className="fa fa-lg fa-map-o menu_icons" aria-hidden="true"></i></a></li>
                <li><a href="#"><span>Twoja ścieżka</span>&nbsp;<i className="fa fa-lg fa-map-signs menu_icons" aria-hidden="true"></i></a></li> */}
                <li><a href="https://www.messenger.com/t/1620829374615095" target="_blank"><span>Pomoc</span>&nbsp;<i className="fa fa-lg fa-question menu_icons" aria-hidden="true"></i></a></li>
                <li>
                    <a href="#" data-toggle="modal" data-target="#Zegar">Zegar</a>
                    <div className="clock clock-AppPanel" data-timeup="420" style={{'fontSize':'34px'}}>
                        <span className="minutes">00</span>:<span className="seconds">00</span>
                    </div>
                </li>

                <li>
                    <a href="#" data-toggle="modal" data-target="#AudioPlayer">Odtwarzacz</a>

                    <div className="controls">
                      <a className="AudioPlayerStart" href="#"  onClick={()=>this.play()}><i className="glyphicon glyphicon-play"></i></a>
                      <a className="AudioPlayerStop" href="#"  onClick={()=>this.pouse()}><i className="glyphicon glyphicon-pause"></i></a>

                    </div>

                </li>
            </ul>
        </div>}
		{(this.User.basic == "0") && <a href="https://www.facebook.com/groups/1832032537074429/" target="_blank" title="Kliknij, aby dołączyć do dyskusji">
          <div style={{'position':'absolute','bottom':'4.5%','color':'#fff!important','width':'100%','height':'40px','lineHeight':'40px','backgroundColor':'#4867AA'}}>
                <i style={{'color':'#fff','lineHeight':'40px'}} className="fa fa-2x fa-facebook" aria-hidden="true"></i>
          </div>
		</a>}
        <div id="logout" title="Czy na pewno chcesz opuścić kurs?">
            <a href="?page=login" onClick={() => Connector.logout()}><span>Wyloguj</span>&nbsp;<i className="fa fa-power-off menu_icons" aria-hidden="true"></i></a>
        </div>
    </div>
</div>

<div id="col-3">
    <div id="Lesson">
        <h3 className="lesson_namber">Moduł {this.currentLesson}, lekcja <span id="currentPageSpan">{this.state.currentPage + 1}</span></h3>
        <h1><strong>{this.state.currentTask.name}</strong></h1>
        <div className="lesson_conntent">
            <div dangerouslySetInnerHTML={{ __html: this.currentPage.content }}></div>
            <nav aria-label="..." className="center">
                <ul className="pagination pagination-sm">
                    <li className="page-item">
                        <a className=" page-prev"
                        onClick={() => this.changePage(((this.state.currentPage - 1) > 0) ? this.state.currentPage - 1 : 0)}
                        aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {this.taskPages.map((page, index) => {
                        return (
                            <li key={index} className="page-item">
                                <a className={`page-link ${page.status}_page`} onClick={() => this.changePage(index)}>{index + 1}</a>
                            </li>
                        )
                    })}
                    <li className="page-item">
                        <a className="page-next"
                        onClick={() => this.changePage(((this.state.currentPage + 1) < this.taskPages.length) ? this.state.currentPage + 1 : this.taskPages.length - 1)}
                        aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
            {this.state.appShow && this.state.applications && <button onClick={this.zoom} type='button'>Powiększ</button>}
            <br />
            {this.state.appShow && this.state.applications && <AppsController
                app={this.state.applications.name}
                iframe={this.state.applications.iframe} />
            }
        </div>
    </div>
</div>
<div id="col-4">
    <div id="page-console-and-application" className="fixed">
        <div className="console">
            <form style={{'position': 'relative'}}>
                <textarea spellCheck="false" className="code_input" id="yourcode" rows="10" placeholder=""></textarea><br />
                <button id="button_runit" className="btn btn_code" type="button" onClick={()=>this.codeLaunch()}><img src="Theme/Images/check-square.png" alt="" />SPRAWDŹ</button>
            </form>
            <div id="page-code">
                
                
                <p><strong>Otrzymany wynik:</strong></p>
                <pre id="output"></pre>
            </div>
        </div>
        <div>
            <div id="Avatars_and_dialogbox">
                {this.state.dialogSpeaks && (this.state.dialogSpeaks.toLowerCase() != 'null') && (this.state.dialogSpeaks != 'Null') && <div id="dialogbox">
                    {this.state.dialogSpeaks}
                    <span id="main_icon"><i className="fa fa-bars ham-position" aria-hidden="true"></i></span>
                </div>}
				{this.state.currentIntelect!='matlog' &&
                <div id="Avatars">
                    <img style={{'height':'300px'}} src={this.intelect[3]} alt="Tutaj powinien znajdować się awatar" />
                </div>}
            </div>
        </div>
    </div>
</div>

<div id="zadanie_sukces" className="modal fade" role="dialog">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title" style={{'color':'green'}}> Gratulacje! Udało Ci się rozwiazać zadanie! </h4>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={() => this.showPopup()} >Zamknij</button>
            </div>

        </div>

    </div>
</div>

<div id="aplikacja_duza" className="modal fade" role="dialog">
    <div className="modal-dialog" style={{width:'100%'}}>
        <div className="modal-content">
            <div className="modal-header" style={{height:'600px'}}>
                <iframe src={this.state.applications.iframe} width="100%" height="100%"></iframe>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Zamknij</button>
            </div>

        </div>

    </div>
</div>


<div id="wybierz_avatar" className="modal fade" role="dialog">
    <div className="modal-dialog">

        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Wybierz swój awatar</h4>
            </div>
            <div className="modal-body">
                <label className="vertical-center"><input onChange={()=>this.setAvatar('icon1')} type="checkbox"/> <img src="Theme/Images/icon_people/icon1.png" alt=""/></label>
                <label className="vertical-center"><input onChange={()=>this.setAvatar('icon2')} type="checkbox"/> <img src="Theme/Images/icon_people/icon2.png" alt=""/></label>
                <label className="vertical-center"><input onChange={()=>this.setAvatar('icon3')} type="checkbox"/> <img src="Theme/Images/icon_people/icon3.png" alt=""/></label>
                <label className="vertical-center"><input onChange={()=>this.setAvatar('icon4')} type="checkbox"/> <img src="Theme/Images/icon_people/icon4.png" alt=""/></label>
                <label className="vertical-center"><input onChange={()=>this.setAvatar('icon5')} type="checkbox"/> <img src="Theme/Images/icon_people/icon5.png" alt=""/></label>
                <label className="vertical-center"><input onChange={()=>this.setAvatar('icon6')} type="checkbox"/> <img src="Theme/Images/icon_people/icon6.png" alt=""/></label>
                <label className="vertical-center"><input onChange={()=>this.setAvatar('icon7')} type="checkbox" /> <img src="Theme/Images/icon_people/icon7.png" alt=""/></label>
                <label className="vertical-center"><input onChange={()=>this.setAvatar('icon8')} type="checkbox"/> <img src="Theme/Images/icon_people/icon8.png" alt=""/></label>
                <label className="vertical-center"><input onChange={()=>this.setAvatar('icon9')} type="checkbox"/> <img src="Theme/Images/icon_people/icon9.png" alt=""/></label>
                <label className="vertical-center"><input onChange={()=>this.setAvatar('icon10')} type="checkbox"/> <img src="Theme/Images/icon_people/icon10.png" alt=""/></label>
            </div>

        </div>
    </div>
</div>
</div>
        )
    }
}

 var  ApplicationsData = [
{'Intelect':'jez','Lesson':1,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Crossword/M1L2.html'},
{'Intelect':'jez','Lesson':2,'Task':4,'Url':'/AplikacjeJavaScriptOffLine/Crossword/M2L4.html'},
{'Intelect':'jez','Lesson':5,'Task':4,'Url':'/AplikacjeJavaScriptOffLine/Crossword/M5L4.html'},
{'Intelect':'jez','Lesson':7,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Crossword/M7L2.html'},
{'Intelect':'jez','Lesson':3,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/FillInBlank/M3L2.html'},
{'Intelect':'jez','Lesson':8,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/FillInBlank/M8L1.html'},
{'Intelect':'ruch','Lesson':2,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/Puzzle/M2L3.html'},
{'Intelect':'ruch','Lesson':3,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Puzzle/M3L2.html'},
{'Intelect':'ruch','Lesson':4,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/Puzzle/M4L3.html'},
{'Intelect':'ruch','Lesson':5,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Puzzle/M5L2.html'},
{'Intelect':'jez','Lesson':2,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/WordMatching/M2L3.html'},
{'Intelect':'jez','Lesson':1,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/WordUnscramble/M1L3.html'},
{'Intelect':'jez','Lesson':3,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/WordUnscramble/M3L1.html'},
{'Intelect':'jez','Lesson':5,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/WordUnscramble/M5L3.html'},
{'Intelect':'jez','Lesson':6,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/WordUnscramble/M6L2.html'},
{'Intelect':'ruch','Lesson':1,'Task':4,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M1L4.html'},
{'Intelect':'ruch','Lesson':2,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M2L2.html'},
{'Intelect':'ruch','Lesson':2,'Task':4,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M2L4.html'},
{'Intelect':'ruch','Lesson':3,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M3L1.html'},
{'Intelect':'ruch','Lesson':5,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M5L1.html'},
{'Intelect':'ruch','Lesson':6,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M6L1.html'},
{'Intelect':'ruch','Lesson':7,'Task':2,'Url':'/AplikacjeJavaScriptOffLine/Zdrapka/M7L2.html'},
{'Intelect':'jez','Lesson':1,'Task':4,'Url':'/AplikacjeJavaScriptOffLine/word-search-game-master/LingwistykM1L4.html'},
{'Intelect':'jez','Lesson':2,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/word-search-game-master/LingwistykM2L1.html'},
{'Intelect':'jez','Lesson':3,'Task':3,'Url':'/AplikacjeJavaScriptOffLine/word-search-game-master/LingwistykM3L3.html'},
{'Intelect':'jez','Lesson':7,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/word-search-game-master/LingwistykM7L1.html'},
{'Intelect':'jez','Lesson':6,'Task':1,'Url':'/AplikacjeJavaScriptOffLine/word-search-game-master/LingwistytkM6L1.html'},

]


