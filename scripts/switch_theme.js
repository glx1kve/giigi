class ThemeSwitcher {
    constructor(options) {
        this.options = options || {};
        this.wrapper = document.querySelector(this.options.wrapper);
        this.switcher = document.querySelector(this.options.switcher);
        this.theme = '';


        if (this.wrapper && this.switcher) {
            this.init();
        }
    }

    switch() {
        if (this.switcher.checked) {
            // this.wrapper.classList.add(this.theme + this.options.prefix.day);
            // this.wrapper.classList.remove(this.theme + this.options.prefix.night);
            themeSwitch('light');
            document.querySelector("#settings-btn").innerHTML = `<img src="images/settings_white.png" width="25" alt="Settings">`;
        } else {
            // this.wrapper.classList.add(this.theme + this.options.prefix.night);
            // this.wrapper.classList.remove(this.theme + this.options.prefix.day);
            themeSwitch('dark');
            document.querySelector("#settings-btn").innerHTML = `<img src="images/settings.png" width="25" alt="Settings">`;
        }
    }

    init() {
        this.theme = this.options.wrapper.replace(/\./gi, '');
        this.switcher.addEventListener('change', evt => this.switch());
        this.switch();
    }
}

let theme = new ThemeSwitcher({
    wrapper: '.theme',
    switcher: '#theme_switcher',
    prefix: {
        day: '--day',
        night: '--night'
    }
});