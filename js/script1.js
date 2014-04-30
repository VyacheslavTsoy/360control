// ================== Scalefix for devices

$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')


// ================== Custom Functions and INIT
$(document).ready(function() {
    var parentH = $(".training_content").height()
    
    if($(window).width() > 995){
      $(".training_content").find(".training_content_item").height(parentH);
      $('.training_content').jScrollPane();
    }

    $.fn.waypointInit = function(classN,offset){
        return $(this).waypoint(function(direction){
            if(direction === 'down'){
                $(this).addClass(classN);
            };
        },{ offset : offset })
    };

    $.fn.waypointSynchronise = function(synchroniseElement,offset,classN,delay){
      var element = $(this);
       return $(synchroniseElement).waypoint(function(direction){
       if(direction === 'down'){
        setTimeout(function(){
         element.addClass(classN);
        },delay);
       }
      },{ offset : offset });
     };

    var section1 = $("#training");
    var section2 = $("#on-job");

    $(section1).waypointInit('active','74');
    $(section2).waypointInit('active','20%');



    var owl = $('.approach_carousel'); // save reference to variable

    owl.owlCarousel({
      items:1,
      loop:true,
      center:true,
      margin:0,
      dotData:true

    });

    $("#approach_accordion").accordion({collapsible: true});

    $("[class^='simulator_dots']").on("hover", function(){
      var showItem = $(this).data("hover")
      $(showItem).toggleClass("show");
    })

    $("#nav_icon").on("click", function(){
      $(".sf-menu").slideToggle();
    })


  });

  var scrollfix = $("#training").offset().top;
  var element;
  var api;

  if($(window).width() > 995){
    var element = $('.training_content').jScrollPane();
    var api = element.data('jsp');
  }
  $(window).resize(function(){
    if($(window).width() > 995){
      api.reinitialise();
    }
    else{
      api.removeData();
    }
  })

  $(window).scroll(function(){
    var parentBox = $("#training");
    var tci = $(".training_content_item:last");
    var offsetParent = parentBox.offset();
    var offset = tci.offset();
    
  	if( $('body').scrollTop() + 74 >= scrollfix && $('body').scrollTop() < scrollfix + ($("#training").height() / 10))
  	{
  		$("#training").addClass('active');
  	}
  	else
  	{
  		$("#training").removeClass('active');
  	}

    if( $('#training').scrollTop() + 74 >= tci && $('#training').scrollTop() < tci + ($(tci).height() / 10))
    {
      $("#training").addClass('yes');
    }
    else
    {
      $("#training").removeClass('yes');
    }

  })

