// Require dependencies
// The following is a fix to prevent a console error of 'jQuery is not defined'
const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

jQuery.noConflict(true);

require('./modules/component.js');
