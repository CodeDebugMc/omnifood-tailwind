const d = new Date();
const year = (document.querySelector(".year").innerHTML = d.getFullYear());

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Smooth scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Smooth scroll to links
    if (href !== "href" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

// For sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    // If isIntersecting is false, it means hero section is OUT of view
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    // If isIntersecting is true, it means hero section is IN view
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0, // Trigger as soon as 0% of hero is in the viewport
    rootMargin: "-96px", // Trigger 80px before the hero section ends (to match header height)
  },
);
obs.observe(sectionHeroEl);
