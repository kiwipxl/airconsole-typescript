
var message_logger:HTMLElement = document.getElementById("message_logger");

var message_log = function(text) {
  message_logger.innerHTML += text;
};
