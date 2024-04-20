const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
phoneNumber: { type: Number, required: true, unique: true },
companyName: { type: String, required: true },
password: { type: String, required: true },
domainName: { type: String, required: true},
role: {type: String, enum: ['owner', 'staff', 'client']},
projects: [{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}],
// staff and client can only be for a user with role: owner
staff: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
client: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
// Saving the token in DB for SSO
token: { type: String },
// reset password token for reset password
resetPasswordToken: { 
    otp: { type: String },
    expires: { type: Date }
  },
lastLogin: { type: Date }
},
{ timestamps: true}
);
  
  userSchema.pre('save', async function(next) {
      if (!this.isModified('password')) return next();
      this.password = await bcrypt.hash(this.password, 12);
      next();
  });
  
  module.exports = mongoose.model('User', userSchema);
  