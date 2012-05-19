(function() {
  var NT,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  NT = window.NT || {};

  window.NT = NT;

  NT.ContentLoader = (function() {

    function ContentLoader() {
      this.handleImageLoad = __bind(this.handleImageLoad, this);
      this.startDownload = __bind(this.startDownload, this);      this.NUM_OF_ELEMENTS_TO_DOWNLOAD = 2;
      this.numImagesLoaded = 0;
      this.imgNinja = new Image();
      this.imgTile = new Image();
    }

    ContentLoader.prototype.startDownload = function(onDownloadComplete) {
      this.onDownloadComplete = onDownloadComplete;
      if (this.onDownloadComplete === null) {
        throw "Missing download complete param";
      }
      this.setDownloadParameters(this.imgNinja, '/images/stick-ninja.png');
      return this.setDownloadParameters(this.imgTile, '/images/tile.png');
    };

    ContentLoader.prototype.setDownloadParameters = function(imgElement, url) {
      imgElement.src = url;
      imgElement.onload = this.handleImageLoad;
      return imgElement.onerror = this.handleImageError;
    };

    ContentLoader.prototype.handleImageLoad = function(e) {
      this.numImagesLoaded++;
      if (this.numImagesLoaded === this.NUM_OF_ELEMENTS_TO_DOWNLOAD) {
        this.numImagesLoaded = 0;
        return this.onDownloadComplete();
      }
    };

    ContentLoader.prototype.handleImageError = function(e) {
      return console.log("Error loading iamge: " + e.target.src, e);
    };

    return ContentLoader;

  })();

}).call(this);