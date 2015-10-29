var message_logger;
window.onload = function () {
    message_logger = document.getElementById("message_logger");
};
var message_log = function (text) {
    message_logger.innerHTML += text;
};
