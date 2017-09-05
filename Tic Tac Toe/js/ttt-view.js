class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard($el);
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard($el) {
    const board = $el.append($('<ul></ul>'));

    for (var i = 0; i <= 3; i++) {
      for (var j = 0; j < 3; j++) {
        board.append('<li></li>');
      }
    }
  }
}

module.exports = View;
