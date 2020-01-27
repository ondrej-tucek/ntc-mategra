"use strict";

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
            const vabnicka = new Vabnicka();
            vabnicka.init();
        }
    }
}

App.Main();