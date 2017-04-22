module.exports = {
    entry: './demo.jsx',
    output: {
        filename: 'demo.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
        exclude: /node_modules/
      }]
    }
};
