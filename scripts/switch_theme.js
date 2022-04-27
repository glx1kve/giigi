const setTheme = theme => document.documentElement.className = theme;

document.getElementById('theme-select').addEventListener('change', function () {
    setTheme(this.value);
});



{/* <select name="theme-select" id="theme-select">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select> */}