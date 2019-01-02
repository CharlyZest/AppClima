const path = require('path'), HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 80
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: 'src/index.html'
        })
    ]
}