var language = {
    ua: {
        // lang: "Мова",
        // theme: "Тема",
        features: "Особливості",
        sub: "Підписки",
        about: "Про нас",
        creators: "Творці",
        thanks: "Дякую!",
        plunge: "Поринути в GIIGI",
        logo: "Логотип компанії GIIGI",
        left_text: "&nbsp;&nbsp;&nbsp;&nbsp;Логотип складається з абревіатури GIIGI, яка має повну назву «Generic Insurrection in Game Industry». Звучить доволі пафосно, але ж не потрібно приховувати правду від поціновувачів. Абревіатура обрамлена, що символізує кордони, в межах яких функціонує компанія. Також на логотипі є фонове зображення, яке використовується виключно в маркетингових цілях та символізує безкордрнний та фантастичний космос, прямо таки як ми xD. Ще в лівому нижньому куті є символ, який посилається на колись відомий в минулому клан BOTW.",
        right_text: "Компінія GIIGI займається розробкою кросплатфомових ігор в різних жанрах. Головною спеціалізацією є ігри жанру футбольного симулятора. Та впринципі усьо.",
        street: "м. Київ, вул. \\_(-_-)_/, 00000 <br> +38(012)-345-67-89 <br><br> \&copy; GIIGI",
        creators: "Творці",
        plunge: "Поринути в GIIGI",


        create_account: "Створити акаунт",
        reg: "або використайте свій email для реєстрації",
        sign_up: "Зареєструватися",
        sign_in: "Увійти",
        log: "або скористайтеся своїм облікомим записом",
        forgot: "Забули свій пароль?",
        welcome: "З поверненням!",
        log_info: "Щоб залишатися з нами на зв'язку, будь ласка, увійдіть використовуючи свою особисту інформацію",
        friend: "Привіт, друже!",
        sign_info: "",
    },
    en: {
        // lang: "Language",
        // theme: "Theme",
        features: "Features",
        sub: "Subscriptions",
        about: "About us",
        creators: "Creators",
        thanks: "Thank you!",
        plunge: "Plunge into GIIGI",
        logo: "GIIGI company logo",
        left_text: "The logo consists of the abbreviation GIIGI, which has the full name «Generic Insurrection in Game Industry». Sounds pretty pathetic, but we don't have to hide the truth from your fans. The abbreviation is framed, symbolizing the boundaries within which the company operates. The logo also has a background image that is used exclusively for marketing purposes and symbolizes a boundless and fantastic space, just like us xD. In the lower-left corner is a symbol that refers to the once-famous BOTW clan.",
        right_text: "GIGI develops cross-platform games in various genres. The main specialization is games of the football simulator genre. That's all, sir.",
        street: "00000, \\_(-_-)_/ street, Kyiv",
        creators: "Creators",
        plunge: "Plunge into GIIGI",



        create_account: "Create Account",
        reg: "or use your email for registration",
        sign_up: "Sign Up",
        sign_in: "Sign in",
        log: "or use your account",
        forgot: "Forgot your password?",
        welcome: "Welcome Back!",
        log_info: "To keep connected with us please login with your personal info",
        friend: "Hello, Friend!",
        sign_info: "Enter your personal details and start journey with us",

    },
};


if (window.location.hash) {
    if (window.location.hash === "#en") {
        // lg_lang.textContent = language.en.lang;
        // lg_theme.textContent = language.en.theme;
        lg_features.textContent = language.en.features;
        lg_sub.textContent = language.en.sub;
        lg_about.textContent = language.en.about;
        lg_creators1.textContent = language.en.creators;
        lg_creators2.textContent = language.en.creators;
        lg_plunge1.textContent = language.en.plunge;
        lg_plunge2.textContent = language.en.plunge;
        lg_logo.textContent = language.en.logo;
        lg_left_text.textContent = language.en.left_text;
        lg_right_text.textContent = language.en.right_text;
        lg_street.textContent = language.en.street;


        lg_create_account.textContent = language.en.create_account;
        lg_reg.textContent = language.en.reg;

        lg_sign_in0.textContent = language.en.sign_in;
        lg_sign_up1.textContent = language.en.sign_up;
        lg_sign_in1.textContent = language.en.sign_in;
        lg_sign_up2.textContent = language.en.sign_up;
        lg_sign_in2.textContent = language.en.sign_in;

        lg_log.textContent = language.en.log;
        lg_forgot.textContent = language.en.forgot;
        lg_welcome.textContent = language.en.welcome;
        lg_log_info.textContent = language.en.log_info;
        lg_friend.textContent = language.en.friend;
        lg_sign_info.textContent = language.en.sign_info;


    }
}


function R() {
    location.reload(true);
}
function Rload() {
    setTimeout(R, 0);
}