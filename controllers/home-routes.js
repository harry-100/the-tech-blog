//  this will contain all the user facing routes
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

//  get all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id', 
            'title',
            'post_text',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
            model: User,
            attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
// serialize the data by adding {plain: true}
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        res.status(404).json(err);
    });
});

// render single post
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id:req.params.id
        },
        attributes: [
            'id',
            'title',
            'post_text',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
            model: User,
            attributes: ['username']
            }
        ] 
    })
    .then(dbPostData => {
        if(!dbPostData){
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        const post = dbPostData.get({ plain: true });
        res.render('single-post', { post, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        res.status(500).json(err);
    });
  });

  // login page
router.get('/login', (req, res) => {
    if(req.session.loggedIn){
    res.redirect('/');
    return;
    }
    res.render('login');
});

module.exports = router;