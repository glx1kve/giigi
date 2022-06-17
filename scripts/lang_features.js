var language = {
    ua: {

        giigi: "Ми виокристовуємо найсучасніші технологічні особливості в наших проєктах. Завжди гарантуємо якість та надійність",
        rtx: "Для своїх творінь використовуємо виключно найпотужніше апаратне забезпечення",
        code: "Пишемо код з використанням підходящих парадигм програмування. Написаний код тестуємо та вдосконалюємо до найскладніших завдань щодо гри",
        unreal_engine: "Використання повноціного ігрового двигуна надає нашим іграм повноціного реалізму картинки та фізики об'єктів",
        blender: "Для створення ігрових об'єктів ми використовуємо сучасні програми для моделювання",


        giigi_title: "Загальна інформація",
        // rtx_title: "RTX",
        code_title: "C++ код",
        unreal_engine_title: "Ігровий двигун",
        blender_title: "3D-моделювання",


    },
    en: {

        giigi: "We use the latest technological features in our projects. We always guarantee quality and reliability",
        rtx: "We use only the most powerful hardware for our creations",
        code: "We write code using appropriate programming paradigms. We test and improve the written code to the most difficult tasks of the game",
        unreal_engine: "Using a full-fledged game engine gives our games unsurpassed realism of appearance and physics of objects",
        blender: "To create game objects, we use modern simulation programs",


        giigi_title: "General info",
        // rtx_title: "RTX",
        code_title: "C ++ code",
        unreal_engine_title: "Game engine",
        blender_title: "3D modeling",



    },
};






function R() {
    location.reload(true);
}
function Rload(currentLanguage) {
    // setTimeout(R, 0);
    // 



    if (currentLanguage === "ua") {


        lg_giigi.textContent = language.ua.giigi;
        lg_rtx.textContent = language.ua.rtx;
        lg_code.textContent = language.ua.code;
        lg_unreal_engine.textContent = language.ua.unreal_engine;
        lg_blender.textContent = language.ua.blender;


        lg_giigi_title.textContent = language.ua.giigi_title;
        // lg_rtx_title.textContent = language.ua.rtx_title;
        lg_code_title.textContent = language.ua.code_title;
        lg_unreal_engine_title.textContent = language.ua.unreal_engine_title;
        lg_blender_title.textContent = language.ua.blender_title;



    } else {



        lg_giigi.textContent = language.en.giigi;
        lg_rtx.textContent = language.en.rtx;
        lg_code.textContent = language.en.code;
        lg_unreal_engine.textContent = language.en.unreal_engine;
        lg_blender.textContent = language.en.blender;


        lg_giigi_title.textContent = language.en.giigi_title;
        // lg_rtx_title.textContent = language.en.rtx_title;
        lg_code_title.textContent = language.en.code_title;
        lg_unreal_engine_title.textContent = language.en.unreal_engine_title;
        lg_blender_title.textContent = language.en.blender_title;



    }
}