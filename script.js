let projeto1 = document.querySelector("#imgproj1")
let projeto2 = document.querySelector("#imgproj2")
let projeto3 = document.querySelector("#imgproj3")
let txtprojeto1 = document.querySelector("#txtproj1")
let txtprojeto2 = document.querySelector("#txtproj2")
let txtprojeto3 = document.querySelector("#txtproj3")
const sobreNos1 = document.querySelector(".sobre-nos-1")
const eventos = ['mouseenter', 'mouseout'] // eventos para as imagens de projeto (do mouse hover)

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

function setImage(url, projeto, elementoTexto, texto, nomeDaFoto) {
    let urlProjetoSrc = url

    if (urlProjetoSrc.includes('error')) {
        projeto.setAttribute('src', `images/${nomeDaFoto}`)
        elementoTexto.innerHTML = texto
    } else {
        projeto.setAttribute('src', 'images/error2.png')
        elementoTexto.innerHTML = `PROJETO EM ANDAMENTO... `
    }
}


eventos.map(evento => {

    projeto1.addEventListener(evento, () => {
        const txtProjeto = `Esse é um projeto onde as <br> barbearias, vão poder marcar <br> e desmarcar, pagar pelo app, <br> mostrar seu serviço em fotos, <br> vídeos, mostrar promoções e <br> etc. `
        setImage(projeto1.src, projeto1, txtprojeto1, txtProjeto, 'FOTO1.svg')
    })

    projeto2.addEventListener(evento, () => {
        const txtProjeto = `Esse é um projeto onde as <br> barbearias, vão poder marcar <br> e desmarcar, pagar pelo app, <br> mostrar seu serviço em fotos, <br> vídeos, mostrar promoções e <br> etc. `
        setImage(projeto2.src, projeto2, txtprojeto2, txtProjeto, 'FOTO2.svg')
    })

    projeto3.addEventListener(evento, () => {
        const txtProjeto = `Esse é um projeto onde as <br> barbearias, vão poder marcar <br> e desmarcar, pagar pelo app, <br> mostrar seu serviço em fotos, <br> vídeos, mostrar promoções e <br> etc. `
        setImage(projeto3.src, projeto3, txtprojeto3, txtProjeto, 'FOTO3.svg')
    })

})

function Click() {
    let element = document.querySelector('.developers');
    element.classList.toggle("active");
}