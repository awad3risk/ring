jQuery(document).ready(function($){if($(".hideshare")[0]){var topOfOthDiv=$(".hideshare").offset().top;$(window).scroll(function(){if($(window).scrollTop()>topOfOthDiv){$(".share").hide()}
else{$(".share").show()}})}
var offset=1250;var duration=800;jQuery(window).scroll(function(){if(jQuery(this).scrollTop()>offset){jQuery('.back-to-top').fadeIn(duration)}else{jQuery('.back-to-top').fadeOut(duration)}});jQuery('.back-to-top').click(function(event){event.preventDefault();jQuery('html, body').animate({scrollTop:0},duration);return!1})
$(document).scroll(function(){var y=$(this).scrollTop();if(y>280){$('.alertbar').fadeIn()}else{$('.alertbar').fadeOut()}});if($('.masonrygrid').length){var $grid=$('.masonrygrid').masonry({itemSelector:'.grid-item'});$grid.imagesLoaded().progress(function(){$grid.masonry()})}
$('a.smoothscroll[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){event.preventDefault();$('html, body').animate({scrollTop:target.offset().top},1000,function(){var $target=$(target);$target.focus();if($target.is(":focus")){return!1}else{$target.attr('tabindex','-1');$target.focus()}})}}});var didScroll;var lastScrollTop=0;var delta=5;var navbarHeight=$('header').outerHeight();$(window).scroll(function(event){didScroll=!0});setInterval(function(){if(didScroll){hasScrolled();didScroll=!1}},250);function hasScrolled(){var st=$(this).scrollTop();var brandrow=$('.brandrow').css("height");if(Math.abs(lastScrollTop-st)<=delta)
return;if(st>lastScrollTop&&st>navbarHeight){$('header').removeClass('nav-down').addClass('nav-up');$('.nav-up').css('top',-$('header').outerHeight()+'px')}else{if(st+$(window).height()<$(document).height()){$('header').removeClass('nav-up').addClass('nav-down');$('.nav-up, .nav-down').css('top','0px')}}
lastScrollTop=st}
$('.site-content').css('margin-top',$('header').outerHeight()+'px');$("a.sscroll[href='#totop']").click(function(){$("html, body").animate({scrollTop:0},"slow");return!1});var jumptopageof=$('#jumptopageof');if(jumptopageof.length){$('body,html').animate({scrollTop:$(jumptopageof).offset().top-0},800)}})
