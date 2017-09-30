var grunt = require("grunt");
var rewrite = require("connect-modrewrite");

module.exports = function () {

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-compress");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-html2js");
    grunt.loadNpmTasks("grunt-ng-annotate");
    grunt.registerTask("default", ["connect", "watch"]);
    grunt.registerTask("compile", [
        "clean",
        "jshint",
        "ngAnnotate",
        "html2js",
        "concat:js",
        //"uglify",
        "concat:sass",
        "sass",
        "concat:css",
        "compress",
        "copy"
    ]);

    // noinspection JSUnusedGlobalSymbols, SpellCheckingInspection
    grunt.initConfig({
        package: grunt.file.readJSON("package.json"),
        clean: [".tmp", "dist"],
        compress: {
            css: {
                options: {
                    mode: "gzip"
                },
                files: [{
                    expand: true,
                    src: ["dist/assets/*.css"],
                    dest: "",
                    extDot: "last",
                    ext: ".css.gz"
                }]
            },
            js: {
                options: {
                    mode: "gzip"
                },
                files: [{
                    expand: true,
                    src: ["dist/assets/*.js"],
                    dest: "",
                    extDot: "last",
                    ext: ".js.gz"
                }]
            }
        },
        concat: {
            sass: {
                src: [
                    "node_modules/zen-ui-core/src/core/mixins/static_raster_icon.scss",
                    "src/index.scss"
                ],
                dest: ".tmp/app.scss"
            },
            css: {
                src: [
                    "node_modules/zen-ui-core/dist/zen-ui-core.css",
                    ".tmp/app.css"
                ],
                dest: "dist/assets/index.css"
            },
            js: {
                options: {
                    banner: ""+
                    "/**\n" +
                    " * <%= package.name %> v<%= package.version %>\n" +
                    " *\n" +
                    " * Copyright (c) <%= package.author %>\n" +
                    " */\n"
                },
                src: [
                    "bower_components/angular/angular.js",
                    "bower_components/angular-ui-router/release/angular-ui-router.js",
                    "node_modules/zen-ui-angularjs/dist/zen-ui-angularjs.js",
                    ".tmp/**/*.js"
                ],
                //dest: ".tmp/all.js"
                dest: "dist/assets/index.js"
            }
        },
        connect: {
            options: {
                middleware: function (connect, options, middlewares) {
                    var rules = ["!\\. /index.html"];
                    middlewares.unshift(rewrite(rules));
                    return middlewares;
                }
            },
            main: {
                options: {
                    port: 8000,
                    base: "dist",
                    protocol: "http",
                    hostname: "127.0.0.1",
                    options: {
                        livereload: true
                    }
                }
            }
        },
        copy: {
            html: {
                src: "src/index.html",
                dest: "dist/index.html"
            },
            img: {
                expand: true,
                cwd: "node_modules/zen-ui-core/dist",
                src: "img/*",
                dest: "dist/assets"
            },
            example_icons: {
                src: "src/zen_ui__example_icons__task_tracker.png",
                dest: "dist/assets/img/zen_ui__example_icons__task_tracker.png"
            },
            css_map: {
                src: "node_modules/zen-ui-core/dist/zen-ui-core.css.map",
                dest: "dist/assets/zen-ui-core.css.map"
            },
            js_map: {
                src: "bower_components/angular-ui-router/release/angular-ui-router.js.map",
                dest: "dist/assets/angular-ui-router.js.map"
            }
        },
        html2js: {
            main: {
                options: {
                    base: "src/app"
                },
                src: [
                    [ "src/app/**/*.view.html" ]
                ],
                dest: ".tmp/app/app.view.js"
            }
        },
        jshint: {
            src: ["src/*.js"],
            options: {
                boss    : true,
                curly   : true,
                eqeqeq  : true,
                eqnull  : true,
                immed   : true,
                latedef : false,
                newcap  : true,
                noarg   : true,
                sub     : true,
                undef   : true,
                unused  : false,
                node    : true,
                "-W117" : true
            }
        },
        ngAnnotate: {
            main: {
                files: [{
                    cwd: "src",
                    src: ["**/*.js"],
                    dest: ".tmp",
                    expand: true
                }]
            }
        },
        sass: {
            main: {
                options: {
                    sourcemap: "none"
                },
                files: {
                    ".tmp/app.css": ".tmp/app.scss"
                }
            }
        },
        uglify: {
            main: {
                options: {
                    banner: ""+
                    "/**\n" +
                    " * <%= package.name %> v<%= package.version %>\n" +
                    " *\n" +
                    " * Copyright (c) <%= package.author %>\n" +
                    " */\n"
                },
                files: {
                    "dist/assets/index.js": ".tmp/all.js"
                }
            }
        },
        watch: {
            js: {
                files: [
                    "node_modules/zen-ui-angularjs/dist/**/*.js",
                    "src/app/views/**/*.html",
                    "src/**/*.js"
                ],
                tasks: [
                    "jshint",
                    "ngAnnotate",
                    "html2js",
                    "concat:js",
                    //"uglify",
                    "compress:js"
                ]
            },
            style: {
                files: [
                    "node_modules/zen-ui-core/dist/**/*.css",
                    "src/index.scss"
                ],
                tasks: [
                    "concat:sass",
                    "sass",
                    "concat:css",
                    "compress:css"
                ]
            },
            gruntfile: {
                files: ["Gruntfile.js"],
                tasks: ["compile"]
            }
        }
    });
};
