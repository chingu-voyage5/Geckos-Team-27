const User = require("../models/user");
const bcrypt = require("bcryptjs");
// todo: validateRegister helper fn

const register = async (req, res, next) => {
  // todo: add validation

  const user = await User.findOne({ email: req.body.email }).then(
    async user => {
      // check if exists
      if (user) {
        return res.status(400).json({
          email: "Email already exists."
        });
      } else {
        // add new user
        const date = new Date(); // todo: format date helper fn
        const newUser = new User({
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          password: req.body.password,
          birthmonth: req.body.birthmonth,
          birthday: req.body.birthday,
          birthyear: req.body.birthyear,
          joindate: date
        });
        const password = newUser.password;
        const saltRounds = 10;
        const hashedPassword = await new Promise((resolve, reject) => {
          bcrypt.hash(password, saltRounds, function(err, hash) {
            if (err) reject(err);
            resolve(hash);
          });
        });
        newUser.password = hashedPassword;
        return newUser.save();
      }
    }
  );
  res.json(user);
};

const google_redirect = (req, res) => {
  res.redirect("/dashboard");
};

const logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

module.exports = {
  register,
  google_redirect,
  logout
};
