const User = require("../Model/authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.userRegistration = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (username && email && password) {
      const isUser = await User.findOne({ email });
      if (!isUser) {
        //*Hash Password
        const genSalt = await bcrypt.genSalt(10);
        
        const hashPassword = await bcrypt.hash(password, genSalt);

        const newUser = new User({
          username,
          email,
          password: hashPassword,
        });

        const savedUser = await newUser.save();

        if (savedUser) {
          return res.status(200).json({ message: "User Registerd", newUser });
        }
      } else {
        return res.status(400).json({ message: "Email already registered" });
      }
    } else {
      return res.status(403).json({ message: "all Fields are required" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const isEmail = await User.findOne({ email: email });
      if (isEmail) {
        if (
          isEmail.email === email &&
          (await bcrypt.compare(password, isEmail.password))
        ) {
          //token
          const token = jwt.sign({ userId: isEmail._id }, "secret", {
            expiresIn: "2d",
          });

          return res
            .status(200)
            .json({ message: "Login Successful", token, name: isEmail.username });
        } else {
          return res.status(403).json({ message: "invalid Credentials" });
        }
      } else {
        return res.status(403).json({ message: "email id not found" });
      }
    } else {
      return res.status(403).json({ message: "all fields are required" });
    }
  } catch (error) {}
};
