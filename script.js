window.addEventListener("load", function () {
    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("mainContent");


    function showLandingPage() {
        intro.classList.add("hide");
        mainContent.classList.add("show");
    }

    
    const timer = setTimeout(showLandingPage, 3000);

    
    intro.addEventListener("click", function () {
        clearTimeout(timer); 
        showLandingPage();
    });
});

  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
