const blog = require("../Model/blogModel");

exports.getAllBlog = async (req, res) => {
  try {
    const fetchAllBlog = await blog.find({ user: req.user._id });
    return res.status(200).json(fetchAllBlog);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

exports.addBlog = async (req, res) => {
  const { title, category, description } = req.body;
  try {
    if (category && title && description) {
      const addBlog = new blog({
        title: title,
        description: description,
        category: category,
        thumbnail: req.file.filename,
        user: req.user._id,
      });

      const savedBlog = await addBlog.save();

      if (savedBlog) {
        const data = [];
        data.push(savedBlog);
        return res
          .status(200)
          .json({ message: "Blog Saved Successfully", data });
      }
    } else {
      return res.status(404).json({ message: "All fields are required" });
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

exports.getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const fetchBlogByUser = await blog.findById(id);
      return res.status(200).json(fetchBlogByUser);
    } else {
      return res.status(404).json({ message: "Invalid Url" });
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const fetchBlog = await blog.findOneAndDelete({ _id: id });
      return res
        .status(200)
        .json({ message: "Deleted Successfully...", fetchBlog });
    } else {
      return res.status(404).json({ message: "Invalid Id" });
    }
  } catch (error) {}
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const data = await blog.findByIdAndUpdate({ _id: id }, { ...req.body });
      return res.status(200).json({ message: "Updated Successfully...", data });
    } else {
      return res.status(404).json({ message: "Blog Not found" });
    }
  } catch (error) {}
};

exports.getAllUsersBlog = async (req, res) => {
  const data = await blog.find();
  return res.status(200).json(data);
};
