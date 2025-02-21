const urlParams = new URLSearchParams(window.location.search);
const linkParam = urlParams.get('id');

const cover = document.getElementById('cover')
cover.style.backgroundImage = `url(content/images/posts/${posts[linkParam].cover})`

const coverTitle = document.getElementById('cover_title')
coverTitle.innerText = posts[linkParam].title

const leftNavigationButton = document.getElementsByClassName('navigation_button')[0]
const rightNavigationButton = document.getElementsByClassName('navigation_button')[1]

const switchPostLeft = () => {
    window.location.href = `post.html?id=${Number(linkParam)-1}`;
}

const switchPostRight = () => {
    window.location.href = `post.html?id=${Number(linkParam)+1}`;
}

const initNavButtons = () => {
    leftNavigationButton.addEventListener('click', switchPostLeft)
    rightNavigationButton.addEventListener('click', switchPostRight)
    if (Number(linkParam) < 1) {
        leftNavigationButton.classList.add('disabled')
        leftNavigationButton.removeEventListener('click', switchPostLeft)
    }
    if (Number(linkParam) >= posts.length-1) {
        rightNavigationButton.classList.add('disabled')
        rightNavigationButton.removeEventListener('click', switchPostRight)
    }
}

initNavButtons()

const titlesList = []

const createContentElemet = (element, value) => {
    switch (element) {
        case 'h1':
            const h1 = document.createElement('h1')
            h1.innerText = value
            contentWrapper.append(h1)
            titlesList.push([h1, value])
            break
        case 'h2':
            const h2 = document.createElement('h2')
            h2.innerText = value
            contentWrapper.append(h2)
            titlesList.push([h2, value])
            break
        case 'h3':
            const h3 = document.createElement('h3')
            h3.innerText = value
            contentWrapper.append(h3)
            titlesList.push([h3, value])
            break
        case 'h4':
            const h4 = document.createElement('h4')
            h4.innerText = value
            contentWrapper.append(h4)
            titlesList.push([h4, value])
            break
        case 'p':
            const p = document.createElement('p')
            p.innerText = value
            contentWrapper.append(p)
            break
        case 'image':
            const img = document.createElement('img')
            img.classList.add('img')
            img.src = `content/images/posts/${value}`
            contentWrapper.append(img)
            break
    }
} 

const contentWrapper = document.getElementById('content_main')
const contentData = posts[linkParam].content

for (let i = 0; i < contentData.length; i++) {
    const contentObject = contentData[i]
    for (let key in contentObject) {
        if (contentObject.hasOwnProperty(key)) {
          let value = contentObject[key];
          createContentElemet(key, value)
        }
    }
}

const catalogList = document.getElementById('catalog_list')

const createCatalogItem = (name, i) => {
    const li = 
    `
    <li class="catalog_item">
        <a href="#${i}">${name}</a>
    </li>
    `
    catalogList.insertAdjacentHTML('beforeend', li)
}

for (let i = 0; i < titlesList.length; i++) {
    titlesList[i][0].id = i
    createCatalogItem(titlesList[i][1], i)
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