const mongoose = require('mongoose');
const argv = require('../argv');
const Schema = mongoose.Schema;

const User = new Schema({
  googleId: String,
  permissions: Number,
  lastLogin: Date,
  lastAction: String,
});

mongoose.connect(`mongodb://${argv.mongo || process.env.MONGO || 'localhost'}/team5877`);

const Users = mongoose.model('Users', User);

module.exports = Users;
