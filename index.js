const images = document.querySelectorAll(".page3 img")
const dialog = document.getElementById("dialog")
const dialogImg = document.getElementById("dialogImg")

images.forEach(img => {
    img.addEventListener("click", () => {
        dialogImg.src = img.src
        dialog.showModal()
    })

}
);
dialog.addEventListener("click", () => dialog.close())

