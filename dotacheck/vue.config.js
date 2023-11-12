module.exports = {
  devServer: {
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:3000',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
