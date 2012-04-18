# stretchTo jQuery plugin

When faux css columns can't be done, this plugin will solve your mismatched column woes.

## Usage
### .stretchTo( selector [, delay, speed ] ) (returns jQuery)
### .stretchTo( options ) (returns jQuery)

In the example below, the code will adjust the height of #sidebar to the top of the footer element.

	$('#sidebar').stretchTo('footer');


This will adjust the height of #sidebar & #main to the top of #bottom.

	$('#sidebar, #main').stretchTo('#bottom');

At times, the distance needs to be calculated after everything has loaded. The delay option can help with this:

	$('#sidebar').stretchTo('#bottom', 300);

$.stretchTo also accepts an options object for it's settings.

	$('#sidebar').stretchTo({ selector: 'footer', delay: 300 });



