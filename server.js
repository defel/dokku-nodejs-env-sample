var 
  hapi = require('hapi'),
  server = new hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 8030
});

server.route([
  {
    method: "POST",
    path: '/',
    handler: function(request, reply) {
        reply(JSON.stringify(process.env));
    }
  }
]);

console.log("PORT:", process.env.PORT);
console.log(JSON.stringify(process.env));
server.start();
