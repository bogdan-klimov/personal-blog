const postsCount = 4
const postsWrapper = document.getElementById('posts')
const loadList = document.getElementById('load_more-list')
const leftArrow = document.getElementById('load_more-left')
const rightArrow = document.getElementById('load_more-right')
const postCollectionLength = Math.ceil(posts.length / postsCount)
let extraLoadItems = []
let loadActiveFlag = true
let currentPage = 1
let loadActiveCount = 1
let loadActiveEnd = 1

const renderPosts = (page) => {
    window.scrollTo(0, 0)
    postsWrapper.innerHTML = ''
    for (let i = 0 + postsCount*(page-1); i < postsCount*page; i++) {
        createPost(
            postsWrapper, 
            posts[i].category, 
            posts[i].author, 
            posts[i].title, 
            posts[i].p, 
            posts[i].data 
        )
        if (i + 1 == posts.length) break
    }    
}

renderPosts(currentPage)

const createLoadItem = (idx) => {
    const loadItem = document.createElement('li')
    loadItem.classList.add('load_more-item')
    loadItem.innerText = idx
    loadList.append(loadItem)
}

const setLoadActive = (idx) => {
    for (let i = 0; i < loadItems.length; i++) {loadItems[i].classList.remove('active')}
    loadItems[idx].classList.add('active')
}

const buttonsControll = () => {
    if (currentPage == 1) leftArrow.classList.add('disabled')
    else leftArrow.classList.remove('disabled')
    if (currentPage == postCollectionLength) rightArrow.classList.add('disabled')
    else rightArrow.classList.remove('disabled')
}

const renderExtraLoad = () => {
    extraLoadItems = []
    for (let i = 0; i < loadItems.length; i++) {
        if (loadItems[i].innerText == '...') {
            extraLoadItems.push(loadItems[i])
        }
    }
    for (let i = 0; i < extraLoadItems.length; i++) {
        extraLoadItems[i].addEventListener('click', () => {
            const input = document.createElement('input')
            input.classList.add('load_more-input')
            extraLoadItems[i].innerHTML = ''
            extraLoadItems[i].append(input)
            input.focus()
            input.addEventListener("focusout", () => {
                extraLoadItems[i].innerHTML = '...'
            });
            input.addEventListener('keydown', (e) => {
                if (e.key == 'Enter') {
                    if (input.value > 1 && input.value < postCollectionLength) {
                        inputValue = Number(input.value)
                        currentPage = inputValue
                        initLoad()
                        if (inputValue == 1) {
                            setLoadActive(0)
                        } else if (inputValue == 2) {
                            setLoadActive(1)
                        } else if (inputValue == 3) {
                            setLoadActive(2)  
                        } else if (inputValue + 2 == postCollectionLength) {
                            setLoadActive(2)
                            loadActiveEnd = 2
                        } else if (inputValue + 1 == postCollectionLength) {
                            setLoadActive(3)
                            loadActiveEnd = 3
                        } else if (inputValue == postCollectionLength) {
                            setLoadActive(4)
                            loadActiveEnd = 4
                        }
                    }
                }
            })
        })
    }
}

const renderLoadList = () => {
    loadActiveFlag = true
    loadList.innerHTML = ''
    if (postCollectionLength == 1) {
        leftArrow.innerHTML = ''
        rightArrow.innerHTML = ''
    } else if (postCollectionLength > 1 && postCollectionLength < 6) {
        for (let i = 0; i < postCollectionLength; i++) {
            createLoadItem(i+1)
        }
    } else {
        if (currentPage <= 3) {
            for (let i = 0; i < 3; i++) createLoadItem(i+1)
            createLoadItem('...')
            createLoadItem(postCollectionLength)
            
        } else if (currentPage >= postCollectionLength-2) {
            loadActiveFlag = 'end'
            createLoadItem(1)
            createLoadItem('...')
            for (let i = postCollectionLength-3; i < postCollectionLength; i++) {
                createLoadItem(i+1)
            }
        }
        else {
            loadActiveEnd = 1
            loadActiveFlag = false
            createLoadItem(1)
            createLoadItem('...')
            createLoadItem(currentPage)
            setLoadActive(2)
            createLoadItem('...')
            createLoadItem(postCollectionLength)
        }
    }
}

renderLoadList()

const loadItems = document.getElementsByClassName('load_more-item')

renderExtraLoad()

loadItems[0].classList.add('active')
leftArrow.classList.add('disabled')

const initLoad = () => {
    renderLoadList()
    renderExtraLoad()
    setLoadItems()
    renderPosts(currentPage)
    buttonsControll()
}

const setLoadItems = () => {
    for (let i = 0; i < loadItems.length; i++) {
        loadItems[i].addEventListener('click', () => {
            if (Number(loadItems[i].innerText)) {
                loadActiveEnd = i
                currentPage = Number(loadItems[i].innerText)
                initLoad()
                setLoadActive(i)
            } 
        })
    }
}

setLoadItems()

const switchToRight = () => {
    if (currentPage >= postCollectionLength) return
    currentPage += 1
    initLoad()
    if (loadActiveFlag == 'end') {
        loadActiveEnd += 1
        setLoadActive(loadActiveEnd)
    } else if (loadActiveFlag) {
        setLoadActive(currentPage-1)
    }
}

const switchToLeft = () => {
    if (currentPage == 1) return
    currentPage -= 1
    initLoad()
    if (loadActiveFlag == 'end') {
        loadActiveEnd -= 1
        setLoadActive(loadActiveEnd)
    } else if (loadActiveFlag) {
        setLoadActive(currentPage-1)
    }
}

rightArrow.addEventListener('click', switchToRight)
leftArrow.addEventListener('click', switchToLeft)