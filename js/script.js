$('.header__burger').click(function(){
    const nav = $('.header__pages');
    if (nav.css('display') === 'block') {
        nav.css('display', 'none');;
    } else {
        nav.css('display', 'block');
    }
    //nav.toggleClass('open')
});

$('.card__link').hover(function(){
    const underline = $(this).next();
    console.log($(this).next());
    if (underline.css('opacity') !== '1') {
        underline.css('opacity', '1');
    } else {
        underline.css('opacity', '0.25');
    }
});

