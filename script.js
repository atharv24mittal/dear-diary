// script.js
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("blogForm")) {
        document.getElementById("blogForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;
            
            // Store the blog post in local storage (for simplicity)
            const blogPost = {
                title,
                content,
            };

            // Generate a unique key for each blog post
            const postId = Date.now().toString();

            // Save the blog post in local storage with the key as postId
            localStorage.setItem(postId, JSON.stringify(blogPost));

            // Clear the form
            document.getElementById("title").value = "";
            document.getElementById("content").value = "";
        });
    }

    if (document.getElementById("blogs")) {
        const blogsContainer = document.getElementById("blogs");

        // Retrieve and display blog posts from local storage
        for (let i = 0; i < localStorage.length; i++) {
            const postId = localStorage.key(i);
            const blogPost = JSON.parse(localStorage.getItem(postId));

            const blogDiv = document.createElement("div");
            blogDiv.classList.add("blog-post");

            const blogTitle = document.createElement("h2");
            blogTitle.textContent = blogPost.title;

            const blogContent = document.createElement("p1");
            blogContent.textContent = blogPost.content;
            
            blogDiv.appendChild(blogTitle);
            blogDiv.appendChild(blogContent);

            blogsContainer.appendChild(blogDiv);
        }
    }
});
