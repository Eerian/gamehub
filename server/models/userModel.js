const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})
//create a static signup method
userSchema.statics.signup = async function (username, email, password) {
  //validation
  if (!username || !email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const userNameExists = await this.findOne({ username })
  const emailExists = await this.findOne({ email })

  if (userNameExists) {
    throw Error('Username already in use')
  }
  if (emailExists) {
    throw Error('Email already in use')
  }
  const user = await this.create({ username, email, password })

  return user
}

//create a static login method
userSchema.statics.login = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Incorrect Email')
  }

  const passwordMatch = password === user.password
  if (!passwordMatch) {
    throw Error('Incorrect Password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)
