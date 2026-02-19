window.addEventListener("load", function () {
    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("mainContent");

    // Function to hide intro
    function showLandingPage() {
        intro.classList.add("hide");
        mainContent.classList.add("show");
    }

    // Auto after 30 seconds
    const timer = setTimeout(showLandingPage, 3000);

    // Click to skip
    intro.addEventListener("click", function () {
        clearTimeout(timer); // stop the 30s timer
        showLandingPage();
    });
});
