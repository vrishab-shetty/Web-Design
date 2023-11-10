const express = require('express')
const router = express.Router()
const User = require('./user')
const bcrypt = require('bcrypt')

// RegExpresssion for validation
const regExName = /^[a-zA-Z_\s]+$/;
const regExEmail = /^([\w\.]+)@northeastern\.edu$/;
const regExPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/


// Geting all users
router.get('/getAll', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Create a new user
router.post('/create', async (req, res) => {
  const {fullName, email, password } = req.body

  if(fullName == undefined || email == undefined || password == undefined) 
    return res.status(400).json({ message: 'Invalid email or password'})

  if(!checkFullName(fullName)) {
    return res.status(400).json({ message: 'Invalid fullName. It cannot contains any special character: '})
  } else if(!checkEmail(email)) {
    return res.status(400).json({ message: 'Invalid email'})
  } else if(!checkPassword(password)) {
    return res.status(400).json({ message: 'Invalid password'})
  }
  
  if(User.findOne({ email: email }) == undefined) {
    return res.status(400).json({message: 'User already exist'})
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = new User({
    "fullName": fullName,
    "email": email,
    "password": hashedPassword
  })

  try {
    await user.save()
    res.status(201).json({ message: 'User created successfully' })
  } catch (err) {
    res.status(400).json({ message: 'Invalid email or password'})
  }
})

// Update user details
router.put('/edit/:email', async (req, res) => {
  const { fullName, password } = req.body;
  
  if(fullName == undefined || password == undefined || password == undefined) 
    return res.status(400).json({ message: 'Invalid email or password'})

  if(!checkFullName(fullName)) {
    return res.status(400).json({ message: 'Invalid fullName. It cannot contains any special character: '})
  } else if(!checkPassword(password)) {
    return res.status(400).json({ message: 'Invalid password'})
  }

  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    await user.updateOne({ fullName: fullName, password: hashedpassword})
    res.json({ message: 'User details updated successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid full name or password' });
  }
})

// Delete a user 
router.delete('/delete/:email', async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ email: req.params.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete user' });
  }
})

function checkEmail(email) {
  return email.match(regExEmail) 
}

function checkPassword(password) {
  return password.match(regExPassword) 
}
function checkFullName(fullName) {
  return fullName.match(regExName) 
}

module.exports = router