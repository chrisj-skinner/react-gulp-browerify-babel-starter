// Require dependencies
// The following is a fix to prevent a console error of 'jQuery is not defined'
var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

jQuery.noConflict(true);

// Custom JavaScript
!function($) {
    "use strict"; // Start of use strict

    // You can use jQuery as $ inside this IIFE (Immediately Invoked Function Expression).. :)
    // $('body').addClass('');
	// http://gregfranko.com/blog/i-love-my-iife/

}(jQuery); // End of use strict

// Or you can use it here also.. :(
// jQuery('body').addClass('');