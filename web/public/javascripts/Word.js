(function() {
  var NT;

  NT = window.NT || {};

  window.NT = NT;

  NT.Word = (function() {
    var MIN_WIDTH, TEXT_COLOR, WIDTH_PER_LETTER, WORD_HEIGHT;

    WIDTH_PER_LETTER = 12;

    WORD_HEIGHT = 30;

    MIN_WIDTH = 30;

    TEXT_COLOR = "#000";

    function Word(word, x, y) {
      var graphics, shape, text, width;
      this.word = word;
      if (x == null) x = 0;
      if (y == null) y = 0;
      if (this.word === null) throw "missing word parameter";
      this.container = new Container();
      width = this.word.length * WIDTH_PER_LETTER;
      if (width < MIN_WIDTH) width = MIN_WIDTH;
      graphics = new Graphics();
      graphics.beginLinearGradientFill(["#58b", "#8be"], [0, 1], 0, 0, 0, WORD_HEIGHT).beginStroke(Graphics.getRGB(0, 0, 0)).drawRect(0, 0, width, WORD_HEIGHT);
      shape = new Shape(graphics);
      shape.x = x - (width / 2);
      shape.y = y;
      text = new Text(this.word, "26px bold Arial", TEXT_COLOR);
      text.x = shape.x + (width / 2);
      text.y = shape.y + (WORD_HEIGHT / 2) + 7;
      text.lineHeight = WORD_HEIGHT;
      text.maxWidth = width;
      text.textAlign = "center";
      this.container.addChild(shape);
      this.container.addChild(text);
    }

    Word.prototype.getDisplayObject = function() {
      return this.container;
    };

    return Word;

  })();

}).call(this);
