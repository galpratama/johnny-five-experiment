var five = require("johnny-five");
var board = new five.Board();
var Player = require('player');

board.on("ready", function() {

  var ledGreenOne = new five.Led(11);
  var ledGreenTwo = new five.Led(6);
  var ledRedOne = new five.Led(10);
  var ledRedTwo = new five.Led(5);
  var ledYellowOne = new five.Led(9);
  var ledYellowTwo = new five.Led(3);

  var potentio = new five.Sensor("A0");

  var player = require('play-sound')(opts = {})

  var leds = new five.Leds([
      ledGreenOne,
      ledRedOne,
      ledYellowOne,
      ledGreenTwo,
      ledRedTwo,
      ledYellowTwo
    ]);

  potentio.scale([0, 255]).on("change", function() {
      var position = this.value;
      console.log(position);
      leds.brightness(position);
    });

  this.repl.inject({
    leds: leds,
    potentio: potentio,
    player: player
  });
});
