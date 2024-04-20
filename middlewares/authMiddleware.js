const jwt = require('jsonwebtoken');
  const User = require('../models/UserModel');
  
  // User Authentication SSO Middleware
exports.staffAuthMiddleware = async (req, res, next) => {
try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id })
    // const user = await User.findOne({ _id: decoded.id, token: token })
    if (!user) {
        return res.status(401).json({ message: 'Please authenticate' });
    }
    if (user.role !== 'staff') {
        return res.status(401).json({ message: 'You are not authorized to perform this action' });
    }
    req.user = user;
    req.token = token;
    next();
} catch (error) {
    return res.status(401).json({ message: 'Please authenticate' });
}
};

exports.ownerAuthMiddleware = async (req, res, next) => {
try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });
    // const user = await User.findOne({ _id: decoded.id, token: token })
    if (!user) {
        return res.status(401).json({ message: 'Please authenticate' });
    }
    if (user.role !== 'owner') {
        return res.status(401).json({ message: 'You are not authorized to perform this action' });
    }
    req.user = user;
    req.token = token;
    next();
} catch (error) {
    return res.status(401).json({ message: 'Please authenticate' });
}
};

exports.clientAuthMiddleware = async (req, res, next) => {
try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });
    // const user = await User.findOne({ _id: decoded.id, token: token })
    if (!user) {
        return res.status(401).json({ message: 'Please authenticate' });
    }
    if (user.role !== 'client') {
        return res.status(401).json({ message: 'You are not authorized to perform this action' });
    }
    req.user = user;
    req.token = token;
    next();
}
catch (error) {
    return res.status(401).json({ message: 'Please authenticate' });
}
}