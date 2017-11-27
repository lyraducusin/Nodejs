var http = require("http");
var food = require("./myfavfood.js");
console.log(food.info);


http.createServer(onRequest).listen(8080);

function onRequest(request, response){
  response.writeHead(200, { "Content-type": "text/plain"});
  response.write(food.info[Math.floor(Math.random() * food.info.length)]);
  response.end();
}
