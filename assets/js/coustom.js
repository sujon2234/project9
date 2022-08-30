$('.mega-menu-container').on('click', function(){
    $(this).children('.mega-menu-item').slideToggle(300)
    $(this).siblings('.mega-menu-container').children('.mega-menu-item').slideUp(150)
$(this).siblings('.mega-menu-container').children('a').children('.fa-solid').css({transform: 'rotate(0deg)'}).removeClass('active')

$(this).siblings('.mega-menu-container').children('a').removeClass('active')
setTimeout(()=>{
    let display = $(this).children('.mega-menu-item').css('display')
if(display == 'none'){
    $(this).children('a').children('.fa-solid').css({transform: 'rotate(0deg)'}).removeClass('active')
    $(this).children('a').removeClass('active')
}else{
    $(this).children('a').children('.fa-solid').css({transform: 'rotate(180deg)'}).addClass('active')
    $(this).children('a').addClass('active')
}
}, 300)

})
$('#mobile_menu_toggle').on('click', function(){
    $('.main-manu').slideToggle()
})
  $(document).ready(function(){
        $('.banner_slider').slick({

          dots: true,
          infinite: true,
          speed: 300,
          fade: true,
          autoplay: true,
          cssEase: 'linear'
        });
});
$('.testimonial_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });