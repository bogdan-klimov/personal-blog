const postsWrapper = document.getElementById('posts')
const postsCount = 4

const renderPosts = (page) => {
    window.scrollTo(0, 0);
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

const loadList = document.getElementById('load_more-list')
const leftArrow = document.getElementById('load_more-left')
const rightArrow = document.getElementById('load_more-right')
const postCollectionLength = Math.ceil(posts.length / postsCount)
let currentPage = 1

renderPosts(currentPage)

const createLoadItem = (idx) => {
    const loadItem = document.createElement('li')
    loadItem.classList.add('load_more-item')
    loadItem.innerText = idx
    loadList.append(loadItem)
}

const setLoadActive = (idx) => {
    for (let i = 0; i < loadItems.length; i++) {
        loadItems[i].classList.remove('active')
    }
    loadItems[idx].classList.add('active')
}

const buttonsControll = () => {
    if (currentPage == 1) leftArrow.classList.add('disabled')
    else leftArrow.classList.remove('disabled')
    if (currentPage == postCollectionLength) rightArrow.classList.add('disabled')
    else rightArrow.classList.remove('disabled')

}

const renderLoadList = () => {
    loadList.innerHTML = ''
    if (postCollectionLength == 1) {
        leftArrow.innerHTML = ''
        rightArrow.innerHTML = ''
    } else if (postCollectionLength > 1 && postCollectionLength < 5) {
        for (let i = 0; i < postCollectionLength; i++) {
            createLoadItem(i+1)
        }
    } else {
        if (currentPage <= 3) {
            for (let i = 0; i < 3; i++) createLoadItem(i+1)
            createLoadItem('...')
            createLoadItem(postCollectionLength)
        } 
        else {
            createLoadItem(1)
            createLoadItem('...')
            createLoadItem(currentPage)
            createLoadItem('...')
            createLoadItem(postCollectionLength)
        }
    }
}

renderLoadList()


const loadItems = document.getElementsByClassName('load_more-item')

loadItems[0].classList.add('active')
leftArrow.classList.add('disabled')

for (let i = 0; i < loadItems.length; i++) {
    loadItems[i].addEventListener('click', () => {
        // if (loadItems[i] == '...') {
            
        // } else {
        currentPage = parseInt(loadItems[i].innerText)
        setLoadActive(i)
        renderPosts(currentPage)
        buttonsControll()
        // }
    })
}

const switchToRight = () => {
    if (currentPage >= postCollectionLength) return
    currentPage += 1
    // renderLoadList()
    setLoadActive(currentPage-1)
    renderPosts(currentPage)
    buttonsControll()
}

const switchToLeft = () => {
    if (currentPage == 1) return
    currentPage -= 1
    // renderLoadList()
    setLoadActive(currentPage-1)
    renderPosts(currentPage)
    buttonsControll()
}

rightArrow.addEventListener('click', switchToRight)
leftArrow.addEventListener('click', switchToLeft)
