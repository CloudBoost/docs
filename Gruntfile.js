module.exports = function(grunt) {
  
  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
            JS : {
                // the files to concatenate
                src: ['src/js/Head.html','src/js/Contents.html','src/js/Intro.html','src/js/CloudApp.html','src/js/CloudObject.html','src/js/Relationships.html','src/js/CloudQuery.html','src/js/CloudSearch.html','src/js/CloudGeoPoint.html','src/js/CloudFile.html','src/js/CloudNotification.html','src/js/CloudUser.html','src/js/CloudRole.html','src/js/ACL.html','src/js/Footer.html'],
                	// the location of the resulting JS file
                	dest: 'index.html'
                }
            },

		less: {
		  development: {
		    options: {
		      paths: ["assets/css"]
		    },
		    files: {
		      "path/to/result.css": "path/to/source.less"
		    }
		  },
		  production: {
		    options: {
		      paths: ["assets/css"],
		      cleancss: true,
		      modifyVars: {
		        imgPath: '"http://mycdn.com/path/to/images"',
		        bgColor: 'red'
		      }
		    },
		    files: {
		      "path/to/result.css": "path/to/source.less"
		    }
		  }
		}
	});


	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat:JS']);

};