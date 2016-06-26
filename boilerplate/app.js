var AppView = Backbone.View.extend({
  render: function () {
    this.$el.html("<h1>Hello World!</h1>");
  }
});

var view = new AppView({
  el: 'app'
});

view.render();
