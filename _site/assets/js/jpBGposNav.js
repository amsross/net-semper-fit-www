jQuery(function() {
  /* position of the <li> that is currently shown */
  var current = 0;

  var loaded  = 0;
  for(var i = 1; i <4; ++i)
    //jQuery(document).load(function(){
    jQuery(window).load(function(){
      ++loaded;
      if(loaded == 3){
        jQuery('#bg1,#bg2,#bg3').mouseover(function(e){

          var $this = jQuery(this);
          /* if we hover the current one, then don't do anything */
          if($this.parent().index() == current)
            return;

          /* item is bg1 or bg2 or bg3, depending where we are hovering */
          var item = e.target.id;

          /*
             this is the sub menu overlay. Let's hide the current one
             if we hover the first <li> or if we come from the last one,
             then the overlay should move left -> right,
             otherwise right->left
             */
          if(item == 'bg1' || current == 2)
            jQuery('#acc .sub'+parseInt(current+1)).stop().animate({backgroundPosition:"(-266px 0)"},300,function(){
              jQuery(this).find('li').hide();
            });
          else
            jQuery('#acc .sub'+parseInt(current+1)).stop().animate({backgroundPosition:"(266px 0)"},300,function(){
              jQuery(this).find('li').hide();
            });

          if(item == 'bg1' || current == 2){
            /* if we hover the first <li> or if we come from the last one, then the images should move left -> right */
            jQuery('#acc > li').animate({backgroundPosition:"(-800px 0)"},0).removeClass('bg1 bg2 bg3').addClass(item);
            move(1,item);
          }
          else{
            /* if we hover the first <li> or if we come from the last one, then the images should move right -> left */
            jQuery('#acc > li').animate({backgroundPosition:"(800px 0)"},0).removeClass('bg1 bg2 bg3').addClass(item);
            move(0,item);
          }

          /*
             We want that if we go from the first one to the last one (without hovering the middle one),
             or from the last one to the first one, the middle menu's overlay should also slide, either
             from left to right or right to left.
             */
          if(current == 2 && item == 'bg1'){
            jQuery('#acc .sub'+parseInt(current)).stop().animate({backgroundPosition:"(-266px 0)"},300);
          }
          if(current == 0 && item == 'bg3'){
            jQuery('#acc .sub'+parseInt(current+2)).stop().animate({backgroundPosition:"(266px 0)"},300);
          }


          /* change the current element */
          current = $this.parent().index();

          /* let's make the overlay of the current one appear */

          jQuery('#acc .sub'+parseInt(current+1)).stop().animate({backgroundPosition:"(0 0)"},300,function(){
            jQuery(this).find('li').fadeIn();
          });
        });
      }	
    }).attr('src', 'images/'+i+'.jpg');


  /*
     dir:1 - move left->right
     dir:0 - move right->left
     */
  function move(dir,item){
    if(dir){
      jQuery('#bg1').parent().stop().animate({backgroundPosition:"(0 0)"},200);
      jQuery('#bg2').parent().stop().animate({backgroundPosition:"(-266px 0)"},300);
      jQuery('#bg3').parent().stop().animate({backgroundPosition:"(-532px 0)"},400,function(){
        jQuery('#menuWrapper').removeClass('bg1 bg2 bg3').addClass(item);
      });
    }
    else{
      jQuery('#bg1').parent().stop().animate({backgroundPosition:"(0 0)"},400,function(){
        jQuery('#menuWrapper').removeClass('bg1 bg2 bg3').addClass(item);
      });
      jQuery('#bg2').parent().stop().animate({backgroundPosition:"(-266px 0)"},300);
      jQuery('#bg3').parent().stop().animate({backgroundPosition:"(-532px 0)"},200);
    }
  }
});
