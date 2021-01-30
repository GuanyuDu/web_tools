module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    // port: 8060,
    proxy: {
      '/weather/geo': {
        target: 'https://geoapi.qweather.com',
        changeOrigin: true,
        pathRewrite: {
          '^/weather/geo': '/'
        }
      },
      '/weather/dev': {
        target: 'https://devapi.qweather.com',
        changeOrigin: true,
        pathRewrite: {
          '^/weather/dev': '/'
        }
      }
    }
  }
}