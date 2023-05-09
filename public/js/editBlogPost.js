async function editBlogPost(event) {
  event.preventDefault();

  const id = window.location.pathname.split("/")[2];
  const blogpost_title = document.querySelector("#blogpost_title").value.trim();
  const blogpost_content = document
    .querySelector("#blogpost_content")
    .value.trim();

  if (id && blogpost_title && blogpost_content) {
    const response = await fetch(`/api/blogposts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ blogpost_title, blogpost_content }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

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
