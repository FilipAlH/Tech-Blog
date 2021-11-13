const User = require('./User');
const Threads = require('./threads');
const Replies = require('./replies');
const { Thread } = require('../../../Unit-14/TeachThruTalk/models');

User.hasMany(Threads, {as: "threads"})
Threads.belongsTo(User, {foreignKey: "user_id"})

User.hasMany(Replies, {as: "replies"})
Replies.belongsTo(User, {foreignKey: "user_id"})

Threads.hasMany(Replies, {as : "replies"})
Replies.belongsTo(Threads, {foreignKey: "thread_id"})


module.exports = { User, Threads, Replies };
