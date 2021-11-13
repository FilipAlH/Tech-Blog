const User = require('./User');
const Threads = require('./threads');
const Replies = require('./replies');

User.hasMany(Threads, {foreignKey: "user_id", onDelete: 'CASCADE'})
Threads.belongsTo(User, {foreignKey: "user_id"})

User.hasMany(Replies, {foreignKey: "user_id", onDelete: 'CASCADE'})
Replies.belongsTo(User, {foreignKey: "user_id"})

Threads.hasMany(Replies, {foreignKey: "thread_id", onDelete: 'CASCADE'})
Replies.belongsTo(Threads, {foreignKey: "thread_id"})


module.exports = { User, Threads, Replies };
