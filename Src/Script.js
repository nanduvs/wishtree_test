const navbarbg = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.remove("h-12");
    navbar.classList.add("bg-black/80"); 
    navbar.classList.add("h-28"); 
    
  } else {
    navbar.classList.remove("bg-black/80");
    navbar.classList.remove("h-28");
    navbar.classList.add("bg-transparent"); 
    navbar.classList.add("h-12"); 
  }
});

const navFixed = document.getElementById("navContainer");
window.addEventListener("scroll", () => {
    if(window.scrollY > 5) {
        navFixed.classList.remove("top-[41px]");
        navFixed.classList.add("top-0");
    }else {
        navFixed.classList.remove("top-0");
        navFixed.classList.add("top-[41px]"); 
    }
})

const navbar = document.getElementById("navbar");
navbar.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  }
});

