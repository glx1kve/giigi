// const themeSwitch = theme => document.documentElement.className = theme;

const themeSwitch = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
}

const getTheme = () => {
    const theme = localStorage.getItem('theme');
    theme && themeSwitch(theme);
}

getTheme();