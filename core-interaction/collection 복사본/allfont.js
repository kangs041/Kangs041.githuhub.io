

'use strict';

var app = {

  chars: ['suji kang'],

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'animation-container';
    document.body.appendChild(app.container);
    window.setInterval(app.add,250);
  },

  add: function () {
    var element = document.createElement('span');
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];
    var duration = Math.floor(Math.random() * 30) + 3;
    var offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
    var size = 40 + (15 - duration);
    var font = ["Roboto Mono","inconsolata","Abril Fatface","Gloria Hallelujah",
    "Alegreya Sans","Source Code Pro","Shrikhand","Comfortaa","Catamaran",
    "Cuprum","Great Vibes","Righteous","Orbitron","Economica","Monaton","Rock Salt",
    "Homemade Apple","Bowlby One SC","Marvel","Syncopate","Annie Use Your Telescope",
    "Nixie One","Tenor Sans","Cutive Mono","Expletus Sans","Raleway Dots","Nova Mono",
    "Cinzel Decorative","Stardos Stencil"]
    var fontrandom = Math.floor( Math.random()*29);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.style.fontFamily= font[fontrandom];
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },
};

document.addEventListener('DOMContentLoaded', app.init);
