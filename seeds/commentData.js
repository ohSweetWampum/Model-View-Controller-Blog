const { comment } = require("../models");

const commentData = [
  {
    content: "Great post, thanks for sharing!",
    author: "John Doe",
    comment_date: "2023-05-05 09:30:00",
    user_id: 2,
    blogpost_id: 3,
  },
  {
    content: "I found this post really helpful, thanks!",
    author: "Jane Smith",
    comment_date: "2023-05-05 16:45:00",
    user_id: 1,
    blogpost_id: 2,
  },
  {
    content: "This post is spot on, I completely agree!",
    author: "Sara Johnson",
    comment_date: "2023-05-05 11:20:00",
    user_id: 3,
    blogpost_id: 1,
  },
  {
    content: "Thanks for the informative post!",
    author: "David Lee",
    comment_date: "2023-05-05 14:10:00",
    user_id: 4,
    blogpost_id: 4,
  },
  {
    content: "I have a question about this post, can you clarify?",
    author: "Emily Chen",
    comment_date: "2023-05-05 08:00:00",
    user_id: 5,
    blogpost_id: 5,
  },
];

const seedComments = () => comment.bulkCreate(commentData);

module.exports = seedComments;
