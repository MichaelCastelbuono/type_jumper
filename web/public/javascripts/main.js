// Generated by CoffeeScript 1.3.3
(function() {
  var init;

  init = function() {
    var canvas, contentLoader;
    canvas = document.getElementById('game');
    contentLoader = new NT.ContentLoader();
    return contentLoader.startDownload(function() {
      Ticker.setFPS(60);
      return Ticker.addListener(new NT.Game(canvas, contentLoader));
    });
  };

  document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
      return init();
    }
  };

}).call(this);
