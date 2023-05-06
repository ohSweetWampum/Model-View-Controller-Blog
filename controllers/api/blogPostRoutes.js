const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// find all categories
// be sure to include its associated Products

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get("/:id", async (req, res) => {
  try {
    const categoryIdData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryIdData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(categoryIdData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const newCategoryData = await Category.create(req.body);

    res.status(200).json(newCategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const updatedCategoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedCategoryData) {
      res.status(200).json(updatedCategoryData);
    } else {
      res.status(404).json({ message: "Category not found" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value

router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: "No Category found with that id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
