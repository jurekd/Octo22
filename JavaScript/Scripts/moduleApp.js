/*============================================================================================================*/
/*------------------------------------------------------------------------------------------------------------*/
/*Intelect*/
var startIntelect = "przy";
Intelect = {
    wp: ["SPATIAL-VISUAL", "/Theme/Images/Intelect/wp/wp_bg.jpg", "/Theme/Images/Intelect/wp/wp_ikona.png", "/Theme/Images/Intelect/wp/wp_avatar.png", "wp"],
    muz: ["MUSICAL","/Theme/Images/Intelect/muz/muz_bg.jpg", "/Theme/Images/Intelect/muz/muz_ikona.png","/Theme/Images/Intelect/muz/muz_avatar.png", "muz"],
    przy: ["NATURALIST","/Theme/Images/Intelect/przy/przy_bg.jpg", "/Theme/Images/Intelect/przy/przy_ikona.png", "/Theme/Images/Intelect/przy/przy_avatar.png", "przy"],
    matlog: ["LOGICAL-MATHEMATICAL", "", "/Theme/Images/Intelect/matlog/matlog_ikona.png", "/Theme/Images/Intelect/matlog/matlog_avatar.png", "matlog"],
    ruch: ["BODILY-KINESTETIC", "/Theme/Images/Intelect/ruch/ruch_bg.jpg", "/Theme/Images/Intelect/ruch/ruch_ikona.png", "/Theme/Images/Intelect/ruch/ruch_avatar.png", "ruch"],
    jez: ["LINGUISTIC", "/Theme/Images/Intelect/jez/jez_bg.jpg", "/Theme/Images/Intelect/jez/jez_ikona.png", "/Theme/Images/Intelect/jez/jez_avatar.png", "jez"],
    intra: ["INTRAPERSONAL", "/Theme/Images/Intelect/intra/intra_bg.jpg", "/Theme/Images/Intelect/intra/intra_ikona.png", "/Theme/Images/Intelect/intra/intra_avatar.png", "intra"],
    inter: ["INTERPERSONAL", "/Theme/Images/Intelect/inter/inter_bg.jpg", "/Theme/Images/Intelect/inter/inter_ikona.png", "/Theme/Images/Intelect/inter/inter_avatar.png", "inter"],
};



var showDialog = function (_name) {
    $("#dialogbox").show;
    console.log($Locals.currentDialog);
    console.log(Intelect[localStorage.intelect][0]);
    console.log(_name);
    $Locals.currentDialog.forEach(function (value, index) {
        console.log(value.profile);
        if ((value.name == _name) && (value.profile == Intelect[localStorage.intelect][0])) {
            console.log(_name);
            $('#dialogbox').html(value.content);
            console.log(value.content);
        }
    })
}

function SetIntelect(_nazwaInteligencji, _backgroundPath, _ikonaPath, _AvatarPath) {
    $Locals.backgroundPath = _backgroundPath;
    $Locals.AvatarPath = _AvatarPath;
    $Locals.ikonaPath = _ikonaPath;
}

$(function(){
    window.onload = function(){
        if((!localStorage.intelect) || (localStorage.intelect = "undefined")){
            localStorage.intelect = startIntelect;
        }
        SetIntelect.apply(this,Intelect[localStorage.intelect]);
    }
});

function ChangeIntelect(_nazwaInteligencji, _backgroundPath, _ikonaPath, _AvatarPath, _nazwaInteligencji_PL) {
    if (localStorage.intelect != _nazwaInteligencji_PL) {
        $Locals.backgroundPath = _backgroundPath;
        $Locals.AvatarPath = _AvatarPath;
        $Locals.ikonaPath = _ikonaPath;
        console.log(_nazwaInteligencji_PL);
        localStorage.intelect = _nazwaInteligencji_PL;
        VM.updateContent().then(function(){
            showDialog("on_page_launch");
            $($(".podpowiedz_kod")[$Locals.currentPage]).hide();
            $($(".podpowiedz_kod")).hide(); 
        });
        loadApplications();
    }
}

