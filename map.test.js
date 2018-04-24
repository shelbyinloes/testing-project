let dash = require("kkannen-dash");

let map = dash.map

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
function newHello(name){
    return "Hello " + name;
}

let helloArray = map(names,newHello);

test('map adds hello before every name' , () => {
 expect(helloArray).toEqual(["Hello Jon","Hello Bob","Hello Ted","Hello Barney","Hello Lilly","Hello Robin","Hello Saul","Hello Axe"]);
});