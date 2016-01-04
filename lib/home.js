exports.register = function(server, options, next) {

  server.route([{
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

  }]);
  
  return next();
};

exports.register.attributes = {
  name: 'Home'
};
