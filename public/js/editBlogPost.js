async function editBlogPost(event) {
  event.preventDefault();

  const id = window.location.pathname.split("/")[2];
  const title = document.querySelector("#blogpost_title").value.trim();
  const content = document.querySelector("#blogpost_content").value.trim();

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
  .querySelector("form.edit-blogpost-form")
  .addEventListener("submit", editBlogPost);
