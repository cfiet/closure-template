module.exports = function (grunt) {
  var CLOSURE_LIBRARY_PATH = "node_modules/closure-library",
      CLOSURE_COMPILER_PATH = "tools/compiler.jar",
      CLOSURE_LIBRARY_JS_PATH = CLOSURE_LIBRARY_PATH + "/closure",
      CLOSURE_LINTER_PATH = "c:\\Progs\\Python27\\Scripts";

  grunt.loadNpmTasks('grunt-closure-tools');
  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    closureCompiler: {
      options: {
        compilerFile: CLOSURE_COMPILER_PATH,
        checkModified: false,
        compilerOpts: {
          compilation_level: "ADVANCED_OPTIMIZATIONS",
          language_in: "ECMASCRIPT5",
          only_closure_dependencies: "",
          closure_entry_point: "closuretest.module",
          warning_level: "verbose",
          output_wrapper: "';(function(window,undefined){\"use strict\";%output%}).call(this);'"
        },
        d32: false,
        TieredCompilation: true
      },
      out: {
        src: [
          CLOSURE_LIBRARY_PATH + "/closure",
          CLOSURE_LIBRARY_PATH + "/third_party",
          "src"
        ],
        dest: "out/build.js"
      }
    },

    exec: {
      gjslint: {
        cmd: "gjslint " +
          "-r src " +
          "--disable 0001,0131,0110"
        ,
        stdout: true,
        strerr: true
      }
    }

  });

  grunt.registerTask("default", ["exec:gjslint", "closureCompiler"]);
};
