const patternDict = [{
  pattern: '\\b(?<greetings>Hi|Hello|Hey)\\b',
  intent: 'Hello'
},
{
  pattern: '\\b(bye|exit)\\b',
  intent: 'Exit'
},
{
  pattern: 'like\\sin\\s\\b(?<city>.+)',
  intent: 'CurrentWeather'
},
{
  pattern: 'temperature\\sin\\s\\b(?<city>.+)',
  intent: 'CurrentWeather'
},
{
  pattern: '\\b(?<weather>hot|cold|rain|rainy|sunny|storm|snow|thunderstroms|windy|drizzle)\\s\\bin\\s\\b(?<city>[a-z]+\\s?[a-z]+?)\\s\\b(?<time>day\\safter\\stomorrow|tomorrow|today)$',
  intent: 'WeatherForecast'
},
{
  pattern: '\\b(?<weather>hot|cold|rain|rainy|sunny|storm|snow|thunderstroms|windy|drizzle)\\b\\s\\b(?<time>day\\safter\\stomorrow|tomorrow|today)\\sin\\s\\b(?<city>[a-z]+\\s?[a-z]+?)$',
  intent: 'WeatherForecast'
},
{
  //what's the weather forecast for/in/of city
  pattern: 'weather\\sforecast\\s(in|for|of)\\s\\b(?<city>[a-z]+\\s?[a-z]+?)$',
  intent: 'forecast'
}
];

module.exports = patternDict;
