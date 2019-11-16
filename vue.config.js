module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://popkartm.club/dist',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/bpi': {
        target: 'http://popkartm.club/dist',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/bpi': '/'
        }
      }
    }
  }
}
