var gulp = require('gulp');
var gutil = require('gulp-util')
var KarmaServer = require('karma').Server;
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

gulp.task('test', function(done) {
	new KarmaServer.start({
		configFile: __dirname + '/karma.conf.js'
	}, done);
});

gulp.task('webpack', function(callback) {
	webpack(webpackConfig, function(err, stats) {
		if(err) {
			throw new gutil.PluginError('webpack', err);
		}

		gutil.log('[webpack]', stats.toString('--colors'));
		//callback();
	});
});