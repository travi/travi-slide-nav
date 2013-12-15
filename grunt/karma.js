module.exports = {
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
        browsers: ['PhantomJS'],
        singleRun: true,
        reporters: [
            'progress',
            'junit'
        ],
        junitReporter: {
            outputFile: 'logs/karma.xml'
        }
    }
};