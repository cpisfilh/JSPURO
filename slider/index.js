document.addEventListener("DOMContentLoaded", () => {
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);

  const backbtn = $("#button-back");
  const nextbtn = $("#button-next");
  const container = $(".container");
  const size = $("#size");
  let numeroItem = 1;
  let totalItems = $$(".container > .item-slider").length;

  size.textContent = numeroItem + "/" + totalItems;

  const show = function () {
    //traer el elemento con el número correspondiente y mostrarlo, ocultando los demás
    Array.from(container.children).map((element) => {
      if (!element.classList.contains("item-slider")) return;

      if (element.getAttribute("data-cpslide") == numeroItem) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  };

  const nextImage = function () {
    if (numeroItem == totalItems) {
      numeroItem = 1;
    } else {
      numeroItem++;
    }
    show();
    refreshCount();
  };

  const backImage = function () {
    if (numeroItem == 1) {
      numeroItem = totalItems;
    } else {
      numeroItem--;
    }

    show();
    refreshCount();
  };

  const refreshCount = function () {
    size.textContent = numeroItem + "/" + totalItems;
  };

  nextbtn.addEventListener("click", nextImage);
  backbtn.addEventListener("click", backImage);
});
