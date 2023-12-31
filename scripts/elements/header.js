const titleBlock = document.getElementById('page-title')
const subTitleBlock = document.getElementById('sub_title')

titleBlock.innerHTML = title
subTitleBlock.innerHTML = subTitle

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
    const li = document.createElement('li')
    li.classList.add('categories_item')
    li.innerText = categories[i]
    categoriesNav.append(li)
}