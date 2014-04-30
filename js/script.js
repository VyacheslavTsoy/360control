// ================== Scalefix for devices
if (adaptive){
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
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')
}

function setHeight(){
  var parentH = $(".training_content").height();
  $(".training_content").find(".training_content_item").height(parentH);
}

// ================== Custom Functions and INIT
$(document).ready(function() {
    $("#nav_icon").on("click", function(){
      $(".sf-menu").slideToggle();
    })

    setHeight();

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

    var section2 = $("#on-job");
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


  });

  if (!adaptive){
    $('.training_content').jScrollPane();
  }

  var scrollfix = $("#training").offset().top;

  var lastActiveIndex = 0;

  $(window).scroll(function(){
    if (!adaptive){
      var training_content_items = $('.training_content .jspPane .training_content_item');
      var training_content_jspPane_step = $('.training_content .jspContainer').height();
      var training_content_jspPane_start = $('.training_content').offset().top;
      var training_content_jspPane_end = (training_content_jspPane_start - ((training_content_items.length - 1) * training_content_jspPane_step));
      var training_content_jspPane = $('.training_content .jspPane').offset().top;
    
    
      $(training_content_items).each(function(i){
        var index = Math.abs(Math.floor((training_content_jspPane - training_content_jspPane_start + (training_content_jspPane_step * 0.75)) / training_content_jspPane_step));

        if (i == index)
        {
          $('#vertical_stripe_box').attr('class', 'icon' + (index + 1));
          $(this).addClass('active');
        }
        else
        {
          $(this).removeClass('active');
        }
      });

      var parentBox = $("#training");
      var tci = $(".training_content_item:last");
      var offsetParent = parentBox.offset();
      var offset = tci.offset();
      
      if ($(document).scrollTop() + 74 >= scrollfix && $(document).scrollTop() < scrollfix + ($("#training").height() / 10))
      {
        $("#training").addClass('activated');
      }
      else
      {
      // console.log($('html').scrollTop())
        $("#training").removeClass('activated');
      }

      if( $('#training').scrollTop() + 74 >= tci && $('#training').scrollTop() < tci + ($(tci).height() / 10))
      {
        $("#training").addClass('yes');
      }
      else
      {
        $("#training").removeClass('yes');
      }
    }

  })

$(window).resize(function(){
  setHeight();
  if (adaptive){
    $("#approach_accordion").accordion({collapsible: true});
  }
})