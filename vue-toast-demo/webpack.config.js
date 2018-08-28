const path = require('path')

module.exports = {
    entry: './src/lib/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'vue-toast-demo.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [

    ]
}