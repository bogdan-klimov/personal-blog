const titleBlock = document.getElementById('page-title')
const subTitleBlock = document.getElementById('sub_title')

titleBlock.innerHTML = title
subTitleBlock.innerHTML = subTitle


const navWrapper = document.getElementById('nav')
const initSiteNavigation = () => {
    const nav = 
    `
    <ul class="nav_list">
        <li class="nav_item">
            <a href="${url}">home</a>
        </li>
        <li class="nav_item" id="categories_link">
            categories
            <div class="icon-right-open" id="categories_icon-right-open"></div>
        </li>
        <ul class="nav_categories-list" id="nav_categories-list"></ul>
        <li class="nav_item">
            <a href="${url}/pages/blog.html">blog</a>
        </li>
        <li class="nav_item">
            <a href="./../../pages/about/about.html">about</a>
        </li>
        <li class="nav_item">
            <a href="#">contact</a>
        </li>
    </ul>
    `
    navWrapper.insertAdjacentHTML('afterbegin', nav)
}

initSiteNavigation()

const categoriesLink = document.getElementById('categories_link')
const categoriesNav = document.getElementById('nav_categories-list')
const categoriesNavArrow = document.getElementById('categories_icon-right-open')
const categoriesField = document.getElementById('categories_click-field')

categoriesLink.addEventListener('click', () => {
    categoriesNav.classList.toggle('active')
    categoriesNavArrow.classList.toggle('active')
    categoriesField.classList.add('active')
})

categoriesField.addEventListener('click', () => {
    categoriesField.classList.remove('active')
    categoriesNav.classList.remove('active')
    categoriesNavArrow.classList.remove('active')
})

for (let i = 0; i < categories.length; i++) {
    const li = 
    `
    <li>
        <a class="categories_item" href="${url}/pages/blog.html?category=${categories[i]}">
            ${categories[i]}
        </a>
    </li>
    `
    categoriesNav.insertAdjacentHTML('beforeend', li)
}