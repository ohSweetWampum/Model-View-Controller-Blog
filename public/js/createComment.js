async function createComment(event) {
  event.preventDefault();

  const content = document.querySelector("#comment-content").value.trim();
  const blogPostId = document.querySelector("#comment-blogpost-id").value;

  if (content) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ content, blogPostId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Something went wrong, failed to create comment");
    }
  }
}

document
  .querySelector("#create-comment-form")
  .addEventListener("submit", createComment);
