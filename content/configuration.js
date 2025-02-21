const icon = ''
const title = 'Life Style Blog'
const subTitle = 'a theme for all life style and travel bloggers!'

const blockOpacity = 0.88 // From 0 to 1
const sliderTime = 5 // Time of slider interval in seconds
const arts = [
    'mountains.jpg',
    'red_beach.jpg',
    'yellow_beach.jpg',
] // Arts for slider

const sortedPostsCount = 4 // Max number of posts in main page
const postsCount = 3 // Number of posts in blog page
const categories = [
    'travel',
    'inspiration',
    'food',
    'photos',
    'fasion',
    'cool places',
] // Existed post categories

const mainCategories = [
    { 
        name: 'travel',
        preview: 'travel.jpg',
    },
    {
        name: 'inspiration',
        preview: 'inspiration.jpg',
    },
    {
        name: 'cool places',
        preview: 'life-style.jpg',
    },
] // 3 categories for main page

const quotesLimit = 3 // More than 4 looks terrible
const quotesList = [
    'The first dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The second dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The third dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The fourth dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
    'The fourth dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.',
] // Quotes for quote block, limited by quotesLimit

const gallery = [
    'gallery_1.jpg',
    'gallery_2.jpg',
    'gallery_3.jpg',
    'gallery_4.jpg',
    'gallery_5.jpg',
    'gallery_6.jpg',
] // Pictures for gallery (I recommend 6)

// About:

const aboutMain = {
    title: 'about us',
    background: 'coffee.jpg',
    p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, illo excepturi consequuntur omnis nisi nostrum dolorem, nihil reiciendis ipsum magni odit quam exercitationem porro quae id facilis quas possimus voluptatem. Odit quis illum modi ad repellendus, pariatur natus?'
}

const aboutContent = [
    {
        p: 'The third dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.'
    },
    {
        p: 'The third dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.'
    },
    {
        p: 'The third dolor sit amet, consectetur adipiscing elit. Morbi vitae ultrices augue. Suspendisse finibus augue nec mi luctus, ac bibendum diam iaculis.'
    }
]

const aboutImages = [
    'road.jpg',
    'sand.jpg', 
    'water.jpg'
]

// Contacts:

const contacts = [
    // Twitter:
    {
        background: 'mountains.jpg',
        link: 'https://twitter.com/',
        text: 'Klimov',
    }, 
    // Instagram:
    {
        background: 'sky.jpg',
        link: 'https://www.instagram.com/',
        text: '@bodya_klimov',
    }, 
    // Linkedin:
    {
        background: 'food.jpg',
        link: 'https://uk.linkedin.com/',
        text: 'Bogdan Klimov',
    },
    // Facebook:
    {
        background: 'home.jpg',
        link: 'https://www.facebook.com/',
        text: 'Bodya Klimov',
    }
]