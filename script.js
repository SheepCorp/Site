let projeto1 = document.getElementById('imgproj1')
let projeto2 = document.getElementById('imgproj2')
let projeto3 = document.getElementById('imgproj3')
const sobreNos1 = document.querySelector(".sobre-nos-1")

document.addEventListener('scroll', function(event) {
    if (
        projeto3.getBoundingClientRect().top < window.innerHeight - 300
    ) {
        console.log(projeto3.getBoundingClientRect().top)
        projeto3.classList.add("animate__animated");
        projeto3.classList.add("animate__fadeInLeft");
        projeto1.classList.add("animate__animated");
        projeto1.classList.add("animate__fadeInLeft");
        projeto2.classList.add("animate__animated");
        projeto2.classList.add("animate__fadeInLeft");
    } else {
        projeto3.classList.remove("animate__animated");
        projeto3.classList.remove("animate__fadeInLeft");
        projeto1.classList.remove("animate__animated");
        projeto1.classList.remove("animate__fadeInLeft");
        projeto2.classList.remove("animate__animated");
        projeto2.classList.remove("animate__fadeInLeft");
    }
})