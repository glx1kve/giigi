var language = {
    ua: {
        lang: "Мова",
        features: "Особливості",
        sub: "Підписки",
        about: "Про нас",
        // theme: "Змінити тему",
        creators: "Творці",
        thanks: "Дякую!",
        plunge: "Поринути в GIIGI",
        logo: "Логотип компанії GIIGI",
        left_text: "&nbsp;&nbsp;&nbsp;&nbsp;Логотип складається з абревіатури GIIGI, яка має повну назву «Generic Insurrection in Game Industry». Звучить доволі пафосно, але ж не потрібно приховувати правду від поціновувачів. Абревіатура обрамлена, що символізує кордони, в межах яких функціонує компанія. Також на логотипі є фонове зображення, яке використовується виключно в маркетингових цілях та символізує безкордрнний та фантастичний космос, прямо таки як ми xD. Ще в лівому нижньому куті є символ, який посилається на колись відомий в минулому клан BOTW.",
        right_text: "Компінія GIIGI займається розробкою кросплатфомових ігор в різних жанрах. Головною спеціалізацією є ігри жанру футбольного симулятора. Та впринципі усьо.",
        street: "м. Київ, вул. \\_(-_-)_/, 00000 <br> +38(012)-345-67-89 <br><br> \&copy; GIIGI",
        theme: "Змінити тему",
        creators: "Творці",
        thanks: "Дякую!",
        plunge: "Поринути в GIIGI",
        tnx_welcome: "Ласкаво просимо!",
        tnx_text: "Ми раді, що ви обираєте нашу платформу, і ми зробимо все від нас можливе, щоб надати вам лише позитивні емоції.",
        tnx_text2: "А тепер ви можете приєднатися до нас!",
        tnx_go_btn: "Вперед!",
    },
    en: {
        lang: "Language",
        features: "Features",
        sub: "Subscriptions",
        about: "About us",
        // theme: "Switch theme",
        creators: "Creators",
        thanks: "Thank you!",
        plunge: "Plunge into GIIGI",
        logo: "GIIGI company logo",
        left_text: "The logo consists of the abbreviation GIIGI, which has the full name «Generic Insurrection in Game Industry». Sounds pretty pathetic, but we don't have to hide the truth from your fans. The abbreviation is framed, symbolizing the boundaries within which the company operates. The logo also has a background image that is used exclusively for marketing purposes and symbolizes a boundless and fantastic space, just like us xD. In the lower-left corner is a symbol that refers to the once-famous BOTW clan.",
        right_text: "GIGI develops cross-platform games in various genres. The main specialization is games of the football simulator genre. That's all, sir.",
        street: "00000, \\_(-_-)_/ street, Kyiv",
        theme: "Змінити тему",
        creators: "Creators",
        thanks: "Thank you!",
        plunge: "Plunge into GIIGI",
        tnx_welcome: "Welcome!",
        tnx_text: "We enjoy that you choose our platform and we will do everything to give you only positive emotions.",
        tnx_text2: "And now you can join us!",
        tnx_go_btn: "Go!",
    },
};


if (window.location.hash) {
    if (window.location.hash === "#en") {
        lg_lang.textContent = language.en.lang;
        lg_features.textContent = language.en.features;
        lg_sub.textContent = language.en.sub;
        lg_about.textContent = language.en.about;
        // lg_theme.textContent = language.en.theme;
        lg_creators1.textContent = language.en.creators;
        lg_creators2.textContent = language.en.creators;
        lg_thanks1.textContent = language.en.thanks;
        lg_thanks2.textContent = language.en.thanks;
        lg_plunge1.textContent = language.en.plunge;
        lg_plunge2.textContent = language.en.plunge;
        lg_logo.textContent = language.en.logo;
        lg_left_text.textContent = language.en.left_text;
        lg_right_text.textContent = language.en.right_text;
        lg_street.textContent = language.en.street;
        lg_tnx_welcome.textContent = language.en.tnx_welcome;
        lg_tnx_text.textContent = language.en.tnx_text;
        lg_tnx_text2.textContent = language.en.tnx_text2;
        lg_tnx_go_btn.textContent = language.en.tnx_go_btn;
    }
}


function R() {
    location.reload(true);
}
function Rload() {
    setTimeout(R, 0);
}