const { merge } = require("webpack-merge")
const common=require('./webpack.common')

module.exports=merge(common,{
    mode: 'development',
    devServer:{
      watchFiles:['./src/home.html']
    },
    devtool:'eval-source-map'
})