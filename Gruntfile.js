module.exports = function(grunt) {
// 配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //检查Style CSS 语法
        csslint: {
            src: ['public/stylesheets/*.css']
        },

        //合并 CSS 文件
        concat: {
            css: {
                src: ['public/stylesheets/*.css'],
                /* 根据目录下文件情况配置 */
                dest: 'public/stylesheets/<%= pkg.name %>.css'
            }
        },

        //压缩Style CSS文件为 .min.css
        cssmin: {
            options: {
                // 移除 CSS 文件中的所有注释
                keepSpecialComments: 0
            },
            minify: {
                expand: true,
                cwd: 'public/stylesheets/',
                src: ['<%= pkg.name %>.css'],
                dest: 'public/stylesheets/',
                ext: '.min.css'
            }
        },

        //压缩优化图片大小
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [
                    {
                        expand: true,
                        cwd: 'public/images/',
                        src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                        dest: 'public/images/' // 优化后的图片保存位置，默认覆盖
                    }
                ]
            }
        },

        //检查javascript语法
        jshint: {
           all: ['Gruntfile.js',
                'public/javascripts/one.js',
                'public/javascripts/two.js',
                'public/javascripts/three.js'
            ]
        },

        // 最小化、混淆、合并 JavaScript 文件
        uglify: {
            build: {
                //src: 'src/<%= pkg.name %>.js',
                src: 'public/javascripts/*.js',
                dest: 'public/build/javascripts/<%= pkg.name %>.min.js'
            }
        },
      //监控
     watch: {
         css: {
             files: 'public/stylesheets/*.css',
             tasks: ['csslint'/*,'concat','cssmin'*/],
             options: {
                 //livereload: true,
                 spawn: false,
             }
         },
         scripts: {
            files: 'public/javascripts/*.js',
            tasks: ['jshint'/*,'uglify'*/],
             options: {
                 spawn: false,
             },
        }
     }
    });
    // 加载插件mmmmmm



    [
        'grunt-contrib-csslint',
        'grunt-contrib-concat',
        'grunt-contrib-cssmin',
        'grunt-contrib-imagemin',
        'grunt-contrib-jshint',
        'grunt-contrib-uglify',
        'grunt-contrib-watch',
    ].forEach(function (task) {
        grunt.loadNpmTasks(task);
    })
    // 默认任务用于后端（服务器端）
    grunt.registerTask('default', ['jshint',]);
    //静态任务用于前端静态资源
    grunt.registerTask('static', ['csslint','concat','cssmin','imagemin','jshint','uglify']);
    //监控
    grunt.registerTask('watch', ['watch',]);
};
};
