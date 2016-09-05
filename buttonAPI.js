var j5 = require("johnny-five");
var axios = require("axios");

var board = new j5.Board();
var LEDPIN = 8;
var BTNPIN = 7;
var ledOn = false;

board.on("ready", function(){
  var led = new j5.Led(LEDPIN);
  var btn = new j5.Button(BTNPIN);

  btn.on("hit", function(){
    led.on();
    axios.get('https://stagingapi.fitnesia.com/v1.0/members/companies?id=5742c7edd79ef3088164dc47')
      .then(function (response) {
        console.log(response.data.content[0].address);
      })
      .catch(function (response) {
        console.log(response);
      });
  });  

  btn.on("release", function(){
    led.off();
  });
});
