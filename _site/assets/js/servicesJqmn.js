	// this example shows the use of onShow and onHide callbacks. Make
	// sure to read the documentation for futher instructions, and
	// an explanation of the "hash" argument.
	jQuery().ready(function() {
	  jQuery('#jqmnOneonone')
	    .jqDrag('.jqDrag')
	    .jqResize('.jqResize')
	    .jqm({
	      trigger:'.jqmnOneononeTrigger',
	      overlay: 0,
	      onShow: function(h) {
	        /* callback executed when a trigger click. Show notice */
	        h.w.css('opacity',0.92).slideDown(); 
	        },
	      onHide: function(h) {
	        /* callback executed on window hide. Hide notice, overlay. */
	        h.w.slideUp("slow",function() { if(h.o) h.o.remove(); }); } 
	      });
	});
	jQuery().ready(function() {
	  jQuery('#jqmnGroup')
	    .jqDrag('.jqDrag')
	    .jqResize('.jqResize')
	    .jqm({
	      trigger:'.jqmnGroupTrigger',
	      overlay: 0,
	      onShow: function(h) {
	        /* callback executed when a trigger click. Show notice */
	        h.w.css('opacity',0.92).slideDown(); 
	        },
	      onHide: function(h) {
	        /* callback executed on window hide. Hide notice, overlay. */
	        h.w.slideUp("slow",function() { if(h.o) h.o.remove(); }); } 
	      });
	});
	jQuery().ready(function() {
	  jQuery('#jqmnSportsSpecific')
	    .jqDrag('.jqDrag')
	    .jqResize('.jqResize')
	    .jqm({
	      trigger:'.jqmnSportsSpecificTrigger',
	      overlay: 0,
	      onShow: function(h) {
	        /* callback executed when a trigger click. Show notice */
	        h.w.css('opacity',0.92).slideDown(); 
	        },
	      onHide: function(h) {
	        /* callback executed on window hide. Hide notice, overlay. */
	        h.w.slideUp("slow",function() { if(h.o) h.o.remove(); }); } 
	      });
	});
	jQuery().ready(function() {
	  jQuery('#jqmnRehabilitation')
	    .jqDrag('.jqDrag')
	    .jqResize('.jqResize')
	    .jqm({
	      trigger:'.jqmnRehabilitationTrigger',
	      overlay: 0,
	      onShow: function(h) {
	        /* callback executed when a trigger click. Show notice */
	        h.w.css('opacity',0.92).slideDown(); 
	        },
	      onHide: function(h) {
	        /* callback executed on window hide. Hide notice, overlay. */
	        h.w.slideUp("slow",function() { if(h.o) h.o.remove(); }); } 
	      });
	});
	jQuery().ready(function() {
	  jQuery('#jqmnYouthElderly')
	    .jqDrag('.jqDrag')
	    .jqResize('.jqResize')
	    .jqm({
	      trigger:'.jqmnYouthElderlyTrigger',
	      overlay: 0,
	      onShow: function(h) {
	        /* callback executed when a trigger click. Show notice */
	        h.w.css('opacity',0.92).slideDown(); 
	        },
	      onHide: function(h) {
	        /* callback executed on window hide. Hide notice, overlay. */
	        h.w.slideUp("slow",function() { if(h.o) h.o.remove(); }); } 
	      });
	});
