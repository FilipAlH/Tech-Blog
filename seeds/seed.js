const sequelize = require('../config/connection');
const { User, Threads, Replies } = require('../models');

const userData = require('./userData.json');
const threadData = require('./threads.json')
const replyData = require('./replies.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Threads.bulkCreate(threadData, {
    individualHooks: true,
    returning: true,
  });
  await Replies.bulkCreate(replyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
