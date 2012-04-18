/**
 * stretchTo jQuery Plugin
 * @author Peter French
 */
(function( $ ){

  $.fn.stretchTo = function( to, speed ) {  
	
    var settings = $.extend( {
		'to'		: 'body',
		'speed'		: 0
    }, {
		'to'		: to,
		'speed'		: speed
	});	
		
	var to = { $ : $(settings.to) }
	to.offset = to.$.offset();

    return this.each(function() {
		
		var el = { $ : $(this) }
		el.offset = el.$.offset();
		
		var distance = to.offset.top - (el.offset.top + el.$.outerHeight());
		
		if(distance)
			el.$.animate({ 'min-height': ( el.$.height() + distance) + 'px'}, settings.speed);

    });

  };
})( jQuery );