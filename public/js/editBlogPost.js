async function editBlogPost(event) {
  event.preventDefault();

  const id = event.target.getAttribute("data-blogpost-id");
  const title = document.querySelector("#edit-blogpost-title").value.trim();
  const content = document.querySelector("#edit-blogpost-content").value.trim();

  if (id && title && content) {
    const response = await fetch(`/api/blogposts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Something went wrong, failed to edit blog post");
    }
  }
}

document
  .querySelector("#edit-blogpost-form")
  .addEventListener("submit", editBlogPost);
