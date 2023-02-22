{
    const welcome = () => {
        console.log("Cześć! Ten kod jest juz w repozytorium Git.");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            themeName.innerText = "jasny"
        } else {
            themeName.innerText = "ciemny"
        }
    };

    const deleteImage = () => {
        const imageItem = document.querySelector(".js-imageItem");
        imageItem.classList.remove();
    }

    const init = () => {
        const changeBackground = document.querySelector(".js-changeBackground");
        changeBackground.addEventListener("click", toggleBackground);
        const removeImage = document.querySelector(".js-removeImage");
        removeImage.addEventListener("click", deleteImage);
        };

            welcome();

        init();
}