var scroll_bottom;

$(document).ready(function() {
  scroll_bottom();
});

scroll_bottom = function() {
  return $('#messages').scrollTop($('#messages')[0].scrollHeight);
};
