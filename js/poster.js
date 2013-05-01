window.onload = function() {
  var smallimgs = document.querySelectorAll("#smallpictures > img");
  var bigimg = document.querySelector("#bigimg");

  bigimg.onclick = function() {
    bigimg.parentNode.classList.toggle("big");
  }
  for (var i = 0; i < smallimgs.length; i++) {
    smallimgs[i].onclick = function(src) {
      return function() {
        bigimg.parentNode.classList.add("big");
        bigimg.src = src;
      };
    }(smallimgs[i].src);
  };
  
};
