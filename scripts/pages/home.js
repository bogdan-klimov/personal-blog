const slider = document.getElementById('slider_list')
const prevButton = document.getElementById('slider_left-arrow')
const nextButton = document.getElementById('slider_right-arrow')
const width = 1280
let currElem = 0
let eventEnabled = true

slider.style.left = width * -1 + 'px'

const frontEl = document.createElement('li')
frontEl.className = 'slider_item'
slider.append(frontEl)
const prevEl = document.createElement('li')
prevEl.className = 'slider_item'
slider.prepend(prevEl)
const nextEl = document.createElement('li')
nextEl.className = 'slider_item'
slider.append(nextEl)


const disableEventForInterval = () => {
    eventEnabled = false
    setTimeout(() => {
        eventEnabled = true
    }, 1000)
}

const initSlider = () => {
    if (!eventEnabled) return
    if (currElem > arts.length-1) currElem = 0
    else if (currElem < 0) currElem = arts.length - 1
    let prevElem = currElem-1
    let nextElem = currElem+1
    if (prevElem > arts.length-1) prevElem = 0
    else if (prevElem < 0) prevElem = arts.length - 1
    if (nextElem > arts.length-1) nextElem = 0
    else if (nextElem < 0) nextElem = arts.length - 1
    frontEl.style.backgroundImage = `url(images/slider/${arts[currElem]}.jpg)`
    prevEl.style.backgroundImage = `url(images/slider/${arts[prevElem]}.jpg)`
    nextEl.style.backgroundImage = `url(images/slider/${arts[nextElem]}.jpg)`
    prevEl.style.filter = "brightness(70%)"
    nextEl.style.filter = "brightness(70%)"
    // prevEl.style.transition = 'background-image 0s ease'
    // nextEl.style.transition = 'background-image 0s ease'
}

initSlider()

let interval

const startSliderInterval = () => {
    interval = setInterval(() => {
        if (!eventEnabled) return
        currElem += 1
        initSlider()
        disableEventForInterval()
    }, sliderTime * 1000)
}

const restartSliderInterval = () => {
    clearInterval(interval)
    startSliderInterval()
}

startSliderInterval()

prevButton.addEventListener('click', () => {
    if (!eventEnabled) return
    currElem -= 1
    initSlider()
    disableEventForInterval()
    restartSliderInterval()
})

nextButton.addEventListener('click', () => {
    if (!eventEnabled) return
    currElem += 1
    initSlider()
    disableEventForInterval()
    restartSliderInterval() 
})

const quoteBlock = document.getElementById('side_item-quote')
const quoteSlider = document.getElementById('quote_list')
const quoteButtonsList = document.getElementById('side_quote-list')
const quoteWidth = 310


if (quotesList.length <= 0 || quotesLimit <= 0) quoteBlock.innerHTML = ''
else {
    for (let i = 0; i < quotesList.length && i < quotesLimit; i++) {
        const quoteItem = document.createElement('li')
        quoteItem.classList.add('quote_list-item')
        quoteItem.innerText = quotesList[i]
        quoteSlider.append(quoteItem)
        if (quotesList.length > 1 && quotesLimit > 1) {
            const quoteButton = document.createElement('li')
            quoteButton.classList.add('side_quote-item')
            quoteButtonsList.append(quoteButton)
        }
    }
}

const quoteButtons = document.getElementsByClassName('side_quote-item')
quoteButtons[0].classList.add('quote_active')

for (let i = 0; i < quoteButtons.length; i++) {
    quoteButtons[i].addEventListener('click', () => {
        quoteSlider.style.left = quoteWidth * i * -1 + 'px'
        for (let j = 0; j < quoteButtons.length; j++) {
            quoteButtons[j].classList.remove('quote_active')
        }
        quoteButtons[i].classList.add('quote_active')
    })
}

const sliderBlockWrapper = document.getElementById('slider_block-wrapper')
const categoriesWrapper = document.getElementById('categories_wrapper')

