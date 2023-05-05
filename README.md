# Model-View-Controller-Blog

This is the back-end of a shopping website

## Website

[Click here to watch a video demo](https://drive.google.com/file/d/1Fvk_3knhg5utdPcn7OCdCTom6Aj0RylA/view)

## Description

This app is a simple tool for managing an online store. It helps with adding, updating, and removing products, categories, and tags in a database. It uses popular web technologies like Express.js and MySQL to make things work smoothly. The app has an easy-to-use interface for developers to interact with the data and test how it works. Overall, it's a helpful tool for keeping an online store organized and up-to-date.

## Installation

1. Need to install Node.js, MySQL2, Express.js, Sequelize, and Dotenv
2. Creat and .env file with your credentials
3. In command lin, enter "mysql -u root -p", then enter mysql password.
4. Enter "source db/schema.sql;", then quit.
5. Enter "npm run seed", the enter "npm start".

## Table of Contents

- [Website](#website)
- [Description](#description)
- [Installation](#installation)
- [Technology](#technology)
- [Usage](#usage)
- [Image](#image)
- [Code](#code)
- [Learning](#learning)
- [Author](#author)
- [Credits](#credits)
- [Contributing](#Contributing)
- [Questions](#questions)
- [License](#license)

## Technology

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

This back-end app allows you to create, update, delete and get data on products, tags, and categories.

# Image

![Alt Text](/Screenshot%202023-05-05%20at%2012.59.17%20AM.png)

## Code

I wanted to highlight this code snippet because it's really what this app is all about, which is relationships, and we just recently learned this. This code snippet sets up relationships between four models: Product, Category, Tag, and ProductTag. Products belong to a single Category, while Categories can have multiple Products. Products and Tags have a many-to-many relationship, connected through the ProductTag model. The foreign keys for each relationship are specified, and deleting a Category causes associated Products to be removed.

```JavaScript
// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


```

## Learning

- Handling CRUD operations
- Sequelize ORM
- Environment variables and configuration
- API testing with Insomnia
- MVC

## Author

Matthew Gibson

- [Portfolio](https://github.com/ohSweetWampum)
- [LinkedIn](https://www.linkedin.com/in/matthew-gibson-6b9b12237/)
- [Github](https://github.com/ohSweetWampum)

## Credits

- Thanks to Manuel Nunes for helping me fix my database seeding problem
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
