// get lang to change menu burger
// var switchLangBurger = languageSwitch();




function menu() {


    var loadLanguage = getLanguage();

    const menu = document.querySelector(".menuBurger-list");
    const body = document.querySelector("body");

    $('body').toggleClass('lock');

    if (!$('#nav-icon').hasClass('open')) {

        menu.style.transform = "translate(0px, -100%)";
        // body.style.overflow = 'auto';
        // body.style.height = "auto";
        //menu.style.opacity = "0";
        lrMobile(0);

    } else {

        menu.style.transform = "translate(0px, 0%)";
        // $('body').toggleClass('lock');
        // body.style.overflow = 'hidden';
        // body.style.height = "100%";
        //menu.style.opacity = "1";



        if (loadLanguage["load"] === 'ua') {
            document.querySelector(".menuBurger-list").innerHTML = `
                                                <div class="menu-burger-content">
                                                    <nav class="navMenu-burger">
                                                        <li>

                                                            <a href="#" id="lg_features_burger" class="underline-one">Особливості</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" id="lg_sub_burger" class="underline-one">Підписки</a>

                                                        </li>
                                                        <li>
                                                            <a href="#" class="underline-one">FAQs</a>

                                                        </li>
                                                        <li>
                                                            <a href="#" id="lg_about_burger" class="underline-one">Про нас</a>

                                                        </li>
                                                        <li>
                                                            <a href="creators_mobile.html" id="lg_creators_burger" class="underline-one">Творці</a>

                                                        </li>
                                                        <li>
                                                            <a class="underline-one" onclick="lrMobile(1)">Поринути в GIIGI</a>

                                                        </li>
                                                    <nav>
                                                </div>`;

        } else {
            document.querySelector(".menuBurger-list").innerHTML = `
                                                <div class="menu-burger-content">
                                                    <nav class="navMenu-burger">
                                                        <li>

                                                            <a href="#" id="lg_features_burger" class="underline-one">Features</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" id="lg_sub_burger" class="underline-one">Subscriptions</a>

                                                        </li>
                                                        <li>
                                                            <a href="#" class="underline-one">FAQs</a>

                                                        </li>
                                                        <li>
                                                            <a href="#" id="lg_about_burger" class="underline-one">About us</a>

                                                        </li>
                                                        <li>
                                                            <a href="creators_mobile.html" id="lg_creators_burger" class="underline-one">Creators</a>

                                                        </li>
                                                        <li>
                                                            <a id="lg_plunge_burger" class="underline-one" onclick="lrMobile(1)">Plunge into GIIGI</a>

                                                        </li>
                                                    <nav>
                                                </div>`;
        }
        // const mnBurgercnt = document.querySelector(".menu-burger-content");
        // mnBurgercnt.style.margin = "100px auto";

    }
}




/* Menu burger btn */

$(document).ready(function () {
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });
});


/* Change header if small screen */

window.addEventListener("resize", function (e) {
    const menu = document.querySelector(".menuBurger-list");

    if ($(window).width() <= 800) {


        menu.style.transition = "all 0.8s ease 0s";

    }

    if ($(window).width() > 800) {

        $('#nav-icon').removeClass('open');
        $('body').removeClass('lock');


        menu.style.transform = "translate(0px, -100%)";
        menu.style.transition = "all 0.6s ease 0s";
        document.querySelector("body").style.overflow = 'visible';
    }


});