$(document).on("click", "li a#intelect_wp", function () {ChangeIntelect.apply(this, Intelect.wp)});
$(document).on("click", "li a#intelect_muz", function () {ChangeIntelect.apply(this, Intelect.muz)});
$(document).on("click", "li a#intelect_przy", function () {ChangeIntelect.apply(this, Intelect.przy)});
$(document).on("click", "li a#intelect_matlog", function () {ChangeIntelect.apply(this, Intelect.matlog)});
$(document).on("click", "li a#intelect_ruch", function () {ChangeIntelect.apply(this, Intelect.ruch)});
$(document).on("click", "li a#intelect_jez", function () {ChangeIntelect.apply(this, Intelect.jez)});
$(document).on("click", "li a#intelect_inter", function () {ChangeIntelect.apply(this, Intelect.inter)});
$(document).on("click", "li a#intelect_intra", function () {ChangeIntelect.apply(this, Intelect.intra)});



/*------------------------------------------------------------------------------------------------------------*/
/*ACTIVE*/
$(document).on("click", "#menu-toggle", function (e) {
    e.preventDefault();
    $("#col-3").removeClass("Lesson_Menu_CLOSE_Path_OPEN");
    $("#col-1").toggleClass("Menu_CLOSED");
    $("#col-3").toggleClass("Lesson_Menu_CLOSED");
    if($("#col-1").hasClass("Menu_CLOSED") && $("#col-2").hasClass("Path_OPEN")){
        $("#col-3").toggleClass("Lesson_Menu_CLOSE_Path_OPEN");
    }
    setTimeout(function () {
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
});

$(document).on("click", "#patch-toggle", function (e) {
    e.preventDefault();
    $("#col-3").removeClass("Lesson_Menu_CLOSE_Path_OPEN");
    $("#col-2").toggleClass("Path_OPEN");
    $("#col-3").toggleClass("Lesson_Path_OPEN");
    if($("#col-1").hasClass("Menu_CLOSED") && $("#col-2").hasClass("Path_OPEN")){
        $("#col-3").toggleClass("Lesson_Menu_CLOSE_Path_OPEN");
    }
    if($("#col-2").hasClass("Path_OPEN")){
        setTimeout(function () {
            $("#lessonWay span").toggleClass("remove");
        }, 500);
    }else{
        $("#lessonWay span").toggleClass("remove");
    }
});

/*------------------------------------------------------------------------------------------------------------*/
/*SprawdzCzyPotrafisz*/

    $(document).on("click", "#test", function(){
        $("#content_Sprawdz").toggleClass("remove");
        console.log("TEST");
        showDialog("on_task_reveal");
    })

    $(document).on("click", ".helper", function(){
        $(".helper_code").show();
    })

    //przełączanie lekcji
    $(document).on("click", "a.page-link", function(){
        $(".helper_code").hide();
        showDialog("on_page_launch");
        console.log("lesson next!");
    })
/*------------------------------------------------------------------------------------------------------------*/

/*============================================================================================================*/


var isRandomised = false;
function initializeRandom(){
    randomApps(true);
}
function howActive(){
    var checkSum = 0;
    for(var i=1; i<=$Locals.currentApps.length; i++){
        if(!$('.aplikacja'+i).is(':hidden')){
            checkSum += 1;
        }
    }
    return checkSum;
}
function setAvatar(avatar){
    var data = {
        'avatar': avatar
    };
    $.when(VM.getHTTP('setAvatar', data)).then(function (data) {
        $('#wybierz_avatar').modal('hide');
        $('#userAvatar').attr("src","Theme/Images/icon_people/"+avatar+".png");
        $Locals.userAvatar = avatar;
    });
}
function randomApps(isInit){
    if($Locals.usedApps.length >= $Locals.currentApps.length){
        $Locals.usedApps = [];
        VM.logEvent(1, $Locals.currentTaskId, 'all_apps_used_then_reset', 'self');
    }
    var app = Math.floor((Math.random() * $Locals.currentApps.length) + 1);
    if($Locals.usedApps.indexOf("aplikacja"+app) == -1){
        $('.aplikacja'+app).show();
        $Locals.currentApp = app;
        $Locals.usedApps.push('aplikacja'+app);
        VM.logEvent(1, $Locals.currentTaskId, 'sam'+app+'_opened', 'self');
    } else {
        randomApps();
    }
}
var updateMenu = function(){
    var data = {
        'data': 1
    };
    $.when(VM.getHTTP('getTasks', data)).then(function (data) {
        //$Locals.tasksArray = JSON.parse(data).content.tasks;
        $Locals.tasksArray = data.content.tasks;
        for(var i=0; i<$Locals.tasksArray.length; i++){
            $Locals.tasksArray[i].lp = (i);
        }
        findLessonId($Locals.currentTask, $Locals.tasksArray).then(function(result){
            $Locals.currentLesson = result;
            VM.updateContent();
        });
    });
}
function findLessonId(lesson, lessons){
    var promise = $.Deferred();
    //console.log(lesson);
    //console.log(lessons);
    if(lesson && lessons){
        lessons.forEach(function(tmp){
            if(tmp.task_id == lesson.task_id){
                promise.resolve(tmp.lp);
            }
        });
    } else {
        promise.resolve(0);
    }
    return promise.promise();
}
function showIT(){
    $($(".podpowiedz_kod")[$Locals.currentPage]).show();
    VM.logEvent(1, $Locals.currentTaskId, 'user_wanted_to_see_code', 'self');
    showDialog("hint_revealed");
}
$(document).ready(function () {
    var data = {
        'data': 1
    };
    $Locals.usedApps = [];
    $Locals.currentApps = [ 'aplikacja2', 'aplikacja3', 'aplikacja4', 'aplikacja1'];
    $Locals.currentApp = 0;
    $('.aplikacja2').hide();
    $('.aplikacja3').hide();
    $('.aplikacja4').hide();
        $('.aplikacja1').hide();
    //initializeRandom();
    updateMenu();
    $.when(VM.getHTTP('getLastTask', data)).then(function (data2) {
        //$Locals.currentTask = JSON.parse(data2).content;
        $Locals.currentTask = data2.content;
        $Locals.taskDataname = $Locals.currentTask.name;
        $Locals.pages = [];
        $Locals.currentTaskId = $Locals.currentTask.subtasks[0].task_id;
        $Locals.taskDatacontent = '<div class="page active_page" task-id="'+$Locals.currentTask.subtasks[0].task_id+'">' + $Locals.currentTask.subtasks[0].content + '</div>';
        for(var i=1; i<$Locals.currentTask.subtasks.length; i++){
            $Locals.taskDatacontent += '<div class="page">' + $Locals.currentTask.subtasks[i].content + '</div>';
        }
        for(var i=0; i<$Locals.currentTask.subtasks.length; i++){
            $Locals.pages.push(
                {
                    task_id: $Locals.currentTask.subtasks[i].task_id,
                    id: i + 1,
                    status: $Locals.currentTask.subtasks[i].status + '_page',
                    index: i,
                    facebook_link: $Locals.currentTask.subtasks[i].facebook_link,
                    avatar_dialog: $Locals.currentTask.subtasks[i].avatar_dialog,
                    correct_answer: $Locals.currentTask.subtasks[i].correct_answer,
                    audioLink: $Locals.currentTask.subtasks[i].audioLink
                }
            );
        }
        $Locals.currentLesson = findLessonId($Locals.currentTask, $Locals.tasksArray);
        $Locals.currentPage = $Locals.currentTask.currentSubtask;
        $Locals.currentDialog = $Locals.pages[$Locals.currentPage].avatar_dialog;
        $Locals.currentAudio = $Locals.pages[$Locals.currentPage].audioLink;
        console.log($Locals.currentDialog);
        // VM.updateContent().then(function(){
        //     $('.page.active_page').removeClass("active_page");
        //     $($('.page')[$Locals.currentTask.currentSubtask]).addClass("active_page");
        //     $('.page-link.active_page').removeClass("active_page");
        //     $($('.page-link')[$Locals.currentTask.currentSubtask]).addClass("active_page");
        // });

        findLessonId($Locals.currentTask, $Locals.tasksArray).then(function(result){
            $Locals.currentLesson = result;

            VM.updateContent().then(function(){
                if($Locals.currentLesson > 0){
                    randomApps(true);
                    isRandomised = true;
                }
                loadApplications();
                $(".podpowiedz_kod").hide();
                $('.page.active_page').removeClass("active_page");
                $($('.page')[$Locals.currentTask.currentSubtask]).addClass("active_page");
                $('.page-link.active_page').removeClass("active_page");
                $($('.page-link')[$Locals.currentTask.currentSubtask]).addClass("active_page");
                showDialog("on_page_launch");
                $('#currentPageSpan').text($Locals.currentPage + 1);
                var newValue= $($('.page')[$Locals.currentPage]).find("div:first").data("hint");
                var wiersz = $($('.page')[$Locals.currentPage]).find("div:first").data("wiersz");
                $('#wiersz').attr('src','Theme/Images/wiersz/w'+wiersz+'.png' );
                // $('#avatar_speek').attr('title', newValue)
                //     .tooltip('fixTitle')
                //     .tooltip('show');
                $("#lessonWay ul li").eq(0).addClass("intrapersonal_active");
                if($Locals.userAvatar == 'none'){
                    $('#wybierz_avatar').modal('show');
                }

            });
        });
        codeconsole();
        bindEvents();

        VM.logEvent(1, $Locals.currentTaskId, 'task_loaded', 'self');
        // $('[data-toggle="tooltip"]').tooltip();


        $Locals.border = Math.floor(Math.random() * 10) + 1;
        $Locals.launchCount = 0;
        console.log($Locals.border);
    });

    $(".clock").hide();

    $(document).on("click", ".sam_close_1", function (e) {
        e.preventDefault();
        VM.logEvent(1, $Locals.currentTaskId, 'sam1_closed', 'self');
        $(".aplikacja1").hide();
        randomApps();
    });
    $(document).on("click", ".sam_close_2", function (e) {
        e.preventDefault();
        VM.logEvent(1, $Locals.currentTaskId, 'sam2_closed', 'self');
        $(".aplikacja2").hide();
        randomApps();
    });
    $(document).on("click", ".sam_close_3", function (e) {
        e.preventDefault();
        VM.logEvent(1, $Locals.currentTaskId, 'sam3_closed', 'self');
        $(".aplikacja3").hide();
        randomApps();
    });
    $(document).on("click", ".sam_close_4", function (e) {
        e.preventDefault();
        VM.logEvent(1, $Locals.currentTaskId, 'sam4_closed', 'self');
        $(".aplikacja4").hide();
        randomApps();
    });
      $(document).on("click", ".sam_close_6", function (e) {
        e.preventDefault();
        VM.logEvent(1, $Locals.currentTaskId, 'sam6_closed', 'self');
        $(".aplikacja6").hide();
        randomApps();
    });
    $('.helper').click(function () {
        //$("code").removeClass("helper_code");
        $(this).siblings(".helper_code").removeClass("helper_code");
    });
    $('#button_runit').click(function () {
        codeconsole().execute();
    });
    $('#tak_chce').click(function () {


    });
    function outf(text) {
        var mypre = document.getElementById("output");
        mypre.innerHTML = mypre.innerHTML + text;
    }
    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }
// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
    function runit() {
        var prog = document.getElementById("yourcode").value;
        var mypre = document.getElementById("output");
        mypre.innerHTML = '';
        Sk.pre = "output";
        Sk.configure({output: outf, read: builtinRead});
        (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
        var myPromise = Sk.misceval.asyncToPromise(function () {
            return Sk.importMainWithBody("<stdin>", false, prog, true);
        });
        myPromise.then(function (mod) {
            VM.logEvent(1, $Locals.currentTaskId, 'interpreter_started_with_success', 'self');
        },
                function (err) {
                    VM.logEvent(1, $Locals.currentTaskId, 'interpreter_started_with_error', 'self');
                });
    }
});
function displayDialog(){
    //
}

function enterTask(course, task){
    var data = {
        "course": course,
        "task": task
    }
    VM.getHTTP('enterTask', data);
}
var page_link = function(id){
    enterTask(1, $Locals.pages[id].task_id);
    $('#yourcode').val('');
    $('.page.active_page').removeClass("active_page");
    $(".podpowiedz_kod").hide();
    if($Locals.timerOne){
        $Locals.timerOne.clearTime();
    }
        $('.podpowiedz_kod').hide();
    $($('.page')[id]).addClass("active_page");
    $('.page-link.active_page').removeClass("active_page");
    $($('.page-link')[id]).addClass("active_page");
     var newValue= $($('.page')[id]).find("div:first").data("hint");
     var kinetyczna = $($('.page')[id]).find("div:first").data("kinetyczna");
      var wiersz = $($('.page')[id]).find("div:first").data("wiersz");
    $('#output').html('');
    if($Locals.pages[$Locals.currentPage].status == 'new_page'){
        $($('.page-link')[$Locals.currentPage]).addClass('in_progress_page');
    }
    var tasktmp = $Locals.currentTaskId;
    $Locals.currentTaskId = $Locals.pages[id].task_id;
    VM.logEvent(1, tasktmp, 'task_changed_to', $Locals.currentTaskId);
    $Locals.border = Math.floor(Math.random() * 10) + 1;
    $Locals.launchCount = 0;
    $('#wiersz').attr('src','Theme/Images/wiersz/w'+wiersz+'.png' );
    $('#kinetyczna').attr('src','Theme/Images/kinetyczna/r'+kinetyczna+'.png' );
    $('#avatar_speek').attr('title', newValue)
          .tooltip('fixTitle')
          .tooltip('show');
    $Locals.currentPage = id;
    $Locals.currentDialog = $Locals.pages[$Locals.currentPage].avatar_dialog;
    $Locals.currentAudio = $Locals.pages[$Locals.currentPage].audioLink;
    $($(".podpowiedz_kod")[$Locals.currentPage]).hide();
    $($(".podpowiedz_kod")).hide();
    console.log($Locals.currentDialog);
    $('#currentPageSpan').text($Locals.currentPage + 1);
    $(window).scrollTop();
    $(document).scrollTop();
    $('html').scrollTop();
};
function prev(){
    if($Locals.currentPage != 0){
        page_link($Locals.currentPage - 1);
    } else {
        //
    }
}
function next(){
    if($Locals.currentPage < ($Locals.pages.length - 1)){
        page_link($Locals.currentPage + 1);
    } else {
        ///
    }
}
var bindEvents = function () {

    $(".podpowiedz_kod").hide();


 $('.helper').click(function () {
        $(this).siblings(".helper_code").removeClass("helper_code")})
     var page_lenght = $('.page').length;
      var page_lenght = $('.page').length;

    var page = $('.page');
    console.log(page);
    var pagin = "";

    //console.log(page_lenght);
    for (var i = 0; i < page_lenght; i++) {
        $(page[i]).data("page", i);
        pagin += '<li class="page-item"><a class="page-link"  data-page="' + i + '">' + (i + 1) + '</a></li>';
        console.log(pagin);
    }
      $('.page-prev').click(function () {

        var obecny = $('.page.active_page').data("page");
        if (obecny === 0) {
            obecny = 1;
        }
        else { }
        $('.page.active_page').removeClass("active_page");
        $($('.page')[obecny - 1]).addClass("active_page");

        $('.page-link.active_page').removeClass("active_page");
        $($('.page-link')[obecny - 1]).addClass("active_page");
    });
    $('.page-next').click(function () {
        var obecny = $('.page.active_page').data("page");
        console.log("next")
        if (obecny === page_lenght - 1) {
            obecny = obecny - 1;
        }
        else { }
        $('.page.active_page').removeClass("active_page");
        $($('.page')[obecny + 1]).addClass("active_page");

        $('.page-link.active_page').removeClass("active_page");
        $($('.page-link')[obecny + 1]).addClass("active_page");
    });
}


;
var codeconsole = function () {
    function outf(text) {
        var mypre = document.getElementById("output");
        mypre.innerHTML = mypre.innerHTML + text;
    }
    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }
    var runit = function () {
        var prog = document.getElementById("yourcode").value;
        var mypre = document.getElementById("output");
        mypre.innerHTML = '';
        Sk.pre = "output";
        Sk.configure({output: outf, read: builtinRead});
        (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
        var myPromise = Sk.misceval.asyncToPromise(function () {
            return Sk.importMainWithBody("<stdin>", false, prog, true);
        });
        myPromise.then(function (mod) {
            VM.logEvent(1, $Locals.currentTaskId, 'interpreter_started_with_success', 'self');
        },
                function (err) {
                    VM.logEvent(1, $Locals.currentTaskId, 'interpreter_started_with_error', 'self');
                });
    }
    return {
        execute: runit
    }

}

var loadTask = function (id) {
    var tasktmp = $Locals.currentTaskId;
    var data = {
        'data': 1,
        'task': id
    };
	$(function(){
		$('#lessonWay,#vm-App').css('cursor','wait');
	});
    $.when(VM.getHTTP('getTask', data)).then(function (data2) {
        //$Locals.currentTask = JSON.parse(data2).content;
        $Locals.currentTask = data2.content;
        $Locals.taskDataname = $Locals.currentTask.name;
        $Locals.currentTaskId = $Locals.currentTask.subtasks[0].task_id;
        VM.logEvent(1, tasktmp, 'task_changed_to', $Locals.currentTaskId);
        $Locals.pages = [];
        $Locals.taskDatacontent = '<div class="page active_page" task-id="'+$Locals.currentTask.subtasks[0].task_id+'">' + $Locals.currentTask.subtasks[0].content + '</div>';
        for(var i=1; i<$Locals.currentTask.subtasks.length; i++){
            $Locals.taskDatacontent += '<div class="page">' + $Locals.currentTask.subtasks[i].content + '</div>';
        }
        for(var i=0; i<$Locals.currentTask.subtasks.length; i++){
            $Locals.pages.push(
                {
                    task_id: $Locals.currentTask.subtasks[i].task_id,
                    id: i + 1,
                    status: $Locals.currentTask.subtasks[i].status + '_page',
                    index: i,
                    facebook_link: $Locals.currentTask.subtasks[i].facebook_link,
                    avatar_dialog: $Locals.currentTask.subtasks[i].avatar_dialog,
                    correct_answer: $Locals.currentTask.subtasks[i].correct_answer,
                    audioLink: $Locals.currentTask.subtasks[i].audioLink
                }
            );
        }
        $Locals.currentPage = 0;
        $Locals.currentDialog = $Locals.pages[$Locals.currentPage].avatar_dialog;
        $Locals.currentAudio = $Locals.pages[$Locals.currentPage].audioLink;
        findLessonId($Locals.currentTask, $Locals.tasksArray).then(function(result){
            $Locals.currentLesson = result;
            VM.updateContent().then(function(){
                if(!isRandomised){
                    randomApps(true);
                    isRandomised = true;
                }
                loadApplications();
                $(".podpowiedz_kod").hide();
                ( $('.podpowiedz_kod')[$Locals.currentPage]).hide();
                $('.page-link.active_page').removeClass("active_page");
                $($('.page-link')[0]).addClass("active_page");
                console.log('tutaj');

                $('.aplikacja'+$Locals.currentApp).show();

                showDialog("on_page_launch");
                $('#currentPageSpan').text($Locals.currentPage + 1);
                var newValue= $($('.page')[$Locals.currentPage]).find("div:first").data("hint");
                var wiersz = $($('.page')[$Locals.currentPage]).find("div:first").data("wiersz");

                $('#wiersz').attr('src','Theme/Images/wiersz/w'+wiersz+'.png' );
                // $('#avatar_speek').attr('title', newValue)
                //     .tooltip('fixTitle')
                //     .tooltip('show');
            });
        });
        bindEvents();
        $Locals.border = Math.floor(Math.random() * 10) + 1;
        $Locals.launchCount = 0;
    });
}

function showPList() {
    /* Pokazywanie i ukrywanie tabeli wyników */
    if ($('#ScoreBoard').is(':visible')) {
        $("#ScoreBoard").slideToggle("slow");
        $("#scoreboardBtn").text("Zobacz, który jesteś?");
        ScoreBoardIsVisible = false;
    } else {
        $("#ScoreBoard").slideToggle("slow");
        $("#scoreboardBtn").text("Ukryj liste");
        ScoreBoardIsVisible = true;
        ChangeUserPositionOnScoreBoard();
    }

}
CurentUserPosition = 0;
function ChangeUserPositionOnScoreBoard() {




    setInterval(function(){
        var lis = document.getElementById("ScoreBoard").getElementsByTagName("li");
        var TimeOfOpponentBeforeUser = parseInt($(lis[CurentUserPosition+1]).attr('data-sortAs'));
        var lis = document.getElementById("ScoreBoard").getElementsByTagName("li");
        var minutes = parseInt(document.getElementsByClassName("minutes")[0].innerHTML);
        var seconds = parseInt(document.getElementsByClassName("seconds")[0].innerHTML);
        var UserTime = minutes*60 + seconds;

        if(UserTime > TimeOfOpponentBeforeUser)
        {
            $(lis[CurentUserPosition]).fadeToggle();
            $(lis[CurentUserPosition + 1]).fadeToggle();
            $(lis[CurentUserPosition]).before($(lis[CurentUserPosition + 1]));
            $(lis[CurentUserPosition]).fadeToggle();
            $(lis[CurentUserPosition + 1]).fadeToggle();
            CurentUserPosition++;
        }

    }, 1000);




}
