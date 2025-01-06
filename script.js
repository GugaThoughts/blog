document.addEventListener('DOMContentLoaded', (event) => {
    const posts = [
        {
            title: "First Blog Post",
            content: "This is my first blog post.",
            date: "2023-01-01"
        },
        {
            title: "Second Blog Post",
            content: "Another exciting post here!",
            date: "2023-01-02"
        }
    ];

    const blogPostsDiv = document.getElementById('blog-posts');

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <p>${post.content}</p>
        `;
        blogPostsDiv.appendChild(postDiv);
    });
});
