var gulp = require( 'gulp' );
var browserSync = require( 'browser-sync' ).create();

gulp.task( 'browser-sync', () => {
	browserSync.init( {
		proxy: "dev.reel.com"
  	} );
} );
