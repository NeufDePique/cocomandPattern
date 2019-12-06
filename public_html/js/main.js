jQuery(document).ready(function ($) {
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.nav--full-screen').toggleClass('is-active');
    });
});