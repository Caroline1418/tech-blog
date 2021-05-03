<<<<<<< HEAD
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
=======
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
>>>>>>> c4897ca319d62277b87b18507153b9428828e0b4
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

<<<<<<< HEAD
const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
=======
const seedAll = async () => {
    await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
        console.log('\n----- USERS SEEDED -----\n');

    await seedPosts();
        console.log('\n----- POSTS SEEDED -----\n');

    await seedComments();
        console.log('\n----- COMMENTS SEEDED -----\n');

>>>>>>> c4897ca319d62277b87b18507153b9428828e0b4
    process.exit(0);
};

seedAll();