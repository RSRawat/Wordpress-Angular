var gulp = require('gulp');
var KarmaServer = require('karma').Server;

gulp.task('test', function(done) {
	new KarmaServer.start({
		configFile: __dirname + '/karma.conf.js'
	}, done);
});