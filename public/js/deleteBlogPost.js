async function deleteBlogPost(event) {
  event.preventDefault();

  const id = event.target.getAttribute("data-blogpost-id");

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

document.querySelectorAll(".delete-blogpost-btn").forEach((btn) => {
  btn.addEventListener("click", deleteBlogPost);
});
