const User = require("../models/user.model");

// Mongoose CRUD

// Create user
async function createUser(data) {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    console.log("error: creating user", error);
  }
}

// Read users
async function getUsers(filter = {}) {
  try {
    const users = await User.find(filter);
    return users;
  } catch (error) {
    console.log("error: finding users", error);
  }
}

//Read user
async function getUserById(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log("error: finding user", error);
  }
}

async function getUserByEmail(email) {
  try {
    const user = await User.findOne({
      email,
    });
    return user;
  } catch (error) {
    console.log("error: finding user", error);
  }
}

// Update

async function updateUser(id, data) {
  try {
    const user = await User.findOneAndUpdate({ _id: id }, data, {
      new: true
    });
    
    return user;
  } catch (error) {
    console.error("Error updating user", error);
  }
}

async function updateUserEmail(id, email) {
  try {
    const user = await User.findById(id)
    user.email = email;
    await user.save()
    console.log(user)

    return user;
  } catch (error) {
    console.error("Error updating user", error);
  }
}

// DELETE
async function deleteUserById(id) {
  try {
    let user = await User.findByIdAndDelete(id)
    console.log(user)
    if (!user) {
      return false
    }
    return true
  } catch (error) {
    console.error("Error deleting user: ", error)
    return false
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  updateUserEmail,
  deleteUserById,
};
