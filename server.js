var 
  hapi = require('hapi'),
  server = new hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 8030
});

server.route([
  {
    method: "GET",
    path: '/',
    handler: function(request, reply) {
        reply(process.env);
    }
  }
]);

console.log(process.env);
server.start();
