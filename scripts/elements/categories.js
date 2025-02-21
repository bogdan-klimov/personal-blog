const categoriesCount = []

for (let i = 0; i < categories.length; i++) categoriesCount.push(0)

for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < posts.length; j++) {
        if (categories[i] == posts[j].category) {
            categoriesCount[i] += 1 
        }
    }
}

let currentCategory = 'all'