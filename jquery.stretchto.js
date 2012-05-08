/**
 * stretchTo jQuery plugin
 * @author Peter French
 */
(function( $ ){

  $.fn.stretchTo = function( selector, delay, speed ) {

    var settings = $.extend(
	// defaults
	{
		'selector'	: null,
		'delay'		: 0,
		'speed'		: 0
    },
	// params
	$.isPlainObject(selector) ? selector
	: {
		'selector'	: selector,
		'delay'		: delay,
		'speed'		: speed
	});

	return this.each(function() {

		var self = this;

		setTimeout(function(){

			var el = { $ : $(self) }
			el.offset = el.$.offset();

			var to = { $ : $(settings.selector) }
			to.offset = to.$.offset();
			
			// calculate distance between elements
			var distance = (to.offset.top - parseInt(to.$.css('marginTop'),10))  - (el.offset.top + el.$.outerHeight() + parseInt(el.$.css('marginBottom'),10));

			// animate element
			if(distance)			
				el.$.animate({ 'min-height': ( el.$.height() + distance) + 'px'}, settings.speed);

		}, settings.delay);
	});

  };
})( jQuery );