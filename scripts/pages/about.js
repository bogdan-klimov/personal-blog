const aboutTitle = document.getElementById('about_title')
const aboutPreview = document.getElementById('about_preview')
const aboutP = document.getElementById('about_p')

aboutTitle.innerText = aboutMain.title
aboutPreview.style.backgroundImage = `url(content/images/about/${aboutMain.background})`
aboutP.innerText = aboutMain.p