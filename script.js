function hidewindow() {
    var popupmsg = document.getElementById('popupmsg');

    // Set the innerHTML to nothing to delete everything in the popup
    popupmsg.innerHTML = '';

    // Hide the popup
    popupmsg.hidden = true;
}

function makewindow(ismsg = true, title = 'WebOS', content = 'Hello, World!', direction = 'right') {
    var popupmsg = document.getElementById('popupmsg');

    // Check if the popup should be in the left or right corners
    if (direction == 'right') {
        // Right
        popupmsg.style.left = null;
        popupmsg.style.right = '10px';
    } else if (direction = 'left') {
        // Left
        popupmsg.style.right = null;
        popupmsg.style.left = '10px';
    }

    // Set the innerHTML to nothing to delete everything in the popup
    popupmsg.innerHTML = '';

    // Create every HTML element for the popup
    var titleinmsg = document.createElement('h3');
    var seperatorinmsg = document.createElement('hr');
    var seperator2inmsg = document.createElement('hr');
    var contentinmsg = document.createElement('p');
    var closebuttinmsg = document.createElement('a');

    // Set HTML element properties for the elements that will be added in to the popup
    titleinmsg.innerText = title;
    contentinmsg.innerText = content;
    closebuttinmsg.href = "javascript:hidewindow()";
    closebuttinmsg.innerText = "Close";

    // Add every HTML element to the popup
    popupmsg.appendChild(titleinmsg);
    popupmsg.appendChild(seperatorinmsg);
    popupmsg.appendChild(contentinmsg);
    popupmsg.appendChild(seperator2inmsg);
    popupmsg.appendChild(closebuttinmsg);

    // Show the popup
    popupmsg.hidden = false;
}