const services = require("../services/services");
// RegExpresssion for validation
const regExName = /^[a-zA-Z_\s]+$/;
const regExEmail = /^([\w\.]+)@northeastern\.edu$/;
const regExPassword =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

// Enums
const REQUESTS = {
  GETALL: "getAll",
  CREATE: "create",
  UPDATE: "update",
  DELETE: "delete",
};

async function getAllUser(req, res) {
  try {
    const users = await services.getAllUser();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Create a User
async function createUser(req, res) {
  const { fullName, email, password } = req.body;

  const isFieldvalid = await isFieldValid(REQUESTS.CREATE, req.body, res);
  if (!isFieldvalid) return;

  try {
    await services.createUser(fullName, email, password);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update user
async function updateUser(req, res) {
  const { fullName, email, password } = req.body;

  const isFieldvalid = await isFieldValid(REQUESTS.UPDATE, req.body, res);
  if (!isFieldvalid) return;

  try {
    await services.updateUser(fullName, email, password);
    res.json({ message: "User details updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Delete user
async function deleteUser(req, res) {
  try {
    await services.deleteUserByEmail(req.params.email);

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Login
async function login(req, res) {
  const { email, password } = req.body;
  try {
    await services.login(email, password);
    res.json({ message: "Login successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Util function
async function isFieldValid(requests, { fullName, email, password }, res) {
  if (fullName == undefined || email == undefined || password == undefined) {
    res.status(400).json({ error: "Invalid email or password" });
    return false;
  }

  let errMsgFullName = (errMsgEmail = errMsgPassword = errMsgUserCheck = "");
  errMsgFullName =
    "Invalid fullName. It cannot contains any special character: ";
  errMsgEmail = "Invalid email";
  errMsgPassword = "Invalid password";

  if (!checkFullName(fullName)) {
    res.status(400).json({
      error: errMsgFullName,
    });
    return false;
  } else if (!checkEmail(email)) {
    res.status(400).json({ error: errMsgEmail });
    return false;
  } else if (!checkPassword(password)) {
    res.status(400).json({ error: errMsgPassword });
    return false;
  }

  const user = await services.findUserByEmail(email);
  let userCheck = false;

  switch (requests) {
    case REQUESTS.CREATE:
      userCheck = user != undefined;
      errMsgUserCheck = "User already exist";
      break;
    case REQUESTS.UPDATE:
      userCheck = user == undefined;
      errMsgUserCheck = "User doesn't exist";
      break;
  }

  if (userCheck) {
    res.status(400).json({ error: errMsgUserCheck });
    return false;
  }

  return true;
}

function checkEmail(email) {
  return email.match(regExEmail);
}

function checkPassword(password) {
  return password.match(regExPassword);
}
function checkFullName(fullName) {
  return fullName.match(regExName);
}

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  login,
};
