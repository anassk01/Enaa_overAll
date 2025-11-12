const prompt = require('prompt-sync')();

let temperature = prompt("Enter la temperature en Celsius:");
temperature = parseFloat(temperature);

let fahrenheit = (temperature * 1.8) + 32;
console.log(temperature + "°C  egale a " + fahrenheit + "°F");
