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