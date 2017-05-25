	let webpack = require('webpack');
	let path = require('path') ; 

	module.exports = { 		
		entry : './src/app.js',
		output : {  filename : 'app.js' , path : path.resolve(__dirname,'./dist/js') }, 
		module : { 
			rules  : [ { 	test : /\.css$/, use : ['style-loader','css-loader'] }, {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
		}, 
	}; 