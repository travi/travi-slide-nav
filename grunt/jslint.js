module.exports = {
    build: {
        src: [
            'Gruntfile.js',
            'grunt/*.js'
        ],
        directives: {
            node: true
        },
        options: {
            errorsOnly: true,
            checkstyle: 'logs/jslint-build.xml'
        }
    },
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
};