let dash = require("kkannen-dash");

let map = dash.map

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

function addHello(name){
 return "Hello " + name;
}

let helloArray = map(names,addHello);
console.log(helloArray)