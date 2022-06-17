
/* Save and load language */

// var language_list = {};

// const languageSwitch = (language) => {
//     // document.documentElement.className = language;
//     localStorage.setItem('language', language);
// }


const getLanguage = () => {
    const language = localStorage.getItem('language');

    if (language === "ua") {
        Rload("ua");
    }
    else {
        Rload("en");
    }

    // language_list = { "load": language };
    // return language_list;
}


getLanguage();

// exports = { getLanguage };

