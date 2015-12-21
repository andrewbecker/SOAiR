module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.initConfig({
	
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			}, // options
			target: {
				files: {
					'css/output.css': [ 'css/jquery-ui.css', 'css/style.css' ]
				}
			} //target
		}, //cssmin

		uglify: {
			my_target: {
				files: {
					'js/script-min.js':['js/jquery-ui.min.js','js/slideshow.js', 'js/airport-search.js', 'js/datepicker.js']
				}//files
			} //my_target
		} //uglify
	
		
	
	}) //initConfig
	
	grunt.registerTask('default', ['cssmin', 'uglify']);
} //exports