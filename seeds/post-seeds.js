const { Post } = require('../models');

const postData = [
    {
        title: 'First Post',
        post_text: 'This is my first post',
        user_id: 2
    },
    {
        title: 'Second Post',
        post_text: 'This is my second post',
        user_id: 2
    },
    {
        title: 'Third Post',
        post_text: 'This is my third post',
        user_id: 1
    },
    {
        title: 'Fourth Post',
        post_text: 'This is my fourth post',
        user_id: 4
    },
    {
        title: 'Fifth Post',
        post_text: 'This is my fifth post',
        user_id: 3
    },
    {
        title: 'Sixth Post',
        post_text: 'This is my sixth post',
        user_id: 4
    },
    {
        title: 'Seventh Post',
        post_text: 'This is my seventh post',
        user_id: 5
    },
    {
        title: 'Eighth Post',
        post_text: 'This is my eighth post',
        user_id: 4
    }
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;