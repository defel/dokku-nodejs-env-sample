var 
  hapi = require('hapi'),
  server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: process.env.PORT || 8030
});

server.route([
  {
    method: "POST",
    path: '/',
    handler: function(request, reply) {
        console.log(JSON.stringify(process.env));
        reply(JSON.stringify(process.env));
    }
  }
]);

server.start();
