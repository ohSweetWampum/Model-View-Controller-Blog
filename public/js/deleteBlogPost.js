async function deleteBlogPost(event) {
  event.preventDefault();

  const id = window.location.pathname.split("/")[3];

  if (id) {
    const response = await fetch(`/api/blogposts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Something went wrong, failed to delete blog post");
    }
  }
}

document
  .querySelector(".delete-blogpost-form")
  .addEventListener("submit", deleteBlogPost);
