var initialize = function(){

  var url = 'https://xkcd.com/1/info.0.json';

  var makeRequest = function (url) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function () {
      var comic = JSON. parse(this.responseText);
      render(comic);
    });
    request.send();
  }

  var render = function(comic) {
    var title = document.querySelector('#comic-title');
    var comicTitle = comic.title;
    title.innerHTML = comicTitle;

    var image = document.querySelector('#comic');
    image.src = comic.img;

    var altText = document.querySelector('#comic-alt');
    var comicAlt = comic.alt;
    altText.innerHTML = comicAlt;

    var date = document.querySelector('#date');
    var comicDate = comic.day + "/" + comic.month + "/" + comic.year;
    date.innerHTML = comicDate;
  }






  makeRequest(url);
}

window.addEventListener("load", initialize);
