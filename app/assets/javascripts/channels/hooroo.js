App.hooroo = App.cable.subscriptions.create("HoorooChannel", {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {}
});
