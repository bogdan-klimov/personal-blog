const slider = document.getElementById('slider_list')
const prevButton = document.getElementById('slider_left-arrow')
const nextButton = document.getElementById('slider_right-arrow')

const arts = ['mountains', 'red_beach', 'yellow_beach']

let currElem = 0
let eventEnabled = true

const width = 1280
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
    prevEl.style.filter = "brightness(70%)"
    // prevEl.style.transition = 'background-image 0s ease'
    nextEl.style.backgroundImage = `url(images/slider/${arts[nextElem]}.jpg)`
    nextEl.style.filter = "brightness(70%)"
    // nextEl.style.transition = 'background-image 0s ease'
}

initSlider()

prevButton.addEventListener('click', () => {
    if (!eventEnabled) return
    currElem -= 1
    initSlider()
    disableEventForInterval()
})

nextButton.addEventListener('click', () => {
    if (!eventEnabled) return
    currElem += 1
    initSlider()
    disableEventForInterval()
})

setInterval(() => {
    if (!eventEnabled) return
    currElem += 1
    initSlider()
    disableEventForInterval()
}, 4000)