(function() {
  var init;

  init = function() {
    var background, canvas, contentLoader, g, stage;
    canvas = document.getElementById('game');
    background = new Shape();
    g = background.graphics;
    g.beginLinearGradientFill(["#369", "#036"], [0, 1], 0, 0, 0, canvas.height).drawRect(0, 0, canvas.width, canvas.height).draw(canvas.getContext("2d"));
    background.cache(0, 0, canvas.width, canvas.height);
    stage = new Stage(canvas);
    stage.addChild(background);
    contentLoader = new NT.ContentLoader();
    return contentLoader.startDownload(function() {
      var ninja, platform, platformTile;
      console.log('complete');
      ninja = new Bitmap(contentLoader.imgNinja);
      ninja.x = 320;
      ninja.y = 240;
      stage.addChild(ninja);
      platformTile = new Bitmap(contentLoader.imgTile);
      platformTile.width = contentLoader.imgTile.width;
      platformTile.height = contentLoader.imgTile.height;
      platform = new NT.Platform(5, platformTile, 0, canvas.height - 60);
      stage.addChild(platform.getDisplayObject());
      Ticker.setFPS(60);
      return Ticker.addListener(stage);
    });
  };

  document.onreadystatechange = function() {
    if (document.readyState === 'complete') return init();
  };

}).call(this);
