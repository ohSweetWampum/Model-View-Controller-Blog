const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "Great post, thanks for sharing!",
    username: "John Doe",
    creation_date: "2023-05-05 09:30:00",
    user_id: 2,
    blogpost_id: 3,
  },
  {
    comment_content: "I found this post really helpful, thanks!",
    username: "Jane Smith",
    creation_date: "2023-05-05 16:45:00",
    user_id: 1,
    blogpost_id: 2,
  },
  {
    comment_content: "This post is spot on, I completely agree!",
    username: "Sara Johnson",
    creation_date: "2023-05-05 11:20:00",
    user_id: 3,
    blogpost_id: 1,
  },
  {
    comment_content: "Thanks for the informative post!",
    username: "David Lee",
    creation_date: "2023-05-05 14:10:00",
    user_id: 4,
    blogpost_id: 4,
  },
  {
    comment_content: "I have a question about this post, can you clarify?",
    username: "Emily Chen",
    creation_date: "2023-05-05 08:00:00",
    user_id: 5,
    blogpost_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
