exports.register = function(server, options, next) {

  server.route([
    {
      method: 'GET',
      path: '/{param*}',
      config: {
        description: 'return the landing page',

        handler: {
          directory: {
            path: 'public',
            listing: true
          }
        }
      }
    },
    {
      method: 'POST',
      path: '/submitted',
      config: {
        description: 'retrieve form data on submit',

        handler: function(request, reply) {
          // console.log(request.payload);
          reply('Data received!');
        }
      }
    }
]);

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
