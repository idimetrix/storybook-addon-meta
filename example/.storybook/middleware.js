const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  router.use(
    '^/rest',
    createProxyMiddleware({
      target: 'http://www.example.org/',
      pathRewrite: {
        '^/rest': '/',
      },
      changeOrigin: true,
      secure: true,
    })
  );
};
