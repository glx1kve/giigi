/* when modal is opened */
document.querySelector("#settings-btn").addEventListener('click', function () {
    // document.querySelector(".popup_settings_body").style.display = 'block';
    document.querySelector("body").style.overflow = 'hidden';
    // document.querySelector(".wrapper").style.background = 'rgb(0, 0, 0, 0.4)';
});

/* when modal is closed */
document.querySelector(".popup_settings_close").addEventListener('click', function () {
    // document.querySelector(".popup_settings_body").style.display = 'none';
    document.querySelector("body").style.overflow = 'visible';
    // document.querySelector(".wrapper").style.background = 'none';
});