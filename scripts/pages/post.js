const urlParams = new URLSearchParams(window.location.search);
const linkParam = urlParams.get('id');
// console.log(posts[linkParam].content)

const createP = (text) => {
    const p = document.createElement('p')
    p.innerText = text
}














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