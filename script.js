window.addEventListener("load", function () {
    const intro = document.getElementById("intro");
    


    function showLandingPage() {
        intro.classList.add("hide");
        
    }

    //hello
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
