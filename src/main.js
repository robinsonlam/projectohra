// CSS
require('./styles/main.scss');

// JavaScript
window.$ = require('jquery');

// Effects
require('./scripts/page-fade');

// HTML
$(document).ready(() => {
  if (process.env.NODE_ENV !== 'production') {
    require('./index.html')
    require('./about.html')
  }
});
