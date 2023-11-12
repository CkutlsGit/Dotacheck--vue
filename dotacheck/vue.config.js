const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://ru.dotabuff.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
        secure: false, // Добавьте эту опцию
      },
    },
  },
});
