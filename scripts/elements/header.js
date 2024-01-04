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
            <ul class="nav_categories-list" id="nav_categories-list"></ul>
        </li>
        <li class="nav_item">
            <a href="${url}/blog.html">blog</a>
        </li>
        <li class="nav_item">
            <a href="${url}/about.html">about</a>
        </li>
        <li class="nav_item">
            <a href="${url}/contact.html">contact</a>
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
    searchBlock.innerHTML = ''
    searchBlock.classList.remove('active')
})

for (let i = 0; i < categories.length; i++) {
    const li = 
    `
    <li class="categories_item">
        <a class="categories_item-link" href="${url}/blog.html?category=${categories[i]}">
            ${categories[i]}
        </a>
    </li>
    `
    categoriesNav.insertAdjacentHTML('beforeend', li)
}

const searchIcon = document.getElementById('icon_search')
const searchWrapper = document.getElementById('search_wrapper')
const searchInput = document.getElementById('search_input')

searchIcon.addEventListener('click', () => {
    searchWrapper.classList.add('active')
    categoriesField.classList.add('active')
    searchInput.focus()
})

categoriesField.addEventListener('click', () => {
    searchWrapper.classList.remove('active')
    searchBlock.innerHTML = ''
    searchInput.value = ''
})

const searchBlock = document.getElementById('search_block')

const createSearchItem = (id, category, author, data, title) => {
    const li = 
    `
    <li class="search_item">
        <a href="${url}/post.html?id=${id}">
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

searchInput.addEventListener('input', () => {
    searchBlock.innerHTML = ''
    searchBlock.classList.remove('active')
    if (searchInput.value != '') {
        searchSortedPosts = []
        for (let i = 0; i < posts.length; i++) {
            if (posts[i].title.toLowerCase().trim().startsWith(searchInput.value.toLowerCase().trim())) {
                searchSortedPosts.push(posts[i])
            }
        }
        if (searchSortedPosts.length < 4) {
            for (let i = 0; i < posts.length; i++) {
                if (posts[i].category.toLowerCase().trim().includes(searchInput.value.toLowerCase().trim()) 
                && !searchSortedPosts.includes(posts[i])) {
                    searchSortedPosts.push(posts[i])
                } 
                if (searchSortedPosts.length >= 4) break
            }
        }
        if (searchSortedPosts.length == 0) {
            searchBlock.innerText = 'No results found'
            searchBlock.classList.add('active')
        }
        renderSearchItems()
    } 
})

