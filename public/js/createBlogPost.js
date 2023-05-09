async function createBlogPost(event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  if (title && content) {
    const response = await fetch("/api/blogposts", {
      method: "POST",
      body: JSON.stringify({
        blogpost_title: title,
        blogpost_content: content,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Something went wrong, failed to create blog post");
    }
  }
}

document.querySelector("#post-form").addEventListener("submit", createBlogPost);
