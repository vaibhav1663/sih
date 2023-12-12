const User = require("../../model/userSchema");

exports.addUser = async (req, res) => {
  const { uid, name, email, age, gender, field, collegeName, degree, year } =
    req.body;
  if (
    !uid ||
    !name ||
    !email ||
    !age ||
    !gender ||
    !field ||
    !collegeName ||
    !degree ||
    !year
  ) {
    return res.status(422).json({ error: "Field cant be empty " });
  }

  try {
    const userExists = await User.findOne({ uid: uid });
    if (userExists) {
      return res.status(422).json({ error: "Email Exists" });
    }

    const user = new User({
      uid,
      name,
      email,
      age,
      gender,
      field,
      collegeName,
      degree,
      year,
    });

    const userRegister = await user.save();
    console.log(userRegister);

    if (userRegister) {
      res.status(201).json({ msg: "Added the user" });
    } else {
      res.status(500).json({ error: "Internal server error " });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
