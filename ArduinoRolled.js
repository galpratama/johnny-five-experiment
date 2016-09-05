// Include our libraries
var j5 = require("johnny-five");
var Player = require('player');

// Assign our board, pin, button, and initial led state
var board = new j5.Board();
var LEDPIN = 8;
var BTNPIN = 7;
var ledOn = false;

var player = require('play-sound')(opts = {})

board.on("ready", function(){
  var led = new j5.Led(LEDPIN);
  var btn = new j5.Button(BTNPIN);

  btn.on("hit", function(){
    led.on();
    player.play('rick.mp3', function(err){}) 
  });  

  btn.on("release", function(){
    led.off();
  });
});
