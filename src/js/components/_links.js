$("a[href^='#']").click(function() {
    let _href = $(this).attr('href');
    $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
    return false;
});