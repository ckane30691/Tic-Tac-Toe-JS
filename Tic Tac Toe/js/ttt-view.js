class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard($el);
    this.bindEvents(game);
  }

  bindEvents(game) {
    $(".cell").on("click", (event) => {
      let pos = $(event.currentTarget).data("pos");
      game.playMove(pos);
      this.makeMove($(event.currentTarget), game);
      if (game.board.winner()) {
        $(".ttt").append(`<figcaption>${game.currentPlayer.toUpperCase()} WINS!</figcaption>`);
      }
      if (game.board.isOver() && (!game.board.winner())) {
        $(".ttt").append(`<figcaption>Cat's game!</figcaption>`);
      }
      // event.currentTarget.css("background-color: green");
    });
  }

  makeMove($square, game) {
    if (game.currentPlayer === "x") {
      $square.removeClass("not_selected");
      $square.toggleClass("selected_x");
    } else {
      $square.removeClass("not_selected");
      $square.toggleClass("selected_o");
    }
  }

  setupBoard($el) {
    const $ul = $('<ul class="group">');
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let $myLi = $('<li class="cell not_selected"></li>');
        $myLi.data("pos", [i,j]);
        $ul.append($myLi);
      }
    }
    const board = $el.append($ul);
  }
}

module.exports = View;
