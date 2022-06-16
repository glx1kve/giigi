// const themeSwitch = theme => document.documentElement.className = theme;

const themeSwitch = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
}

const getTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme === "light") {
        theme && themeSwitch(theme);
    }
    else {
        document.querySelector(".checkbox").innerHTML = `<input type="checkbox" id="theme_switcher"><label for="theme_switcher"></label>`;
        theme && themeSwitch(theme);
    }
}

getTheme();





/* Save and load language */

var language_list = {};

const languageSwitch = (language) => {
    // document.documentElement.className = language;
    localStorage.setItem('language', language);
}


const getLanguage = () => {
    const language = localStorage.getItem('language');

    if (language === "ua") {
        document.getElementById("ua").click();
    }
    else {
        document.getElementById("en").click();
    }

    language_list = { "load": language };
    return language_list;
}


getLanguage();

exports = { getLanguage };

