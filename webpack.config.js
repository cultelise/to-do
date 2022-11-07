const path = require('path');

 module.exports = {
   entry: './src/index.ts',
   output: {
	 filename: 'bundle.js',
	 path: path.resolve(__dirname, 'dist'),
   },
	 mode: 'development',
	 devtool: 'inline-source-map',
	 resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"],
	 },
	 
  module: {
	rules: [
	  {
			test: /\.css$/i, 
			use: ['style-loader', 'css-loader'],
	  },
		{ 
			test: /\.tsx?$/, 
			use: 'ts-loader' 
		},
	],
  },
 };