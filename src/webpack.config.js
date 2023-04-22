const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    setupMiddlewares: function(app) {
      app.use(
        '/sendApplication',
        '/createAccount',
        '/getApplications',
        createProxyMiddleware({
          target: 'http://localhost:8443',
          changeOrigin: true,
        })
      );
    }
  }
};
