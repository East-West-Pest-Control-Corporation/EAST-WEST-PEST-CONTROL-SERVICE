const yearEl= document.querySelector(".year");
const currentYear= new Date().getFullYear();
yearEl.textContent= currentYear;


const mainNavEl= document.querySelector(".mob-nav")
const headerEl= document.querySelector(".header");
mainNavEl.addEventListener("click", function(){
  headerEl.classList.toggle("nav-open");
});


const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

const sectionHeroEl=document.querySelector(".first-section");
const obs= new IntersectionObserver(
  function(entries){
    const ent=entries[0];
    console.log(ent);
    if(ent.isIntersecting === false){
      document.body.classList.add("sticky");
    }
    if(ent.isIntersecting===true){
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold:0,
    rootMargin:"-80px",
  }
);
obs.observe(sectionHeroEl);
