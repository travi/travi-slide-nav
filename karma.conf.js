module.exports = function (config) {
    config.set({
        frameworks: ['sinon'],
        files: [

            'node_modules/karma-jstd-adapter/jstd-adapter.js',
            'bower_components/jquery/jquery.js',
            'bower_components/travi-core/js/travi.js',
            'bower_components/travi-core/js/travi/location.js',

            'js/**/*.js',

            'bower_components/travi-core/js/travi.js',

            'bower_components/travi-test-utils/test-init.js',
            'test/**/*.js'
        ]
        ,

        browsers: ['PhantomJS']
    });
};