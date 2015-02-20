Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.Collections.Songs = Backbone.Collection.extend({
  model: Sfotipy.Models.Song
});

Sfotipy.Views.Song = Backbone.View.extend({
  tagName: 'li',

  className: 'item border-bottom',

  events: {
    'click .action.icon-plus': 'select',
    'click .action.icon-love': 'love',
    'click .action.icon-share': 'share'
  },

  template: Handlebars.compile($("#song-template").html()),

  initialize: function () {
    this.listenTo(this.model, "change", this.render, this);
  },

  render: function () {
    var song = this.model.toJSON()
    var html = this.template(song);
    this.$el.html(html);
    return this;
  },

  select: function () {
    Sfotipy.app.player.model.set(this.model.toJSON());
    return false;
  },

  love: function () {

    alert("orpimiste el love");

  },

  share: function () {

    alert("apromiste al share");

  }
});