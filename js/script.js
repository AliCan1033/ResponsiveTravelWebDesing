$(document).ready(function(){ //fa-barsın görünmesi ve kaybolması
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

         if ($(window).scrollTop() > 30) { //navbarın aşşağı doğru inmesi için//
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        $('section').each(function(){ //navbardaki sectionların rengi scroll ile kaydırıp kendi alanına getirdiğimizde active oluyor//
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            var top = $(window).scrollTop();
            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
    
        });
    });
});