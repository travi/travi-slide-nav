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

        preprocessors: {
            "js/**/*.js": 'coverage'
        },

        reporters: [
            'progress',
            'junit',
            'coverage'
        ],

        junitReporter: {
            outputFile: 'logs/karma.xml'
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'logs/coverage/'
        }
    }
};