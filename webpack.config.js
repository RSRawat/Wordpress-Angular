var webpack = require('webpack');

module.exports = {
    watch: true,
    //context: __dirname + '/js',
    entry: {
        app: './js/app.js'
    },
    output: {
        path: __dirname + '/live/js',
        filename: '[name].js',
        publicPath: '/wordpress/wp-content/themes/wordpress-angular/live/js/',
        sorceMapFileName: '[file].map'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'ng-annotate!babel'
        }]
    },
    resolve: {
        root: __dirname + './js/',
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', './js/vendor'],
        alias: {
            angular: __dirname + '/js/vendor/angular/angular.js',
            angularUiRouter: __dirname + '/js/vendor/angular-ui-router/release/angular-ui-router.js'
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    debug: true,
    devtool: '#source-map'
};