module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
			build: {
				src: [
					'node_modules/angular/angular.min.js',
					'node_modules/angular-resource/angular-resource.min.js',
					'node_modules/angular-route/angular-route.min.js',
					'app/data.service.js', 'app/app.js', 'app/*.controller.js'
				],
				dest: 'dist/bundle.js'
			}
		},
		cssmin: {
			build: {
				files: {
					'dist/bundle.css': [
						'node_modules/bootstrap/dist/css/bootstrap.min.css',
						'css/*'
					]
				}
			}
		},
		watch: {
			js: {
				files: ['app/*.js'],
				tasks: ['concat:build']
			},
			css: {
				files: ['css/*.css'],
				tasks: ['cssmin:build']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat:build', 'cssmin:build']);
	grunt.registerTask('reload', ['watch']);
};
