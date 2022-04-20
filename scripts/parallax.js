$(document).ready(function () {
    $(window).scroll(function (event) {
        var s = $(this).scrollTop(); // отримуєм пікселі, які прокручені у вікні браузера
        var w = $(this).outerWidth(); // ширина вікна
        var h = $('.content').outerHeight(); // висота контентної частини
        var h_b = $('.parallax').outerHeight(); // висота верхнього блока

        var p = s / h * 100; // % прокрутки всієї контентної частини
        var p_b = s / h_b * 100; // % прокрутки лише верхньої частини
        var o = 1 - 1 / 100 * p_b// для вирахування майбутньої непрозорості


        //Parallax
        var z_1 = 1 + (w / 10000 * p_b); // для зникання туману

        $('.parallax_fog').css('transform', 'scale(' + z_1 + ')');
        $('.parallax_fog').css('opacity', o);

        var z_2 = 1 + (w / 500000 * p); // для збільшення фону (гори)
        $('.parallax_mountain_1').css('transform', 'scale(' + z_2 + ')');

        var hr_1 = w / 2000 * p_b; //
        var z_3 = 1 + (w * 0.000005 * p_b);
        $('.parallax_mountain_2').css('transform', 'translate3d(' + hr_1 + 'px, 0, 0) scale(' + z_3 + ')');

        var hr_2 = w / 1500 * p_b; //
        var z_4 = 1 + (w * 0.00001 * p_b);
        $('.parallax_mountain_3').css('transform', 'translate3d(' + hr_2 + 'px, 0, 0) scale(' + z_4 + ')');
    });
});



