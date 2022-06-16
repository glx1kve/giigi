// var loadLang = require('load_theme_script.js');


// var cols = Math.floor(Math.random() * 7) + 3;
var cols = 5;
const sliderWrapper = document.getElementById('sliderWrapper');
let parts = [];
let current = 0;

var language_list = {};

const getLanguage = () => {
    const language = localStorage.getItem('language');


    return language_list = { "load": language };
}



var language = getLanguage();

if (language === 'ua') {
    var images = ['images/features_giigi_ua.png', 'images/features_rtx_ua.png', 'images/features_c++_ua.png', 'images/features_ue_ua.png', 'images/features_blender_ua.png'];

} else {
    var images = ['images/features_giigi_en.png', 'images/features_rtx_en.png', 'images/features_c++_en.png', 'images/features_ue_en.png', 'images/features_blender_en.png'];

}


// Add images to the HTML-markup
for (let col = 0; col < cols; col++) {
    let part = document.createElement('div');
    part.className = 'part';

    let section = document.createElement('div');
    section.className = 'section';

    let img = document.createElement('img');
    img.src = images[current];

    section.appendChild(img);
    part.appendChild(section);
    sliderWrapper.appendChild(part);

    part.style.setProperty('--x', (-100 / cols) * col + 'vw');

    parts.push(part);
}

let playing = false;

// Slide handler
const slide = (dir) => {
    if (!playing) {
        playing = true;

        if (current + dir < 0) {
            current = images.length - 1;
        } else if (current + dir >= images.length) {
            current = 0;
        } else {
            current += dir;
        }

        const up = (part, next) => {
            part.appendChild(next);
            anime({
                targets: part,
                duration: 2500,
                easing: 'easeInOutQuart',
                translateY: [0, -window.innerHeight],
                complete: () => {
                    part.removeChild(part.childNodes[0]);
                    playing = false;
                    part.style.transform = 'translateY(0)';
                },
            });
            // console.log("up");
        };

        const down = (part, next) => {
            part.insertBefore(next, part.firstChild);
            anime({
                targets: part,
                duration: 2500,
                easing: 'easeInOutQuart',
                translateY: [-window.innerHeight, 0],
                complete: () => {
                    part.removeChild(part.childNodes[1]);
                    playing = false;
                },
            });
            // console.log("down");
        };

        for (let p in parts) {
            let part = parts[p];
            let next = document.createElement('div');
            next.className = 'section';

            let img = document.createElement('img');
            img.src = images[current];


            next.appendChild(img);


            if ((p - Math.max(0, dir)) % 2 === 0) {
                down(part, next);
            } else {
                up(part, next);
            }
        }
    }
};

