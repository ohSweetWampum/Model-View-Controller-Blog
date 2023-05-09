# Model-View-Controller-Blog

This is a tech blog

## Website

[Click here to visit deployed site](https://model-view-controller-blog88.herokuapp.com/)

## Description

The Tech Blog project is a CMS-style blogging site designed for developers to publish their blog posts and engage in discussions through commenting on other developers’ posts. The application follows the Model-View-Controller (MVC) paradigm and uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. Users can create an account, log in, create and edit blog posts, leave comments on posts, and delete comments or posts. The application also features automatic logout for inactive users.

## Table of Contents

- [Website](#website)
- [Description](#description)
- [Technology](#technology)
- [Usage](#usage)
- [Demo](#demo)
- [Code](#code)
- [Learning](#learning)
- [Author](#author)
- [Credits](#credits)
- [Contributing](#Contributing)
- [Questions](#questions)
- [License](#license)

## Technology

- Handlebars.js
  [Learn about Handlebars.js](https://handlebarsjs.com/)

- Express.js
  [Learn about Express.js](https://expressjs.com/)

- Node.js
  [Learn about Node.js](https://nodejs.org/en)

- MySQL2
  [Learn about MySQL2](https://www.npmjs.com/package/mysql2)

- Insomnia
  [Learn about Insomnia](https://insomnia.rest/)

- JavaScript
  [Learn about JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- Sequelize
  [Learn about Sequelize](https://sequelize.org/)

- dotenv
  [Learn about dotenv](https://www.npmjs.com/package/dotenv)

- Git
  [Learn about Git](https://git-scm.com/)

## Usage

1. Visit the website.
2. Sign up for an account by creating a username and password.
3. Log in with their account credentials.
4. Create a blog post by clicking on the dashboard option in the navigation, then selecting the "Add a New Post" button and entering a title and contents for their post.
5. View existing blog posts by clicking on the homepage option in the navigation.
6. Comment on existing blog posts by clicking on a post title and entering a comment in the provided form.
7. Delete or update their own blog posts by clicking on the dashboard option in the navigation, then selecting the post they want to modify and using the provided buttons.
8. Log out of the site when finished.

# Demo

![Alt Text](/images/2023-05-09%2018.27.27.gif)

## Code

I want to highlight this code because it demonstrates the use of Handlebars.js in creating a form for users to create a new blog post. Handlebars is a templating engine that allows you to create dynamic HTML templates with embedded JavaScript.In this code, we see that the form is created using HTML and has two fields: a title and a content field. The form also has a submit button that triggers the createBlogPost function in the createBlogPost.js script file.What's interesting about this code is that Handlebars is used to dynamically render the values for the name attributes of the input and textarea fields. This allows the server to access the values submitted by the user using the same name that is defined in the model schema, making it easier to handle form submissions.

```JavaScript
<form class="create-blogpost-form">
  <h2>Create a New Blog Post</h2>
  <label for="blogpost-title">Title:</label>
  <input type="text" id="blogpost-title" name="blogpost_title" required>
  <label for="blogpost-content">Content:</label>
  <textarea id="blogpost-content" name="blogpost_content" required></textarea>
  <button id="create-blogpost" type="submit">Create Blog Post</button>
</form>
<script src="/js/createBlogPost.js"></script>


```

## Learning

- How to use Handlebars.js as a templating engine to render dynamic content on the server side.
- How to use Sequelize as an ORM to interact with a relational database.
- How to create authentication and authorization functionality using the express-session package.
- How to organize your code using the Model-View-Controller (MVC) pattern.
- How to deploy your application to a cloud hosting platform like Heroku.

## Author

Matthew Gibson

- [Portfolio](https://github.com/ohSweetWampum)
- [LinkedIn](https://www.linkedin.com/in/matthew-gibson-6b9b12237/)
- [Github](https://github.com/ohSweetWampum)

## Credits

- Thanks to all the instructors and the in-class examples/activities they provided were especially helpful for this application.

## Contributing

If you would like to contribute, please contact me at [mtgibson888@gmail.com](mailto:mtgibson888@gmail.com)

## Questions

If you have any questions about this application, please contact me at [mtgibson888@gmail.com](mailto:mtgibson888@gmail.com) or check out my [GitHub Profile](https://github.com/ohSweetWampum)

## License

This application is covered by the MIT license

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

```

```
