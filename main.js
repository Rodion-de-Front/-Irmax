window.addEventListener('scroll', function () {

    let posTop = window.pageYOffset;

    if (posTop == 0) {

        document.querySelector(".menu").style.backgroundColor = "transparent";

    } else {

        document.querySelector(".menu").style.backgroundColor = "#1a1a1a";

    }
});