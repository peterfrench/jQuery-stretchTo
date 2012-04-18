# stretchTo jQuery plugin

When faux css columns can't be done, this plugin will solve your mismatched column woes.

## Usage

The first jquery selector will determine which element to adjust the height of. In the example below, the code will adjust the height of #sidebar to the top of the footer element.

	$('#sidebar').stretchTo('footer');


This will adjust the height of #sidebar & #main to the top of #bottom.

	$('#sidebar, #main').stretchTo('#bottom');



