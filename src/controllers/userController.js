const { UserRepo } = require('../repositories');
const db = require('../models');

const { cloudinary } = require('../services/cloudinary');

const { DEFAULT_PROFILE_IMAGE } = require('../utils/defaults');

async function signUp(req, res, next) {
  const { email, _id, provider } = req.user;
  const userName = req.user.userName ? req.user.userName : req.body.userName;
  const profilePicture = req.body.profilePicture || DEFAULT_PROFILE_IMAGE;
  try {
    const foundUser = await UserRepo.findOne({ email: email });

    if (foundUser.error) res.status(400).send({ message: 'User not found' });

    if (foundUser.data) {
      return res.status(200).send({
        user: {
          email: foundUser.data.email,
          userName: foundUser.data.userName,
          profilePicture: foundUser.data.profilePicture,
          auth_provider: provider,
        },
        success: 'User logged',
      });
    }

    const newUser = await UserRepo.create({
      _id: _id,
      email: email,
      userName: userName,
      profilePicture: profilePicture,
    });

    res.status(201).send({
      success: 'User registered',
      user: {
        email: newUser.data.email,
        userName: newUser.data.userName,
        profilePicture: newUser.data.profilePicture,
        auth_provider: provider,
      },
    });
  } catch (err) {
    next(err);
  }
}

async function signOut(req, res, next) {
  try {
    res.status(200).send({ success: 'User logged out' });
  } catch (err) {
    next(err);
  }
}

async function updateAvatar(req, res, next) {
  const { _id } = req.user;

  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const profilePicture = result.secure_url;

    const foundUser = await db.User.findOneAndUpdate(
      { _id: _id },
      { profilePicture: profilePicture },
      { new: true }
    );

    if (foundUser.error)
      res.status(400).send({ error: 'Error updating avatar' });

    res.status(200).send({
      success: 'Avatar update succeed',
      profilePicture: foundUser.profilePicture,
    });
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  const { _id } = req.user;

  const { userName, email } = req.body;

  try {
    const updatedUser = await UserRepo.findOneAndUpdate(
      { _id: _id },
      { userName: userName, email: email },
      { new: true }
    );

    if (updatedUser.error)
      res.status(400).send({ error: 'Error updating your user data' });
    if (updatedUser.data) {
      res.status(200).send({
        success: 'Your user updated successfully',
        user: {
          email: updatedUser.data.email,
          userName: updatedUser.data.userName,
          profilePicture: updatedUser.data.profilePicture,
        },
      });
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  signUp,
  signOut,
  updateAvatar,
  updateUser,
};
