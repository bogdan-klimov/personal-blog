const popUp = document.getElementById('pop_up')
const images = document.getElementsByClassName('img')
const activeImg = document.getElementById('active_img')
const catalog = document.getElementById('catalog')

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
        popUp.classList.add('active')
        activeImg.src = images[i].src 
        document.documentElement.style.overflow = 'hidden'
    })
}

popUp.addEventListener('click', () => {
    popUp.classList.remove('active')
    document.documentElement.style.overflow = 'unset'
})