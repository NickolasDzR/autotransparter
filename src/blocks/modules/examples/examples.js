import Glide from "@glidejs/glide";
import { siblings } from "@glidejs/glide/src/utils/dom";

const CustomActiveClass = function (Glide, Components, Events) {
    var Component = {
        mount() {
            this.changeActiveSlide();
        },

        changeActiveSlide() {
            let slide = Components.Html.slides[Glide.index];
            slide.classList.remove("is-next", "is-prev");
            slide.classList.add("is-active");

            siblings(slide).forEach((sibling) => {
                sibling.classList.remove("is-active", "is-next", "is-prev");
            });

            if(slide.nextElementSibling) {
                slide.nextElementSibling.classList.add("is-next");
            }

            if(slide.previousElementSibling) {
                slide.previousElementSibling.classList.add("is-prev");
            }
        },
    };

    Events.on("run", () => {
        Component.changeActiveSlide();
    });

    return Component;
};

new Glide(".glide", {
    type: "carousel",
    rewind: true,
    startAt: 3,
    perView: 2.2,
    focusAt: "center",
    animationDuration: 500,
    rewindDuration: 0,
    breakpoints: {
        768: {
            perView: 1.4
        }
    }
}).mount({
    "CustomActiveClass": CustomActiveClass,
});