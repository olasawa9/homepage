console.log("Cześć!");

let changeBackground = document.querySelector(".js-changeBackground");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");
let removeImage = document.querySelector(".js-removeImage");
let imageItem = document.querySelector(".js-imageItem");

changeBackground.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeName.innerText = "jasny"
    } else {
        themeName.innerText = "ciemny"
    }
})

removeImage.addEventListener("click", () => {
   imageItem.remove();
});