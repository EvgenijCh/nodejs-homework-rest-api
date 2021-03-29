const User = require('./schemas/users')

const findByEmail = async (email) => {
  return await User.findOne({ email })
}

const findById = async (id) => {
  return await User.findOne({ _id: id })
}

const create = async ({ name, email, password }) => {
  const user = new User({ name, email, password })
  return await user.save()
}

const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token })
}

const updateAvatar = async (id, avatar, imgIdCloud) => {
  return await User.updateOne({ _id: id }, { avatar, imgIdCloud })
}

module.exports = {
  findByEmail,
  create,
  findById,
  updateToken,
  updateAvatar,
}
