"use strict";

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}

class StickyText {
    constructor() {
        this.texts = document.querySelectorAll(".o-process__text");
    }

    moveElement(e, diff) {
        // e.style.top = diff+"px";
        if (!e.classList.contains("sticky")) e.classList.add("sticky");
    }

    stopElement(e, diff) {
        //console.log(e);
        if (diff == 0) {
            e.style.top = diff + "px";
            e.style.bottom = "auto";
        } else {
            e.style.top = "auto";
            e.style.bottom = 0;
        }
        if (e.classList.contains("sticky")) e.classList.remove("sticky");
    }

    isInView(windowOffset, headerOffset, headerHeight, contentHeight) {
        let min = headerOffset,
            max = headerHeight - contentHeight - 150,
            diff = windowOffset - min,
            inView = (windowOffset >= min && diff <= max);

        // console.log(windowOffset, min, max, diff);

        if (diff < 0) diff = 0;
        // else if(!inView) diff = max - contentHeight;

        // console.log(diff);

        return [inView, diff];
    }

    sticky(e) {
        let viewport = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (this.texts.length) {
            const windowOffset = window.pageYOffset;
            let header = null,
                headerOffset = 0,
                headerHeight = 0,
                isInView = false,
                contentHeight = 0;

            this.texts.forEach((e, i) => {
                if (viewport <= 1024) this.stopElement(e, 0);
                else {
                    header = e.parentElement;
                    headerOffset = offset(header).top;
                    headerHeight = header.offsetHeight;
                    contentHeight = e.offsetHeight;

                    isInView = this.isInView(windowOffset, headerOffset, headerHeight, contentHeight);

                    if (isInView[0]) this.moveElement(e, isInView[1]);
                    else this.stopElement(e, isInView[1]);
                }
            });
        }
    }

    init() {
        let timer = null;

        window.addEventListener("scroll", (e) => {
            timer = setTimeout(() => {
                this.sticky(e);
                clearTimeout(timer);
            }, 200);

            // clearTimeout(timer);
        });
    }
}

class Vabnicka {
    constructor() {
        this.itemsParent = document.querySelector(".o-vabnicka__items");
        this.items = document.querySelectorAll(".o-vabnicka__item");
        this.leftArrow = document.querySelector(".o-vabnicka__left");
        this.rightArrow = document.querySelector(".o-vabnicka__right");
        this.startBox = document.querySelector(".o-vabnicka__start-box");
        this.back = document.querySelector(".o-vabnicka__back");
        this.actual = 0;
    }

    controlsActive(index = 0) {
        let left = (index - 1 >= 0),
            right = (index + 1 < this.items.length);

        if (left) this.leftArrow.classList.remove("aval");
        else this.leftArrow.classList.add("aval");

        if (right) this.rightArrow.classList.remove("aval");
        else this.rightArrow.classList.add("aval");
    }

    zoom(index = 0) {
        if (index >= 0 && index < this.items.length) {
            let active = this.itemsParent.querySelector(".active") || null;
            if (active) active.classList.remove("active");

            this.items[index].classList.add("active");
            this.actual = index;

            this.controlsActive(index);
        }
        if (index >= 1) this.back.classList.add("active");
        else this.back.classList.remove("active");
    }

    assignEvents() {
        this.items.forEach((v, i) => {
            // console.log(v);
            v.addEventListener("click", e => this.zoom(+v.dataset.index + 1));
        });

        this.leftArrow.addEventListener("click", e => this.zoom(this.actual - 1));
        this.rightArrow.addEventListener("click", e => this.zoom(this.actual + 1));
        this.back.addEventListener("click", e => this.zoom(0));

        this.startBox.addEventListener("click", e => {
            this.startBox.style.display = "none";
            this.zoom(this.actual + 1);
        });
    }

    init() {
        if (this.items.length) {
            this.assignEvents();
            this.controlsActive(this.actual);
        }
    }
}

const App = {
    Main: (bool = true) => {
        if (bool) {
            const stickyText = new StickyText();
            stickyText.init();

            const vabnicka = new Vabnicka();
            vabnicka.init();
            // console.log(stickyText);
        }
    }
}

App.Main();