const renderSliderBlock = (category, title) => {
    const sliderBlock = 
    `
        <div class="slider_block">
            <span class="slider_block-head">
                ${category}
            </span>
            <span class="slider_block-text">
                ${title}
            </span>
            <a class="slider_block-read" href="./pages/post.html">
                Read more
            </a>
        </div>
    `
    sliderBlockWrapper.insertAdjacentHTML('afterbegin', sliderBlock)
}

renderSliderBlock(posts[0].category, posts[0].title)

const createCategory = (name, preview) => {
    const category = 
    `
        <li class="categories_block" style="background-image: url(blog/images/categories/${preview})">
            <div class="categories_hover"></div>
            <span class="categories_text">${name}</span>
        </li>
    `
    categoriesWrapper.insertAdjacentHTML('beforeend', category)
}

for (let i = 0; i < mainCategories.length; i++) {
    createCategory(mainCategories[i].name, mainCategories[i].preview)
}

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const dataConverter = (data) => {
    arr = data.split('.')
    return `${arr[0]} ${months[Number(arr[1])-1]}`
}

const postsWrapper = document.getElementById('posts')

const createPost = (direction, data, category, author, title, p, preview) => {
    let post 
    if (direction % 2 == 0) {
        post = 
        `
        <li class="post">
            <div class="post_img" style="background-image: url(blog/posts/${preview})">
                <div class="post_data">
                    ${dataConverter(data)}
                </div>
                <div class="post_white"></div>
            </div>
            <div class="post_content">
                <span class="post_title">
                    ${category}
                    <span class="post_by">${author}</span>
                </span>
                <h2 class="post_head">${title}</h2>
                <p class="post_text">${p}</p>
                <a class="post_read-more" href="#">
                    Read more
                    <div class="post_read-more_line"></div>
                </a>
            </div>
        </li>
        `
    } else {
        post = 
        `
        <li class="post post_reversed">
            <div class="post_content">
                <span class="post_title">
                    ${category}
                    <span class="post_by">${author}</span>
                </span>
                <h2 class="post_head">${title}</h2>
                <p class="post_text">${p}</p>
                <a class="post_read-more" href="#">
                    Read more
                    <div class="post_read-more_line"></div>
                </a>
            </div>
            <div class="post_img" style="background-image: url(blog/posts/${preview})">
                <div class="post_data">
                    ${dataConverter(data)}
                </div>
                <div class="post_white"></div>
            </div>
        </li>
        `
    }
    postsWrapper.insertAdjacentHTML('beforeend', post)
}

let sortedPosts = posts

const renderPosts = () => {
    postsWrapper.innerHTML = ''
    let borders = 4
    if (sortedPosts.length < borders) borders = sortedPosts.length
    for (let i = 0; i < borders; i++) {
        createPost(
            i,
            sortedPosts[i].data,
            sortedPosts[i].category,
            sortedPosts[i].author,
            sortedPosts[i].title,
            sortedPosts[i].p,
            sortedPosts[i].preview
        )
    }
}

const mainCategoriesBlocks = document.getElementsByClassName('categories_block')
mainCategoriesBlocks[0].classList.add('active')

const sortPosts = (category) => {
    sortedPosts = []
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].category == category) {
            sortedPosts.push(posts[i])
        }
        if (sortedPosts.length >= 4) break
    }
}

for (let i = 0; i < mainCategoriesBlocks.length; i++) {
    mainCategoriesBlocks[i].addEventListener('click', () => {
        for (let j = 0; j < mainCategoriesBlocks.length; j++) {
            mainCategoriesBlocks[j].classList.remove('active')
        }
        mainCategoriesBlocks[i].classList.add('active')
        sortPosts(mainCategoriesBlocks[i].innerText.toLowerCase())
        renderPosts()
    })
}

sortPosts(mainCategoriesBlocks[0].innerText.toLowerCase())
renderPosts()