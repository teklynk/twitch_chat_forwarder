function onInit() {
    if (!window.localStorage) {
        alert('No support for localStorage');
    }

    let url = window.location.href;

    if (url.indexOf('#access_token') !== -1) {
        let access_token = new URL(url).hash.split('&').filter(function (el) {
            if (el.match('access_token') !== null) return true;
        })[0].split('=')[1];
        document.getElementById("accessToken").value = access_token;
        localStorage.setItem("accessToken", access_token);
    } else {
        document.getElementById("accessToken").value = localStorage.getItem("accessToken");
    }

    document.getElementById("mainAccount").value = localStorage.getItem("mainAccount");
    document.getElementById("botAcccount").value = localStorage.getItem("botAcccount");
    document.getElementById("accessToken").value = localStorage.getItem("accessToken");
    document.getElementById("spChars").value = localStorage.getItem("spChars");

    if (document.getElementById("spChars").value === localStorage.getItem("spChars")) {
        document.getElementById("spChars").value = localStorage.getItem("spChars");
    }

    console.log = function (message) {
        document.getElementById('status').innerHTML += '<li class="list-group-item">' + message + '</li>';
    };
}

document.getElementById("start_button").addEventListener("click", function (e) {
    this.disabled = "true";
    document.getElementById("stop_button").disabled = "";
    let mainAccount = document.getElementById("mainAccount").value;
    let botAcccount = document.getElementById("botAcccount").value;
    let accessToken = document.getElementById("accessToken").value;
    let spChars = document.getElementById("spChars").value;
    localStorage.setItem("mainAccount", mainAccount);
    localStorage.setItem("botAcccount", botAcccount);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("spChars", spChars);
    document.getElementById('removestorage_button').disabled = "true";

    let inputs = document.getElementsByTagName('input');

    for (i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }

    let selects = document.getElementsByTagName('select');

    for (i = 0; i < selects.length; i++) {
        selects[i].disabled = true;
    }

    startChat(localStorage.getItem("mainAccount"), localStorage.getItem("botAcccount"), localStorage.getItem("accessToken"), localStorage.getItem("spChars"));
}, false);

document.getElementById("stop_button").addEventListener("click", function (e) {
    this.disabled = "true";
    reload();
}, false);

document.getElementById("show_token").addEventListener("click", function (e) {
    if (document.getElementById("show_token").innerHTML === "hide") {
        document.getElementById("show_token").innerHTML = "show";
        document.getElementById("accessToken").setAttribute('type', 'password');
    } else {
        document.getElementById("show_token").innerHTML = "hide";
        document.getElementById("accessToken").setAttribute('type', 'text');
    }
}, false);

document.getElementById("removestorage_button").addEventListener("click", function (e) {
    this.disabled = "true";
    removeLocalStorage();
}, false);

function startChat(mainAccount, botAcccount, accessToken, spChars) {

    let usernameStr;

    const client = new tmi.Client({
        options: {
            debug: true,
            skipUpdatingEmotesets: true
        },
        connection: {reconnect: true},
        identity: {
            username: botAcccount,
            password: 'oauth:' + accessToken
        },
        channels: [mainAccount]
    });

    client.connect().catch(console.error);

    client.on('message', (channel, user, message, self) => {

        if (self) return;

        if (spChars === '1') {
            usernameStr = '<' + user.username + '> ';
        } else if (spChars === '2') {
            usernameStr = '-' + user.username + '- ';
        } else if (spChars === '3') {
            usernameStr = '::' + user.username + ':: ';
        } else if (spChars === '4') {
            usernameStr = '@' + user.username + ': ';
        } else if (spChars === '5') {
            usernameStr = '[' + user.username + '] ';
        } else {
            usernameStr = ' ' + user.username + ': ';
        }

        if (user['message-type'] === 'chat') {
            client.say(botAcccount, usernameStr + message);
        }
    });
}

function reload() {
    setTimeout("window.location.reload();", 1000);
}

function removeLocalStorage() {
    setTimeout("window.localStorage.clear();", 1000);
    reload()
}