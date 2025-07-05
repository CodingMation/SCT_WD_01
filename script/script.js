window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const color = "#5ac082";
    if (window.scrollY > 500) {
        header.classList.add(`bg-[${color}]`, "shadow-lg");
        header.classList.remove("bg-gray-300");
    } else {
        header.classList.add("bg-gray-300");
        header.classList.remove(`bg-[${color}]`, "shadow-lg");
    }
});