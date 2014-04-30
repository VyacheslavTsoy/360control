 $('.sf-menu a').bind('click',function(event){

    var anchor = $(this);
    $(".sf-menu li").removeClass("current");
    $(this).parent().addClass("current");
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 74
    }, 1200,'easeOutExpo', function(){
        highlite_menu();
    });
    event.preventDefault();
});

 var highlite_menu = function(){
    $('section').each(function(){
        var highlight = function($el){
            var id = $el[0].id,
                $menulia = $('.sf-menu>li>a');
            $('.sf-menu>li').removeClass('current');
            $('.sf-menu>li>a[href="#' + id + '"]').parent().addClass('current');
        }
        if ($(this)[0].id == 'contacts_page' && $(window).height() > 815){
            if ($(window).scrollTop() >= ( $(this).offset().top -  360 ) && $(window).scrollTop() < ( $(this).offset().top + 560 )    ){
                highlight($(this));
                console.log($(this))
            }

        } else {
            if ($(window).scrollTop() >= ( $(this).offset().top - 160 ) && $(window).scrollTop() < ( $(this).offset().top + 260 )    ){
                highlight($(this));
            }
        }

    })

}
$(window).scroll(function(){
    highlite_menu();
});