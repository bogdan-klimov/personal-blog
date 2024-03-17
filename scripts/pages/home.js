const slider = document.getElementById('slider_list')
const prevButton = document.getElementById('slider_left-arrow')
const nextButton = document.getElementById('slider_right-arrow')
let eventEnabled = true
let currElem = 0

const frontEl = document.createElement('li')
frontEl.className = 'slider_item'
slider.append(frontEl)
const prevEl = document.createElement('li')
prevEl.className = 'slider_item'
slider.prepend(prevEl)
const nextEl = document.createElement('li')
nextEl.className = 'slider_item'
slider.append(nextEl)

const width = document.getElementsByClassName('slider_item')[0].offsetWidth
slider.style.left = width * -1 + 'px'

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
    frontEl.style.backgroundImage = `url(content/images/slider/${arts[currElem]})`
    prevEl.style.backgroundImage = `url(content/images/slider/${arts[prevElem]})`
    nextEl.style.backgroundImage = `url(content/images/slider/${arts[nextElem]})`
    prevEl.style.filter = "brightness(70%)"
    nextEl.style.filter = "brightness(70%)"
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

const renderSliderBlock = (id) => {
    const sliderBlock = 
    `
        <div class="slider_block">
            <div class="slider_block-bg" style="opacity: ${blockOpacity}"></div>
            <span class="slider_block-head">
                ${posts[id].category}
            </span>
            <span class="slider_block-text">
                ${posts[id].title}
            </span>
            <a class="slider_block-read" href="post.html?id=${0}">
                Read more
            </a>
        </div>
    `
    sliderBlockWrapper.insertAdjacentHTML('afterbegin', sliderBlock)
}

renderSliderBlock(0)

