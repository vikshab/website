// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
var scrollY = 0;
var distance = 40;
var speed = 20;

function autoScrollTo(div){
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(div).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHeight;
  var animator = setTimeout('autoScrollTo(\'' +div+'\')', speed);
  if(yPos > bodyHeight){
    clearTimeout(animator);
  } else {
    if (currentY < targetY - distance){
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    } else {
      clearTimeout(animator);
    }
  }
}

function resetScroller(div){
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(div).offsetTop;
  var animator = setTimeout('resetScroller(\'' +div+'\')', 5);
  if (currentY > targetY){
    scrollY = currentY - distance;
    window.scroll(0, scrollY);
  } else {
    clearTimeout(animator);
  }
}
