module.exports = grunt => {
  'use strict';

  var configs = require('grunt-configs')(grunt);
  configs.pkg = grunt.file.readJSON('package.json'); 

  grunt.initConfig(configs);
};