const createCategory = (name, preview) => {
    const category = 
    `
        <li class="categories_block" style="background-image: url(content/images/categories/${preview})">
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

const createPost = (data, category, author, title, description, preview, id, i) => {
    let post 
    if (i % 2 == 0) {
        post = 
        `
        <li class="post">
            <div class="post_img" style="background-image: url(content/images/posts/${preview})">
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
                <p class="post_text">${description}</p>
                <a class="post_read-more" href="post.html?id=${id}">
                    Read more
                    <div class="post_read-more_line"></div>
                </a>
                <div class="block-read_wrapper">
                    <a class="post_read-more-btn" href="post.html?id=${id}">Read more</a>
                </div>
            </div>
        </li>
        `
    } else {
        post = 
        `
        <li class="post post_reversed">
            <div class="post_content">
                <span class="post_title">
                    <span class="post_by">${author}</span>
                    ${category}
                </span>
                <h2 class="post_head">${title}</h2>
                <p class="post_text">${description}</p>
                <a class="post_read-more" href="post.html?id=${id}">
                    Read more
                    <div class="post_read-more_line"></div>
                </a>
                <div class="block-read_wrapper">
                    <a class="post_read-more-btn" href="post.html?id=${id}">Read more</a>
                </div>
            </div>
            <div class="post_img" style="background-image: url(content/images/posts/${preview})">
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
    let borders = sortedPostsCount
    if (sortedPosts.length < sortedPostsCount) borders = sortedPosts.length 
    for (let i = 0; i < borders; i++) {
        createPost(
            sortedPosts[i].data,
            sortedPosts[i].category,
            sortedPosts[i].author,
            sortedPosts[i].title,
            sortedPosts[i].description,
            sortedPosts[i].preview,
            sortedPosts[i].id,
            i,
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
        if (sortedPosts.length >= sortedPostsCount) break
    }
    renderPosts()
}

for (let i = 0; i < mainCategoriesBlocks.length; i++) {
    mainCategoriesBlocks[i].addEventListener('click', () => {
        for (let j = 0; j < mainCategoriesBlocks.length; j++) {
            mainCategoriesBlocks[j].classList.remove('active')
        }
        mainCategoriesBlocks[i].classList.add('active')
        sortPosts(mainCategoriesBlocks[i].innerText.toLowerCase())
    })
}

sortPosts(mainCategoriesBlocks[0].innerText.toLowerCase())
const sideCategoriesWrapper = document.getElementById('categories_list')

const createSideCategory = (name, count) => {
    const category = 
    `
    <li class="categories_list-item">
        <a href="blog.html?category=${name}" class="categories_list-link">
            ${name}
            <span class="categories_count">${count}</span>
        </a>
    </li>
    `
    sideCategoriesWrapper.insertAdjacentHTML('beforeend', category)
}

for (let i = 0; i < categories.length; i++) {
    createSideCategory(categories[i], categoriesCount[i])
}

const categoriesList = document.getElementsByClassName('categories_list-item')

for (let i = 0; i < categoriesList.length; i++) {
    categoriesList[i].addEventListener('click', () => {
        currentCategory = categories[i]
    })
}

const galleryWrapper = document.getElementById('gallery')

for (let i = 0; i < gallery.length; i++) {
    const li = document.createElement('li')
    li.classList.add('gallery_item')
    li.style.backgroundImage = `url(content/images/gallery/${gallery[i]})`
    galleryWrapper.append(li)
}

const gallerySlider = document.getElementById('gallery_slider')
const galleryLeft = document.getElementById('gallery_left-arrow')
const galleryRight = document.getElementById('gallery_right-arrow')
let sliderPosition = 0
let sliderIndex = 0

const renderGallery = (imagesInSlider) => {
    gallerySlider.innerHTML = ''
    const imagesWidth = window.innerWidth * (1 / imagesInSlider) 
    for (let i = 0; i < gallery.length; i++) {
        const li = document.createElement('li')
        li.classList.add('gallery_slider-item')
        li.style.backgroundImage = `url(content/images/gallery/${gallery[i]})`
        li.style.width = imagesWidth + 'px'
        gallerySlider.append(li)
    }
    galleryLeft.addEventListener('click', () => {
        if (sliderIndex == 0) {
            sliderPosition = imagesWidth * (gallery.length-imagesInSlider) * -1
            sliderIndex = gallery.length - imagesInSlider
            gallerySlider.style.left = sliderPosition + 'px'
            return
        }
        sliderIndex--
        sliderPosition += imagesWidth
        gallerySlider.style.left = sliderPosition + 'px'
    })
    galleryRight.addEventListener('click', () => {
        if (sliderIndex >= gallery.length-imagesInSlider) {
            sliderPosition = 0
            sliderIndex = 0
            gallerySlider.style.left = sliderPosition + 'px'
            return
        }
        sliderIndex++
        sliderPosition -= imagesWidth
        gallerySlider.style.left = sliderPosition + 'px'
    })
}

if (window.innerWidth < 1240 && window.innerWidth >= 1020) renderGallery(4)
else if (window.innerWidth < 1020 && window.innerWidth >= 800) renderGallery(3)
else if (window.innerWidth < 800 && window.innerWidth >= 600) renderGallery(2)
else if (window.innerWidth < 600) renderGallery(1)

const categoriesElement = document.getElementById('categories_element')
const categoriesElementButton = document.getElementById('categories_element-wrapper')
const categoriesElementDropDown = document.getElementById('categories_element-select')
const clickField = clickFields[0]
const categoriesElementArrow = document.getElementById('categories_element-icon-right-open')
const categoriesElementText = document.getElementById('categories_element-text')

const generateOptions = (category) => {
    const option = document.createElement('li')
    option.classList.add('categories_element-option')
    option.innerText = category
    categoriesElementDropDown.append(option)
}

categoriesElementText.innerText = mainCategories[0].name
categoriesElement.style.backgroundImage = `url(content/images/categories/${mainCategories[0].preview})`
sortPosts(mainCategories[0].name)

for (let i = 1; i < mainCategories.length; i++) {
    generateOptions(mainCategories[i].name)
}

const categoriesOptions = document.getElementsByClassName('categories_element-option')

const setSelectedCategory = (category) => {
    categoriesElementText.innerText = category
    const options = []
    let currCategory
    for (let i = 0; i < mainCategories.length; i++) {
        if (category != mainCategories[i].name) {
            options.push(mainCategories[i])
        } else currCategory = mainCategories[i]
    }
    for (let i = 0; i < options.length; i++) {
        categoriesOptions[i].innerText = options[i].name
        categoriesElement.style.backgroundImage = `url(content/images/categories/${currCategory.preview})`
    }
    sortPosts(category)
}

categoriesElementButton.addEventListener('click', () => {
    categoriesElementDropDown.style.display = 'block'
    clickField.classList.add('active')
    categoriesElementArrow.classList.add('active')
})

clickField.addEventListener('click', () => {
    categoriesElementArrow.classList.remove('active')
    categoriesElementDropDown.style.display = 'none'
})

for (let i = 0; i < 2; i++) {
    categoriesOptions[i].addEventListener('click', () => {
        categoriesElementArrow.classList.remove('active')
        categoriesElementDropDown.style.display = 'none'
        clickField.classList.remove('active')
        setSelectedCategory(categoriesOptions[i].innerText.toLowerCase())
    })
}

const socialList = document.getElementsByClassName('social_list-href')
for (let i = 0; i < 4; i++) socialList[i].href = contacts[i].link

const sideAboutImage = document.getElementById('side_about-image')
sideAboutImage.style.backgroundImage = `url(content/images/about/${aboutImages[0]})`

const sideAboutTxt = document.getElementById('side_about-text')
sideAboutTxt.innerText = aboutMain.p