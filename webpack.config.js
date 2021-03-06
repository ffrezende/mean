const path = require('path'),
babiliPlugin = require('babili-webpack-plugin'),
extractTextPlugin = require('extract-text-webpack-plugin'),
optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
StyleLintPlugin = require('stylelint-webpack-plugin');

let plugins = [];
console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV == 'production') {
    plugins.push(new babiliPlugin());
    plugins.push(new optimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions : {
            discardComments: {
                removeAll: true
            }
        },
        canPrint: true
    }));
}

plugins.push(new StyleLintPlugin({
    configFile: '.stylelintrc',
    files: './public/css/*.css',
}));

plugins.push(
    new extractTextPlugin('style.css')
);

module.exports = {
    entry: './public/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            }          
        ]
    },
    plugins
}