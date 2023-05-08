async function createBlogPost(event) {
  event.preventDefault();

  const title = document.querySelector("#blogpost-title").value.trim();
  const content = document.querySelector("#blogpost-content").value.trim();

  if (title && content) {
    const response = await fetch("/api/blogposts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Something went wrong, failed to create blog post");
    }
  }
}

document
  .querySelector("#create-blogpost-form")
  .addEventListener("submit", createBlogPost);
