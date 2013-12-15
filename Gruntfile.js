/*global module*/
module.exports = function (grunt) {
    'use strict';

    require('load-grunt-config')(grunt);

    grunt.registerTask('default', ['jslint', 'karma']);
};