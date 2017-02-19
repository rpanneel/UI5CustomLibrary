module.exports = function(grunt) {

    var sUser = grunt.option('user'),
        sPwd = grunt.option('pwd');

    grunt.initConfig({

        dir: {
            src: "src",
            dest: "dist"
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= dir.src %>',
                    src: [
                        '**',
                        '**/.library',
                        '!test/**'
                    ],
                    dest: '<%= dir.dest %>'
                }]
            }
        },

        clean: {
            dist: '<%= dir.dest %>/**'
        },
        
        openui5_preload: {
            library: {
                options: {
                    resources: '<%= dir.src %>',
                    dest: '<%= dir.dest %>',
                    compatVersion: '1.38'
                },
                libraries: 'be/rpanneel/custom/library'
            }
        },

        nwabap_ui5uploader: {
            options: {
                conn: {
                    server: 'http://server:8000',
                    client: '100'
                },
                auth: {
                    user: sUser,
                    pwd: sPwd
                }
            },
            upload_build: {
                options: {
                    ui5: {
                        package: 'ZUI5',
                        bspcontainer: 'ZMYCUSTLIB',
                        bspcontainer_text: 'My Custom Control Library',
                        transportno: 'transport',
                        calc_appindex: true
                    },
                    resources: {
                        cwd: '<%= dir.dest %>',
                        src: '**/*.*'
                    }
                }
            }
        }        
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-openui5");
    // Build task
    grunt.registerTask("build", ["openui5_preload", "copy"]);
    // Default task
    grunt.registerTask('default', ['clean', 'build', 'nwabap_ui5uploader']);
};