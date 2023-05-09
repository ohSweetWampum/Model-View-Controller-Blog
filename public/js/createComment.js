async function createComment(event) {
  event.preventDefault();

  const comment_content = document.querySelector(
    'textarea[name="description"]'
  ).value;

  const blogpost_id = document.querySelector('input[name="post-id"]').value;

  if (comment_content) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment_content, blogpost_id }),
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
  .querySelector("#add-comment-form")
  .addEventListener("submit", createComment);
