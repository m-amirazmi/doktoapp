const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Admin = require('../models/admin')
const { validateRegister, validateLogin } = require('../helpers/validation')

exports.register = async (req, res) => {
  const { email, password } = req.body

  const validate = validateRegister(req.body)
  if (validate.error) return res.status(400).json({ error: validate.error, message: validate.message })

  const user = await User.findOne({ email })
  if (user) return res.status(400).json({ error: true, message: 'An account with this email already exists.' })

  const salt = await bcrypt.genSalt()
  const passwordHash = await bcrypt.hash(password, salt)
  const newUser = new User({ email, passwordHash })
  const savedAuth = await newUser.save()

  const token = jwt.sign({ user: savedAuth._id }, process.env.JWT_SECRET)
  res.cookie("t", token, { httpOnly: true, secure: true, sameSite: 'none' })
  res.status(201).json({ message: 'OK', token: token })
}

exports.login = async (req, res) => {
  const { email, password } = req.body

  const validate = validateLogin(req.body)
  if (validate.error) return res.status(400).json({ error: validate.error, message: validate.message })

  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ error: true, message: 'Wrong email or password!' })

  let findRole = await Admin.findOne({ _id: user._id })

  const passwordCorrect = await bcrypt.compare(password, user.passwordHash)
  if (!passwordCorrect) return res.status(400).json({ error: true, message: 'Wrong email or password!' })

  const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET)
  res.cookie('role', findRole.role)
  res.cookie("t", token, { httpOnly: true, secure: true, sameSite: 'none' })
  res.status(200).json({ message: 'OK', token: token, user })
}

exports.logout = async (req, res) => {
  res.cookie("t", "", { httpOnly: true, expires: new Date(0) })
  res.status(200).json({ message: 'Successfully logout...' })
}

exports.isLoggedIn = async (req, res) => {
  res.status(200).json({ error: false, message: 'Authenticated', user: req.user })
}