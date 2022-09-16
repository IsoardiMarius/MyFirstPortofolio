const navbar = document.querySelector(".navbar");

const log = () => {
    document.addEventListener('scroll', e => {
        if (window.scrollY < 350) {
            navbar.classList.add("fixed");
            console.log(scrollY);

        } else {
            navbar.classList.remove("fixed");
        }
    });
};

log();