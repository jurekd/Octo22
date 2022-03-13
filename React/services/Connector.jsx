export default class Connector {
    static logEvent(course, task, event, toTask){
        return new Promise((resolve, reject) => {
            var data = {
                "course": course,
                "task": task,
                "event": event,
                "newtask": toTask
            };
            $.post("Core/?action=logEvent&page=1", data).done((data2) => {
                resolve(data2);
            }).fail(() => {
                reject();
            });
        });
    }
    static getSession(){
        return new Promise((resolve, reject) => {
            $.when(Connector.getHTTP('getSession')).then((data) => {
                var tmp = data.content;
                if (tmp.type == 'teacher') {
                    if ((Connector.getURLVars['page'] != 'teacher')) {
                        window.location = '?page=teacher';
                    }
                }
                resolve({
                    userName: tmp.name,
                    userSurname: tmp.surname,
                    userAvatar: tmp.avatar,
                    userRole: tmp.type,
                    basic: tmp.basic
                });
            }, () => {
                if ((Connector.getURLVars['page'] != 'login') && (Connector.getURLVars['page'] != 'login')) {
                    window.location = '?page=login';
                }
                resolve();
            });
        });
    }
    static getTask(taskId, intelect){
        if(taskId){
            return Connector.getHTTP('getTask', {data: 1, task: taskId, intelect: intelect});
        } else {
            return Connector.getHTTP('getLastTask', {data: 1, intelect: intelect});
        }
    }
    static logout(){
        $.post("Core/?action=logout&page=1", null).done((data) => {
            Connector.logEvent('1', '0', `user_logged_out`, 'self');
            window.location = '?page=login';
        })
        .fail(() => {
            window.location = '?page=login';
        });
    }
    static getURLVars () {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
            vars[key] = value;
        });
        return vars;
    }
    static getHTTP(action, data) {
        return new Promise((resolve, reject) => {
            var url = "Core/?action=" + action + "&page=1";
            for (var element in data) {
                if (data.hasOwnProperty(element)) {
                    url = url + "&" + element + "=" + data[element];
                }
            }
            $.get(url, (data, status) => {
                resolve(data);
            }).fail(() => {
                reject();
            });
        });
    };

    static postHTTP(action, dataPOST) {
        return new Promise((resolve, reject) => {
            $.post("Core/?action=" + action + "&page=1", dataPOST).done((data2) => {
                resolve(data2);
            }).fail(() => {
                reject();
            });
        });
    };
}