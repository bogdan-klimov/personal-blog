// Slider
const slider = document.getElementById('slider_list')
const prevButton = document.getElementById('slider_left-arrow')
const nextButton = document.getElementById('slider_right-arrow')
const width = 1280
const sliderTime = 5

const arts = [
    'mountains', 
    'red_beach', 
    'yellow_beach'
]

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

// Quotes slider

const quoteBlock = document.getElementById('side_item-quote')
const quoteSlider = document.getElementById('quote_list')
const quoteButtonsList = document.getElementById('side_quote-list')
const quoteWidth = 310
const quotesLimit = 3 // more than 4 looks terrible

const quotesList = [
    'The first dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The second dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The third dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The fourth dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The fourth dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
]

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