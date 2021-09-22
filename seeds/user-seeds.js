const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
    {
        username: 'janesmith',
        password: 'pass123'
    },
    { 
        username: 'andydro',
        password: 'pass123'
    },
    { 
        username: 'maria',
        password: 'pass123'
    },
    { 
        username: 'celina',
        password: 'pass123'
    },
    { 
        username: 'ramadin',
        password: 'pass123'
    },
    { 
        username: 'jeanette',
        password: 'pass123'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

seedUsers();

module.exports = seedUsers;