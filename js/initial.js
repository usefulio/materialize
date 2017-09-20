// Un-comment next two lines to enable webpack integration for goSeek in distribution file
// import $ from 'jquery';
// import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

// Check for jQuery.
if (typeof(jQuery) === 'undefined') {
  var jQuery;
  // Check if require is a defined function.
  if (typeof(require) === 'function') {
    jQuery = $ = require('jquery');
  // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}
