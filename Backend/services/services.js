const User = require("../models/model.js");
const bcrypt = require("bcrypt");

async function getAllUser() {
  return await User.find();
}

async function createUser(fullName, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    fullName: fullName,
    email: email,
    password: hashedPassword,
  });

  await user.save();
}

async function updateUser(fullName, email, password) {
  const user = await findUserByEmail(email);
  if (!user) {
    throw Error("User not found");
  }
  const hashedpassword = await bcrypt.hash(password, 10);

  await user.updateOne({ fullName: fullName, password: hashedpassword });
}

async function findUserByEmail(email) {
  return await User.findOne({ email: email });
}

async function deleteUserByEmail(email) {
  const user = await User.findOneAndDelete({ email: email });

  if (!user) {
    throw new Error("User not found");
  }
}

async function login(email, password) {
  const user = await findUserByEmail(email);
  if (!user || user.length) {
    throw new Error("User not found");
  }

  const isPassValid = await bcrypt.compare(password, user.password);
  if (!isPassValid) {
    throw new Error("Invalid password");
  }
}

module.exports = {
  getAllUser,
  createUser,
  findUserByEmail,
  updateUser,
  deleteUserByEmail,
  login,
};
