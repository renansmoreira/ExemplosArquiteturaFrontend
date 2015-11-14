var connect = require("connect");
var serveStatic = require("serve-static");

connect().use(serveStatic(__dirname)).listen(1101, function() {
	console.log("Servidor iniciado com sucesso");
});