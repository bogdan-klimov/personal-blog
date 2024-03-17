const aboutTitle = document.getElementById('about_title')
const aboutPreview = document.getElementById('about_preview')
const aboutP = document.getElementById('about_p')
const coverItems = document.getElementsByClassName('about_cover-item')
const aboutContentWrapper = document.getElementById('about_content')

aboutTitle.innerText = aboutMain.title
aboutPreview.style.backgroundImage = `url(content/images/about/${aboutMain.background})`
aboutP.innerText = aboutMain.p

for (let i = 0; i < 3; i++) {
    coverItems[i].style.backgroundImage = `url(content/images/about/${aboutImages[i]})`
}

for (let i = 0; i < aboutContent.length; i++) {
    const p = document.createElement('p')
    p.innerText = aboutContent[i].p
    aboutContentWrapper.appendChild(p)
}