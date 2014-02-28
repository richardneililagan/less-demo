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
                server : ['app/**/*.js', 'index.js'],
                client : ['assets/scripts/src/**/*.js']
            },

            // @module browserify
            browserify : {
                main : {
                    src : 'assets/scripts/src/app.js',
                    dest : 'pub/scripts/app.js'
                }
            },

            // @module uglify
            uglify : {
                options : {

                },
                app : {
                    files : {
                        'pub/scripts/app.min.js' : 'pub/scripts/app.js'
                    }
                }
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
                    files : ['assets/scripts/**/*.js'],
                    tasks : ['compile-scripts']
                },
                server : {
                    files : ['app/**/*.js', 'index.js', 'package.json'],
                    tasks : ['server-checks']
                },
                livereloadtrigger : {
                    files : ['pub/**/*.html'],
                    tasks : []
                }
            }

        });

        // load preloaded tasks
        _.each(tasks, grunt.loadNpmTasks);

        grunt.registerTask('compile-scripts', ['jshint:client', 'browserify', 'uglify']);
        grunt.registerTask('compile-styles', ['less:development', 'cssmin']);
        grunt.registerTask('server-checks', ['jshint:server']);
    };

})([
    // task modules
    'grunt-contrib-watch',
    'grunt-contrib-less',
    'grunt-contrib-cssmin',
    'grunt-contrib-jshint',
    'grunt-contrib-uglify',
    'grunt-browserify'
]);