function Sign() {
    location.replace('../cabinet.html');
}



function lrMobile(check) {
    const openLRForm = document.querySelector(".log_reg_mobile");



    if (check === 0) {

        openLRForm.style.transform = "translate(0px, -132%)";
        openLRForm.style.visibility = "hidden";
        //document.querySelector("body").style.overflow = 'visible';
        //menu.style.opacity = "0";

    } else {

        openLRForm.style.transform = "translate(0px, 0%)";
        openLRForm.style.visibility = "visible";
        //document.querySelector("body").style.overflow = 'hidden';
        //menu.style.opacity = "1";
    }

}



window.addEventListener("resize", function (e) {
    const openLRForm = document.querySelector(".log_reg_mobile");

    if ($(window).width() <= 800) {


        openLRForm.style.transition = "all 1.0s ease 0s";

    }

    if ($(window).width() > 800) {



        openLRForm.style.transform = "translate(0px, -132%)";
        openLRForm.style.visibility = "hidden";
        openLRForm.style.transition = "all 0.5s ease 0s";
        // document.querySelector("body").style.overflow = 'visible';
    }

});