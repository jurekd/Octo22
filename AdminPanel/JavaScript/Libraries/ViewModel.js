var $Globals = {};
var $Locals = {};
var _API_URL = '../Core/';
var _PAGE_URL = '';
var $GET_vars = [];

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

    this.logEvent = function (event) {
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

    this.getSession = function () {
        var promise = $.Deferred();
        $.when(this.getHTTP('getAdminSession')).then(function (data) {
            $Locals.logged = true;
            $Locals.loggedOut = false;
            promise.resolve();
        }, function () {
            $Locals.logged = false;
            $Locals.loggedOut = true;
            if ((($GET_vars['page'] != 'home') && ($GET_vars['page'] != '')) || (!$GET_vars['page'])) {
                window.location = '?page=home';
            }
            promise.resolve();
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
        VM.getSession().then(function () {
            VM.updateContent().then(function () {
                $('#load_screen').delay(500).fadeOut(500, function () {
                    //
                });
            });
        });
    });
}

function logout(){
    VM.getHTTP('logoutAdmin').then(function(){
        window.location = '?page=home';
    });
}