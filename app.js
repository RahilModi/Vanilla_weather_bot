'use strict'

const Readline = require('readline');
const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const matcher = require('./matcher');
const weather = require('./Weather');
const colors = require('colors');
const {CurrentWeather,forecastWeather,forecast} = require('./parser');

rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
  matcher(reply, data => {
    switch (data.intent) {
      case 'Hello':
        console.log(`${data.entities.greetings} to you too`);
        rl.prompt();
        break;
      case 'Exit':
        console.log("Thanks for using..Have a great day.!!!");
        process.exit();
        break;
      case 'CurrentWeather':
        console.log(`Let me check, current weather @ ${data.entities.city}`);
        weather(data.entities.city, 'current')
          .then(response => {
            let pasrseResponse = CurrentWeather(response);
            console.log(pasrseResponse)
            rl.prompt();
          }).catch(error => {
            console.log("There seems to be a problem in connecting with weather service...");
            rl.prompt();
          })
        break;
      case 'WeatherForecast':
        console.log(`Let me check, weather forecast of ${data.entities.city}`);
        weather(data.entities.city)
          .then(response => {
            let pasrseResponse = forecastWeather(response,data.entities);
            console.log(pasrseResponse)
            rl.prompt();
          }).catch(error => {
            console.log("There seems to be a problem in connecting with weather service...");
            rl.prompt();
          })
        break;
      case 'forecast':
        console.log(`Let me check, forecast for ${data.entities.city}`);
        weather(data.entities.city)
          .then(response => {
            let parseResp = forecast(response,data.entities);
            for(let day of parseResp){
              console.log(`On ${day.date.red.bold}, weather will be ${day.text.red.bold} and ${day.high.red.bold} - ${day.low.red.bold} degrees Celsius.`);
            }
            rl.prompt();
          }).catch(error => {
            console.log("There seems to be a problem in connecting with weather service...");
            rl.prompt();
          })
        break;
      default:
        console.log("I dont know...What do u mean..:(");
        rl.prompt();

    }
  });
});
