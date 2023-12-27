const createPost = (wrapper, category, author, title, p, data) => {
    const post = 
    `<li class="post">
        <div class="post_img post_img_4">
            <div class="post_data">
                ${data}
            </div>
        </div>
        <div class="post_content">
            <span class="post_title">
                ${category}
                <span class="post_by">${author}</span>
            </span>
            <h2 class="post_head">
                ${title}
            </h2>
            <p class="post_text">${p}</p>
            <a class="post_read-more" href="#">Read more</a>
        </div>
    </li>`
    wrapper.insertAdjacentHTML('beforeend', post)
}