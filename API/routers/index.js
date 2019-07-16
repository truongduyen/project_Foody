var express = require('express');
var router = express.Router();
var user = require('../models/user');
var post = require('../models/post');
var cmt = require('../models/comment');
var bodyParser = require('body-parser');
var cors = require('cors');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const sequelize = require('sequelize')
const Op = sequelize.Op;

router.use(bodyParser.json()); // to support JSON bodies
router.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

/* GET home page. */
router.use(cors());
process.env.SECRET_KEY = 'secret'
//=====user
router.get('/admin', (req, res) => {
  if (req.query.keyword) {
    user.findAll({
      where: {
        username: {
          [Op.like]: `%${req.query.keyword}%`
        }
      }
    })
      .then(data => res.send(data))
      .catch(err => console.log(err))
  } else {
    user.findAll()
      .then(data => res.send(data))
      .catch(err => console.log(err))
  }
})
//===delete user
router.delete('/admin', (req, res) => {
  post.destroy({
    where: {
      user_email: req.body.email
    }
  })
  .then(()=>{
    user.destroy({
      where: {
        id: req.body.id
      }
    })
  })
  .then(() => {
      console.log('delete completed');
      res.sendStatus(200)
  })  
  .catch(err=>console.log(err))
})
  //=====update user
  router.put('/admin', (req, res) => {
    console.log(req.body)
    var data = {
      username: req.body.username,
      email: req.body.email
    }
    // console.log(req.body)
    user.update(data,
      {
        where: {
          id: req.body.id
        }
      })
      .then(data => {
        console.log(data)
        res.sendStatus(200)
      })
      .catch(err => console.log(err))
  });

  //=====post
  router.get('/post', (req, res) => {
    if (req.query.keyword) {
      post.findAll({
        where: {
          title: {
            [Op.like]: `%${req.query.keyword}%`
          }
        }
      })
        .then(dt => {
          console.log(dt)
          res.send(dt)
        })
        .catch(err => console.log(err))
    } else {
      post.findAll()
        .then(dt => {
          console.log(dt)
          res.send(dt)
        })
        .catch(err => console.log(err))
    }
  })
  //=====get post theo user
  router.get('/post/:email', (req, res) => {
    if (req.query.keyword) {
      post.findAll({
        where: {
          user_email: req.query.email,
          title: {
            [Op.like]: `%${req.query.keyword}%`
          }
        }
      })
        .then(dt => res.send(dt))
        .catch(err => console.log(err))
    } else {
      post.findAll({
        where: {
          user_email: req.params.email,
        }
      })
        .then(dt => res.send(dt))
        .catch(err => console.log(err))
    }
  })
  //====get post bài viết
  router.get('/post_id', (req, res) => {
    post.findAll({
      order: [
        ['item', 'ASC']
      ]
    })
      .then(dt => res.send(dt))
      .catch(err => console.log(err))
  })
  router.get('/post_id/:id_post', (req, res) => {
    post.findAll({
      where: {
        id_post: req.params.id_post
      }
    })
      .then(dt => res.send(dt))
      .catch(err => console.log(err))
  })
  //===add post
  router.post('/post', (req, res) => {
    var { title, content, image, item, user_email } = req.body;
    console.log(image)
    post.create({ title, content, image, item, user_email })
      .then(dt => {
        console.log(dt)
        res.sendStatus(200)
      })
      .catch(err => console.log(err))
  })
  //=====delete post
  router.delete('/post', (req, res) => {
    post.destroy({
      where: {
        id_post: req.body.id_post
      }
    })
      .then(() => {
        console.log('delete completed');
        res.sendStatus(200)
      }
      )
      .catch(err => console.log(err))
  })
  //=====update post
  router.put('/post', (req, res) => {
    var dt = {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      item: req.body.item
    }
    post.update(dt,
      {
        where: {
          id_post: req.body.id_post
        }
      })
      .then(dt => {
        console.log("update")
        res.sendStatus(200)
      })
      .catch(err => console.log(err))
  });

  //=====sign up
  router.post('/admin', (req, res) => {
    const dataUser = {
      username: req.body.username,
      password: req.body.password,
      salt: req.body.salt,
      email: req.body.email,
    }
    //SELECT 'email' from users
    user.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(data => {
        if (!data) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            dataUser.password = hash
            user.create(dataUser)
              .then(data => {
                res.json({ status: data.email + ' registered' })
              })
              .catch(err => {
                res.send('error: ' + err)
              })
          })
        } else {
          res.json({ error: "User already exists" })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })

  //=====login
  router.post('/login', (req, res) => {
    let email = req.body.email;
    let pw = req.body.password;

    user.findOne({
      where: {
        email: email
      }
    })
      .then(result => {
        bcrypt.compare(pw, result.password, (err, hash) => {
          if (hash === true) {
            res.send(JSON.stringify(result));
          }
        })
      }
      )
      .catch(err => console.log(err))
  })
//=======comment
router.get("/comment", (req, res) => {
  cmt.findAll()
    .then(dt => res.send(dt))
    .catch(err => console.log(err))
})
//=======comment post
router.post('/comment', (req, res) => {
  var { content_cmt, user_id, post_id } = req.body;
  // console.log(image)
  cmt.create({ content_cmt, user_id, post_id })
    .then(dt => {
      console.log(dt)
      res.sendStatus(200)
    })
    .catch(err => console.log(err))
})
  module.exports = router;
