// Require dependencies
// The following is a fix to prevent a console error of 'jQuery is not defined'
const jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

jQuery.noConflict(true);

// require('/app.js');
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );
