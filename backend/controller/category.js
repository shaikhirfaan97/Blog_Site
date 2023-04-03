const category = require("../Model/categoryModel");

exports.getAllCategories = async (req, res) => {
  try {
    const getAllCategories = await category.find({});
    return res.status(200).json(getAllCategories);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
exports.addNewCategories = async (req, res) => {
  const { title } = req.body;
  try {
    if (title) {
      const newCategories = new category({ title });
      const savedCategories = newCategories.save();
      if (savedCategories) {
        return res
          .status(200)
          .json({  title });
      }
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
