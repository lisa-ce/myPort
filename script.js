window.addEventListener("load", function () {
    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("mainContent");

    setTimeout(() => {
        intro.classList.add("hide");
        mainContent.classList.add("show");
    }, 3000); // 3 seconds
});