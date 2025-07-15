
// controllers/userController.js
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' })

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) return res.status(400).json({ message: 'User already exists' })
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ name, email, phone, password: hashedPassword })
    res.status(201).json({ user, token: generateToken(user._id) })
  } catch (err) {
    next(err)
  }
}

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
    res.status(200).json({ token: generateToken(user._id) })
  } catch (err) {
    next(err)
  }
}

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password').lean()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password')
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updatedUser) return res.status(404).json({ message: 'User not found' })
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
}

exports.deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if (!deletedUser) return res.status(404).json({ message: 'User not found' })
    res.status(200).json({ message: 'User deleted successfully' })
  } catch (err) {
    next(err)
  }
}
