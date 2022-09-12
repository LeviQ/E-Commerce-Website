const header = document.querySelector("header");
const sectionone = document.querySelector("first-page")

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
  entries, sectionOneObserver
) {

  entries.forEach(entry => {
    if( !entry.isIntersecting){
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionone);
