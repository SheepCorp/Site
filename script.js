let projeto1 = document.querySelector("#imgproj1")
let projeto2 = document.querySelector("#imgproj2")
let projeto3 = document.querySelector("#imgproj3")
let txtprojeto1 = document.querySelector("#txtproj1")
let txtprojeto2 = document.querySelector("#txtproj2")
let txtprojeto3 = document.querySelector("#txtproj3")
const sobreNos1 = document.querySelector(".sobre-nos-1")

document.addEventListener('scroll', function(event) {
    if (
        projeto3.getBoundingClientRect().top < window.innerHeight - 300
    ) {
        console.log(projeto3.getBoundingClientRect().top)
        projeto3.classList.add("animate__animated");
        projeto3.classList.add("animate__zoomIn");
        projeto1.classList.add("animate__animated");
        projeto1.classList.add("animate__zoomIn");
        projeto2.classList.add("animate__animated");
        projeto2.classList.add("animate__zoomIn");
    } else {
        projeto3.classList.remove("animate__animated");
        projeto3.classList.remove("animate_zoomIn");
        projeto1.classList.remove("animate__animated");
        projeto1.classList.remove("animate_zoomIn");
        projeto2.classList.remove("animate__animated");
        projeto2.classList.remove("animate_zoomIn");
    }
})

projeto1.addEventListener("click", () => {
    projeto1.setAttribute('src', 'images/error2.png')
    txtprojeto1.innerHTML = `ESSE PROJETO AINDA NÃO ESTÁ DISPONÍVEL. `
})

projeto2.addEventListener("click", () => {
    projeto2.setAttribute('src', 'images/error2.png')
    txtprojeto2.innerHTML = `ESSE PROJETO AINDA NÃO ESTÁ DISPONÍVEL.`
})

projeto3.addEventListener("click", () => {
    projeto3.setAttribute('src', 'images/error2.png')
    txtprojeto3.innerHTML = `ESSE PROJETO AINDA NÃO ESTÁ DISPONÍVEL. `
})