const { Comment } = require('../models');

<<<<<<< HEAD
const commentData = [{
        comment_text: "Lorem ipsum dolor sit amet",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "consectetur adipiscing elit",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        user_id: 3,
        post_id: 3
    }
];
=======
const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We just reached a million subscribers! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]
>>>>>>> c4897ca319d62277b87b18507153b9428828e0b4

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;