// Node is not JS, but reads JS
// YOU CAN USE IT LIKE "$ python NAMEOFFILE" to run some JS, BEAUSE NODE READS js.
// We still have access to all the native elements: 
// var atlTeams = [
// 	'braves',
// 	'falcons',
// 	'united',
// 	'hawks'
// ]

// console.log(atlTeams);


// var atl = {
// 	bball: "hawks",
// 	football: "falcons",
// 	soccer: "united",
// 	baseball: "braves"
// }

// console.log(atl);
// console.log(document) //error
// consoel.log(window) //error
// Just like Python, there are some modules BUILT IN to node.
// In order to access them, you use require.
var http = require('http');
// console.log(http);
// createServer is a method of the http object.
// It takes 1 argument, the function to run when someone connnects via HTTP
var server = http.createServer((req, res)=>{
	// console.log(req);
	// res = response = say SOMETHING back
	// weritehead sets the HTTP headers; 2 args:
	// 1. status code 
	// 2. mime type
	// 200 response means "OK"
	res.writeHead(200,{'content-type':'text/html'})
		// res.writeHead(200,{'content-type':'text/text'})

	res.write("<h1>Hello, intrepid traveler. this is actually your node server. Hope your day is swell<h1>")
	res.end();

});
// HTTP = 80
// add, 2 0s
// 8080, double 80
// you must use a port higher than 1024
// because everything below belongs to root
console.log(`server is listening for connections on port 8000.`)
server.listen(8000);


// function someoneConnected(){

// }



