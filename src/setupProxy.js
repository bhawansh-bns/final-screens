const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/sendApplication',
    '/createAccount',
    '/getApplications',
    createProxyMiddleware({
      target: 'http://localhost:8443',
      changeOriwhygin: true,
    })
  );
};
