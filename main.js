let imagesContainer = document.querySelector(".images")
let images = document.querySelectorAll("img")
let leftArrow = document.getElementById("left-arrow")
let rightArrow = document.getElementById("right-arrow")

let sliding =  setInterval(slide, 5000)

click()

let counter = 0

function slide() {
    images.forEach((img) => {
        width =  img.clientWidth
    })
    counter++
    if (counter === images.length) {
        counter = 0
        imagesContainer.style.transition = "none"
    }else {
        imagesContainer.style.transition = "0.5s ease-in-out"
    }
    imagesContainer.style.transform = `translateX(-${width * counter}px)`
    console.log(counter)
}

function click() {
    leftArrow.addEventListener("click" , () => {
        images.forEach((img) => {
            width =  img.clientWidth
        })
        counter--
        if (counter === -1) {
            counter = images.length - 1
            imagesContainer.style.transition = "none"
        }else {
            imagesContainer.style.transition = "0.5s ease-in-out"
        }
        imagesContainer.style.transform = `translateX(-${width * counter}px)`
        clearInterval(sliding)
        sliding = setInterval(slide, 5000)
    })
    rightArrow.addEventListener("click" , () => {
        images.forEach((img) => {
            width =  img.clientWidth
        })
        counter++
        if (counter === images.length) {
            counter = 0
            imagesContainer.style.transition = "none"
        }else {
            imagesContainer.style.transition = "0.5s ease-in-out"
        }
        imagesContainer.style.transform = `translateX(-${width * counter}px)`
        clearInterval(sliding)
        sliding = setInterval(slide, 5000)
    })
}