// Include our libraries
var five = require("johnny-five");
var axios = require("axios");
var say = require('say');

// Assign our board, pin, button, and initial led state
var board = new five.Board();
var LEDPIN = 11;
var BTNPIN = 7;
var ledOn = false;

board.on("ready", function(){
  var led = new five.Led(LEDPIN);
  var btn = new five.Button(BTNPIN);

  btn.on("hit", function(){
    led.on();
    led.brightness(255);
    const config = {
      headers: {
        'X-Mashape-Key': 'j2hV747QA2mshsj1XH9tllu84D7np13VL4ujsnQTcW5pZUAvMF',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      }
    }
    axios.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', config)
      .then(function (response) {
        console.log(response.data.quote);
        say.speak(response.data.quote, 'Victoria');
      })
      .catch(function (response) {
        console.log(response);
        say.speak('API Error', 'Bad News');
      });
  });  

  btn.on("release", function(){
    led.on();
    led.brightness(10);
  });

  this.repl.inject({
    led: led
  });
});
