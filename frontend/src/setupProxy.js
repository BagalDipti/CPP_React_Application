const createProxyMiddleware  = require('http-proxy-middleware');
module.exports = function(app) {


  app.use(
    '/api/add',
    createProxyMiddleware({
      target: process.env.REACT_APP_BASE_URL,
      changeOrigin: true,
    })
  );



  app.use(
    '/api/getall',
    createProxyMiddleware({
      target: process.env.REACT_APP_BASE_URL,
      changeOrigin: true,
    })
  );



  app.use(
    '/api/delete',
    createProxyMiddleware({
      target: process.env.REACT_APP_BASE_URL,
      changeOrigin: true,
    })
  );



};