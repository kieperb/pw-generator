module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/pw-generator-demo/' : '/',
  transpileDependencies: [
    'vuetify'
  ]
};
