const titleBlock = document.getElementById('page-title')
const subTitleBlock = document.getElementById('sub_title')

titleBlock.innerHTML = title
subTitleBlock.innerHTML = subTitle

const navWrapper = document.getElementById('nav')
const navBurger = document.getElementById('burger_nav')

const initSiteNavigation = (parent) => {
    const nav = 
    `
    <ul class="nav_list">
        <li class="nav_item"><a href="index.html">home</a></li>
        <li class="nav_item categories_link">
            categories
            <div class="icon-right-open categories_icon-right-open"></div>
        </li>
        <li class="nav_item"><a href="blog.html">blog</a></li>
        <li class="nav_item"><a href="about.html">about</a></li>
        <li class="nav_item"><a href="contact.html">contact</a></li>
    </ul>
    `
    parent.insertAdjacentHTML('afterbegin', nav)
}

initSiteNavigation(navWrapper)
initSiteNavigation(navBurger)

const categoriesLink = document.getElementsByClassName('categories_link')
const categoriesNav = document.getElementsByClassName('nav_categories-list')
const categoriesNavArrow = document.getElementsByClassName('categories_icon-right-open')
const clickFields = document.getElementsByClassName('click-field')

for (let i = 0; i < categoriesLink.length; i++) {
    categoriesLink[i].addEventListener('click', () => {
        categoriesNav[i].classList.add('active')
        categoriesNavArrow[i].classList.add('active')
        clickFields[i].classList.add('active')
    })
}

for (let i = 0; i < 2; i++) {
    clickFields[i].addEventListener('click', () => {
        for (let i = 0; i < categoriesNavArrow.length; i++) {
            categoriesNavArrow[i].classList.remove('active')
        }
        for (let i = 0; i < categoriesNav.length; i++) {
            categoriesNav[i].classList.remove('active')
        }
        clickFields[i].classList.remove('active')
        searchBlock.innerHTML = ''
        searchBlock.classList.remove('active')
    })
}


for (let j = 0; j < categoriesNav.length; j++) {
    for (let i = 0; i < categories.length; i++) {
        const li = 
        `
        <li class="categories_item">
            <a class="categories_item-link" href="blog.html?category=${categories[i]}">
                ${categories[i]}
            </a>
        </li>
        `
        categoriesNav[j].insertAdjacentHTML('beforeend', li)
    }
}


const searchIcon = document.getElementById('icon_search')
const searchWrapper = document.getElementById('search_wrapper')
const searchWrapperBurger = document.getElementById('search_wrapper-burger')
const searchInput = document.getElementById('search_input')
const searchInputBurger = document.getElementById('search_input-burger')
const searchBlock = document.getElementById('search_block')
const searchBlockBurger = document.getElementById('search_block-burger')


searchIcon.addEventListener('click', () => {
    searchWrapper.classList.add('active')
    clickFields[0].classList.add('active')
    searchInput.focus()
})

for (let i = 0; i < 2; i++) {
    clickFields[i].addEventListener('click', () => {
        searchWrapper.classList.remove('active')
        searchBlock.innerHTML = ''
        searchInput.value = ''
        searchWrapperBurger.classList.remove('active')
        searchBlockBurger.innerHTML = ''
        searchInputBurger.value = ''
    })
}

const createSearchItem = (id, category, author, data, title) => {
    const li = 
    `
    <li class="search_item">
        <a href="post.html?id=${id}">
            <div class="search_header">
                <div class="search_header-wrapper">
                    <div class="search_category">${category}</div>
                    <div class="search_author">${author}</div>
                </div>
                <span class="search_data">${data}</span>
            </div>
            <h2 class="search_title">${title}</h2>
        </a>
    </li>
    `
    searchBlock.insertAdjacentHTML('beforeend', li)
    searchBlockBurger.insertAdjacentHTML('beforeend', li)
}

const maxSearchItems = 4
let searchSortedPosts = posts

const renderSearchItems = () => {
    for (let i = 0; i < Math.min(maxSearchItems, searchSortedPosts.length); i++) {
        createSearchItem(
            searchSortedPosts[i].id,
            searchSortedPosts[i].category,
            searchSortedPosts[i].author,
            searchSortedPosts[i].data,
            searchSortedPosts[i].title,
        )
    }
}

const searchInit = (block, input) => {
    block.innerHTML = ''
    block.classList.remove('active')
    if (input.value != '') {
        searchSortedPosts = []
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].title.toLowerCase().trim().startsWith(input.value.toLowerCase().trim())) {
                searchSortedPosts.push(posts[i])
            }
        }
        if (searchSortedPosts.length < 4) {
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].category.toLowerCase().trim().includes(input.value.toLowerCase().trim()) 
                && !searchSortedPosts.includes(posts[i])) {
                    searchSortedPosts.push(posts[i])
                } 
                if (searchSortedPosts.length >= 4) break
            }
        }
        if (searchSortedPosts.length == 0) {
            block.innerText = 'No results found'
            block.classList.add('active')
        }
        renderSearchItems()
    }
}

searchInput.addEventListener('input', searchInit.bind(null, searchBlock, searchInput))
searchInputBurger.addEventListener('input', 
searchInit.bind(null, searchBlockBurger, searchInputBurger))

const burger = document.getElementById('burger_button')
const burgerMenu = document.getElementById('burger_menu')
const burgerCross = document.getElementById('burger_cross')

burger.addEventListener('click', () => {
    burgerMenu.style.display = 'block'
    document.documentElement.style.overflowY = 'hidden'
})

burgerCross.addEventListener('click', () => {
    burgerMenu.style.display = 'none'
    document.documentElement.style.overflowY = 'auto'
})