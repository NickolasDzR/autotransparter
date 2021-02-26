import Glide from "@glidejs/glide";

new Glide(".glide", {
    type: "carousel",
    rewind: true,
    startAt: 3,
    perView: 2.2,
    focusAt: "center",
    animationDuration: 150,
    rewindDuration: 0,
    breakpoints: {
        768: {
            perView: 1.4
        }
    }
}).mount();