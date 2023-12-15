const slider = document.getElementById('slider_list')

arts = [
    'mountains', 
    'red_beach', 
    'yellow_beach'
]

const width = 1280
slider.style.left = width * -1 + 'px'
let count = 1
let rightImg = 0
let leftImg = arts.length - 1

for (let i = 0; i < arts.length; i++) {
    const li = document.createElement('li')
    li.className = 'slider_item'
    slider.append(li)
    li.style.backgroundImage = `url(images/slider/${arts[i]}.jpg)`
}

const updateSlider = () => {
    count++
    const li = document.createElement('li')
    li.className = 'slider_item'
    slider.append(li)
    li.style.backgroundImage = `url(images/slider/${arts[rightImg]}.jpg)`
    rightImg++
    if (rightImg >= 3) {rightImg = 0}
    slider.style.left = width * count * -1 + 'px'
}

let sliderInterval = setInterval(updateSlider, 6400)

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') clearInterval(sliderInterval)
    else sliderInterval = setInterval(updateSlider, 6400)
});