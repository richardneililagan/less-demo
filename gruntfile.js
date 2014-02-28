var _ = require('underscore');

module.exports = (function (tasks) {

    return function (grunt) {

        grunt.initConfig({

            pkg : grunt.file.readJSON('package.json'),

            // @module less
            less : {
                development : {
                    options : {
                        compress : false,
                        strictUnits : true,
                        strictMath : true
                    },
                    files : {
                        'pub/styles/style.css' : 'assets/styles/src/style.less'
                    }
                }
            },

            // @module cssmin
            cssmin : {
                options : {
                    banner : '/** @author Richard Neil Ilagan [me@richardneililagan.com] */',
                    report : 'min'
                },
                minify : {
                    expand : true,
                    cwd : 'pub/styles/',
                    src : ['*.css', '!*.min.css'],
                    dest : 'pub/styles/',
                    ext : '.min.css'
                }
            },

            // @module jshint
            jshint : {
                options : {
                    '-W030' : true
                },
                all : ['**/*.js', '!node_modules/**/*.js']
            },

            // @module watch
            watch : {
                options : {
                    interrupt : true,
                    spawn : true,
                    livereload : true
                },
                styles : {
                    files : ['assets/styles/**/*.less', 'assets/styles/**/*.css'],
                    tasks : ['less:development', 'cssmin']
                },
                scripts : {
                    files : ['*.js'],
                    tasks : ['jshint']
                },
                livereloadtrigger : {
                    files : ['pub/**/*.html'],
                    tasks : []
                }
            }

        });

        // load preloaded tasks
        _.each(tasks, grunt.loadNpmTasks);
    };

})([
    // task modules
    'grunt-contrib-watch',
    'grunt-contrib-less',
    'grunt-contrib-cssmin',
    'grunt-contrib-jshint'
]);