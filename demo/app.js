// var SharkTankView = Backbone.View.extend({
//   render: function () {
//     this.$el.html("Ouch, my legs!");
//   }
// });

// var view = new SharkTankView({
//   el: '#tank'
// });

// view.render();



// $(function () {

//   var SharkTankView = Backbone.View.extend({
//     initialize: function () {
//       this.render();
//     },
//     render: function () {
//        // $('body').html("Hello from the view!")
//       this.$el.html("Ouch, my legs!");
//     }
//   });

//   var view = new SharkTankView({
//     el: '#tank'
//   });

// });

$(function () {

  var SharkTankView = Backbone.View.extend({
    initialize: function () {
      this.sharkCount = 45;
      this.render();
    },
    render: function () {
       // $('body').html("Hello from the view!")
      this.$el.html(this.sharkCount + " sharks detected!");
    }
  });

  var view = new SharkTankView({
    el: '#tank'
  });

});



// What is a view
// extend
// render, append to the DOM
// render from initialize

// el
// this.$el
// this.$


// $(function () {

//   var SharkTankView = Backbone.View.extend({
//     // initialize: function () {
//     //   this.render();
//     // },
//     // render: function () {
//     //   $('body').html("Hello from the view!")
//     //   this.$el.html("hello world");
//     // }
//   });

//   new SharkTankView({
//     el: $('#tank'),
//   });
// });
