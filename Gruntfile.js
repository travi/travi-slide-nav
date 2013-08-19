/*global module*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-karma');

    // Project configuration.
    grunt.initConfig({
        jslint: {
            dist: {
                src: [
                    'js/**/*.js'
                ],
                directives: {
                    browser: true,
                    predef: [
                        '$',
                        'jQuery'
                    ]
                },
                options: {
                    errorsOnly: true,
                    checkstyle: 'logs/jslint-dist.xml'
                }
            },
            test: {
                src: [
                    'Gruntfile.js',
                    'test/**/*.js'
                ],
                directives: {
                    browser: true,
                    unparam: true,
                    predef: [
                        'travi',
                        '$',
                        'jQuery',

                        'sinon',
                        'assertEquals',
                        'assertFunction',
                        'assert',
                        'refute',
                        'assertFalse',
                        'assertTrue',
                        'expectAsserts'
                    ]
                },
                options: {
                    errorsOnly: true,
                    checkstyle: 'logs/jslint-test.xml'
                }
            }
        },

        karma: {
            unit: {
                options: {
                    files: [

                        'node_modules/karma-jstd-adapter/jstd-adapter.js',
                        'bower_components/jquery/jquery.js',

                        'js/**/*.js',

                        'bower_components/travi-core/js/travi.js',

                        'resources/bootstrap.js',
                        'test/**/*.js'
                    ]
                },
                browsers: ['Chrome'],
                singleRun: true,
                reporters: [
                    'progress',
                    'junit'
                ],
                junitReporter: {
                    outputFile: 'logs/karma.xml'
                }
            }
        }
    });

    grunt.registerTask('default', ['jslint', 'karma']);
};