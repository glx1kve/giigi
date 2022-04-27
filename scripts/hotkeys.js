document.addEventListener("keydown", variable => {
    // variable.preventDefault();
    if (variable.shiftKey && variable.ctrlKey && variable.key.toLowerCase() === "f") {
        document.getElementById("surprise").click();
    }
    // console.log(variable);
});