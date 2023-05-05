const { blogPost } = require("../models");

const blogPostData = [
  {
    blogpost_title: "The Benefits of Regular Exercise",
    blogpost_content:
      "Regular exercise has been shown to have numerous benefits for both physical and mental health. In this blog post, we'll explore some of these benefits and how you can incorporate exercise into your daily routine.",
    author: "Jane Smith",
    creation_date: "2022-04-23 12:30:00",
    user_id: 1,
  },
  {
    blogpost_title: "How to Build a Successful Business from Scratch",
    blogpost_content:
      "Building a successful business from scratch is no easy feat, but it can be done. In this blog post, we'll share some tips and insights on how you can start and grow a successful business.",
    author: "John Doe",
    creation_date: "2022-05-01 08:45:00",
    user_id: 2,
  },
  {
    blogpost_title: "10 Easy Recipes for a Healthy Diet",
    blogpost_content:
      "Eating a healthy diet is key to maintaining good health. In this blog post, we'll share 10 easy recipes that are both delicious and nutritious, so you can eat well without sacrificing taste.",
    author: "Sara Johnson",
    creation_date: "2022-05-03 15:20:00",
    user_id: 3,
  },
  {
    blogpost_title: "The Importance of Sleep for Mental Health",
    blogpost_content:
      "Getting enough sleep is crucial for both physical and mental health. In this blog post, we'll explore the importance of sleep for mental health and share some tips on how you can improve your sleep habits.",
    author: "David Lee",
    creation_date: "2022-05-04 11:10:00",
    user_id: 4,
  },
  {
    blogpost_title: "The Benefits of Meditation",
    blogpost_content:
      "Meditation has been shown to have numerous benefits for mental health, including reduced stress and anxiety. In this blog post, we'll explore some of the benefits of meditation and share some tips on how you can start a meditation practice.",
    author: "Emily Chen",
    creation_date: "2022-05-05 14:00:00",
    user_id: 5,
  },
];

const seedBlogPosts = () => blogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;
