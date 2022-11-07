const path = require('path');

 module.exports = {
  mode: 'development',
   entry: './src/add.ts',
	 devtool: 'inline-source-map',
   output: {
	 filename: 'bundle.js',
	 path: path.resolve(__dirname, 'dist'),
   },
  module: {
	rules: [
	  {
			test: /\.css$/i, 
			use: ['style-loader', 'css-loader'],
	  },
		{ 
			test: /\.ts$/, 
			use: 'ts-loader' 
		},
	],
  },
 };