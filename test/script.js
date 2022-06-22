function ToggleMenu() {
    const nav = document.querySelector('.nav')
    const btn = document.querySelector('.btn-mobile')
    nav.classList.toggle('active')
    btn.classList.toggle('active')
}