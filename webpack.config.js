module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
//  devServer: {
//    
//      proxy: {
//			
//          "/search": {
//				target: "https://autocomplete.wunderground.com/",
//				changeOrigin: true,
//				pathRewrite: {
//					"^/search": ""
//				}
//				
//			},
//           "/api": {
//				target: "https://api.wunderground.com/api/",
//				changeOrigin: true,
//				pathRewrite: {
//					"^/api": ""
//				}
//				
//			}
//		}
//  }
};
