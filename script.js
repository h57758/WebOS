function hidewindow() {
    var popupmsg = document.getElementById('popupmsg');

    popupmsg.innerHTML = '';
    popupmsg.hidden = true;
}

function makewindow(ismsg, title = 'WebOS', content = 'Hello, World!', direction = 'right') {
    var popupmsg = document.getElementById('popupmsg');

    if (direction == 'right') {
        popupmsg.style.left = null;
        popupmsg.style.right = '10px';
    } else if (direction = 'left') {
        popupmsg.style.right = null;
        popupmsg.style.left = '10px';
    }

    popupmsg.innerHTML = '';

    var titleinmsg = document.createElement('h3');
    var seperatorinmsg = document.createElement('hr');
    var seperator2inmsg = document.createElement('hr');
    var contentinmsg = document.createElement('p');
    var closebuttinmsg = document.createElement('a');

    titleinmsg.innerText = title;
    contentinmsg.innerText = content;
    closebuttinmsg.href = "javascript:hidewindow()";
    closebuttinmsg.innerText = "Close";

    popupmsg.appendChild(titleinmsg);
    popupmsg.appendChild(seperatorinmsg);
    popupmsg.appendChild(contentinmsg);
    popupmsg.appendChild(seperator2inmsg);
    popupmsg.appendChild(closebuttinmsg);

    popupmsg.hidden = false;
}