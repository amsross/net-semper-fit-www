'use strict';

module.exports = function(grunt) {
	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			img: {
				files: [
					'!*.swp',
					'_assets/img/**'
				],
				tasks: ['imagemin'],
				options: {
					livereload: true,
				},
			},
		},
		imagemin: {
			dist: {
				options: {
					interlaced: true,
					optimizationLevel: 7,
					pngquant: true,
					progressive: true
				},
				files: [{
					expand: true,
					cwd: '_assets/img/',
					src: [
						'**/*.*',
						'!**/Thumbs.db',
						'!**/.DS_Store',
					],
					dest: 'assets/img/'
				}]
			}
		},
		jekyll: {
			dist: {
				options: {
					config: '_config.yml'
				}
			}
		}
	});

	//Load NPM tasks
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	//Default task(s).
	grunt.registerTask('default', [
		'imagemin',
	]);

	grunt.registerTask('dev', [
		'default',
		'watch'
	]);

	grunt.registerTask('build', [
		'default',
		'jekyll'
	]);
};
