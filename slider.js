const slider = document.getElementById('slider_list')
const prevButton = document.getElementById('slider_left-arrow')
const nextButton = document.getElementById('slider_right-arrow')

arts = [
    'mountains', 
    'red_beach', 
    'yellow_beach'
]

// const width = 1280
// slider.style.left = width * -1 + 'px'
// let currElem = 0

// for (let i = 0; i < arts.length; i++) {
//     const li = document.createElement('li')
//     li.className = 'slider_item'
//     slider.append(li)
//     li.style.backgroundImage = `url(images/slider/${arts[i]}.jpg)`
// }


// const initSlider = () => {
//     slider.innerHTML = ''
//     if (currElem > arts.length-1) currElem = 0
//     else if (currElem < 0) currElem = arts.length-1
//     const li = document.createElement('li')
//     li.className = 'slider_item'
//     slider.append(li)
    // li.style.backgroundImage = `url(images/slider/${arts[currElem]}.jpg)`
    // prevElem()
    // nextElem()
// }

// const prevElem = () => {
//     let nextElem = currElem-1
//     if (nextElem < 0) nextElem = arts.length - 1
//     const li = document.createElement('li')
//     li.className = 'slider_item'
//     slider.prepend(li)
//     li.style.backgroundImage = `url(images/slider/${arts[nextElem]}.jpg)`
// }

// const nextElem = () => {
//     let prevElem = currElem+1
//     if (currElem > arts.length-1) prevElem = 0
//     const li = document.createElement('li')
//     li.className = 'slider_item'
//     slider.append(li)
//     li.style.backgroundImage = `url(images/slider/${arts[prevElem]}.jpg)`
// }

// initSlider()


// prevButton.addEventListener('click', () => {
//     currElem -= 1
//     initSlider()
// })


// nextButton.addEventListener('click', () => {
//     currElem += 1
//     initSlider()
// })
