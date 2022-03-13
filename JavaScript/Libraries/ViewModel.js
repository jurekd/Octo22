var $Globals = {};
var $Locals = {};
var _API_URL = 'Core/';
var _PAGE_URL = '';
var $GET_vars = [];

/*var getURLVars = function () {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
};
$GET_vars = getURLVars();

var getCurrentPageName = function () {
    if ($GET_vars['page']) {
        return $GET_vars['page'];
    } else {
        return 'home';
    }
};

var getContent = function () {
    var tmp = $.Deferred();
    $.get(_API_URL + "?action=getPageContent&page=" + getCurrentPageName(), function (data, status) {
        tmp.resolve(data);
    });
    return tmp.promise();
};

var getHTTP = function (action, data) {
    var tmp = $.Deferred();
    var url = _API_URL + "?action=" + action + "&page=" + getCurrentPageName();
    for (var element in data) {
        if (data.hasOwnProperty(element)) {
            url = url + "&" + element + "=" + data[element];
        }
    }
    $.get(url, function (data, status) {
        tmp.resolve(data);
    }).fail(function(){
        tmp.reject();
    });
    return tmp.promise();
};

var postHTTP = function (action, dataPOST) {
    var tmp = $.Deferred();
    $.post(_API_URL + "?action=" + action + "&page=" + getCurrentPageName(), { login: dataPOST.login, password: dataPOST.password }).done(function (data2) {
        tmp.resolve(data2);
    })
    .fail(function () {
        tmp.reject();
    });
    return tmp.promise();
};

var logEvent = function (event) {
    var tmp = $.Deferred();
    $.post(_API_URL + "?action=logEvent&page=" + getCurrentPageName(), { event: event}).done(function (data2) {
        tmp.resolve(data2);
    })
    .fail(function () {
        tmp.reject();
    });
    return tmp.promise();
};

var getAllPageContent = function () {
    var contentElements = document.querySelectorAll('[vm-content]');
    $.when(getContent()).then(function (data) {
        var dictionary = JSON.parse(data).content;
        [].forEach.call(contentElements, function (element) {
            element.innerHTML = dictionary[element.getAttribute('vm-content')];
        });
    });
};

var getSession = function(){
    var promise = $.Deferred();
    $.when(getHTTP('getSession')).then(function (data) {
        var tmp = JSON.parse(data).content;
        $Locals.userName = tmp.name;
        $Locals.userSurname = tmp.surname;
        promise.resolve();
    }, function(){
        promise.resolve();
        if(($GET_vars['page'] != 'login') && ($GET_vars['page'] != 'login'))
        window.location = '?page=login';
    });
    return promise.promise();
};

function checkIf(data) {
    var promise = $.Deferred();
    $("[vm-if]").each(function () {
        if (data[$(this).attr('vm-if')] != true) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
    promise.resolve();
    return promise.promise();
}

function updateContent() {
    var promise = $.Deferred();
    checkIf($Locals).then(function () {
        w3DisplayData("vm-App", $Locals);
        promise.resolve();
    });
    return promise.promise();
}

$(window).ready(function () {
    getSession().then(function () {
        updateContent().then(function () {
            $('#load_screen').delay(500).fadeOut(500, function () {
                //
            });
        });
    });
    
});*/

////////////////////
var VM = new function(){
    function getURLVars () {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }
    $GET_vars = getURLVars();

    function getCurrentPageName () {
        if ($GET_vars['page']) {
            return $GET_vars['page'];
        } else {
            return 'home';
        }
    }

    this.logout = function(){
		VM.getHTTP('logoutAdmin').then(function(){
        window.location = '?page=home';
	   }); 
    };

    var getContent = function () {
        var tmp = $.Deferred();
        $.get(_API_URL + "?action=getPageContent&page=" + getCurrentPageName(), function (data, status) {
            tmp.resolve(data);
        });
        return tmp.promise();
    };

    this.getHTTP = function (action, data) {
        var tmp = $.Deferred();
        var url = _API_URL + "?action=" + action + "&page=" + getCurrentPageName();
        for (var element in data) {
            if (data.hasOwnProperty(element)) {
                url = url + "&" + element + "=" + data[element];
            }
        }
        $.get(url, function (data, status) {
            tmp.resolve(data);
        }).fail(function(){
            tmp.reject();
        });
        return tmp.promise();
    };

    this.postHTTP = function (action, dataPOST) {
        var tmp = $.Deferred();
        $.post(_API_URL + "?action=" + action + "&page=" + getCurrentPageName(), { login: dataPOST.login, password: dataPOST.password }).done(function (data2) {
            tmp.resolve(data2);
        })
        .fail(function () {
            tmp.reject();
        });
        return tmp.promise();
    };

    this.logEvent = function (course, task, event, newtask) {
        var tmp = $.Deferred();
        var data = {
            "course": course,
            "task": task,
            "event": event,
            "newtask": newtask
        };
        $.post(_API_URL + "?action=logEvent&page=" + getCurrentPageName(), data).done(function (data2) {
            tmp.resolve(data2);
        })
        .fail(function () {
            tmp.reject();
        });
        return tmp.promise();
    };

    var getAllPageContent = function () {
        var contentElements = document.querySelectorAll('[vm-content]');
        $.when(getContent()).then(function (data) {
            //var dictionary = JSON.parse(data).content;
            var dictionary = data.content;
            [].forEach.call(contentElements, function (element) {
                element.innerHTML = dictionary[element.getAttribute('vm-content')];
            });
        });
    };

    this.getSession = function () {
        var promise = $.Deferred();
        $.when(this.getHTTP('getSession')).then(function (data) {
            //var tmp = JSON.parse(data).content;
            var tmp = data.content;
            $Locals.userName = tmp.name;
            $Locals.userSurname = tmp.surname;
            $Locals.userAvatar = tmp.avatar;
            $Locals.userRole = tmp.type;
			$Locals.basic = tmp.basic;
			$Locals.survey = tmp.survey;
            if($Locals.userRole == 'teacher'){
                if(($GET_vars['page'] != 'teacher')){
                    window.location = '?page=teacher';
                }
            }
            promise.resolve();
        }, function () {
            promise.resolve();
            if(($GET_vars['page'] != 'login') && ($GET_vars['page'] != 'login')){
                window.location = '?page=login';
            }
        });
        return promise.promise();
    };

    this.checkIf = function(data) {
        var promise = $.Deferred();
        $("[vm-if]").each(function () {
            if (data[$(this).attr('vm-if')] != true) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
        promise.resolve();
        return promise.promise();
    };

    this.updateContent = function () {
        var promise = $.Deferred();
        w3DisplayData("vm-App", $Locals).then(function () {
            VM.checkIf($Locals).then(function () {
                promise.resolve();
            });
        });
        return promise.promise();
    };

    $(window).ready(function () {
        if(($GET_vars['page'] != 'moduleApp') && ($GET_vars['page'] != 'moduleApp#')){
            VM.getSession().then(function () {
                VM.updateContent().then(function () {
                    $('#loaderBody').delay(500).fadeOut(500, function () {
                        //
                    });
                });
            });
        }
    });
}