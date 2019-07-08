var express = require('express');
var router = express.Router();
var user = require('../models/user');
var post = require('../models/post');
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
  user.destroy({
    where: {
      id: req.body.id
    }
  })
    .then(data => {
      console.log('delete completed');
      res.sendStatus(200)
    }
    )
    .catch(err => console.log(err))
})
//=====update user
router.put('/admin', (req, res) => {
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
      console.log("update")
      res.sendStatus(200)
    })
    .catch(err => console.log(err))
});

//=====post
router.get('/post', (req, res) => {
  post.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
})
//===add post
router.post('/post', (req, res) => {
  var { title, content, image } = req.body;
  post.create({ title, content, image })
    .then(data => {
      console.log(data)
      res.sendStatus(200)
    })
    .catch(err => console.log(err))
})
//=====delete post
router.delete('/post', (req, res) => {
  post.destroy({
    where: {
      id: req.body.id
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
    image: req.body.image
  }
  console.log(req.body)
  post.update(dt,
    {
      where: {
        id: req.body.id
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









//user
// router.get('/user/user_info', (req, res) => {
//   console.log(sess.email)
//   user.findAll({
//     attributes: ['username', 'email', 'createdAt'],
//     where: {
//       email: sess.email
//     }
//   })
//     .then(result => {
//       console.log(result)
//       res.render('components/User/User_info', { result });
//     })
//     .catch(err => console.log(err))
// });


// //login
// router.post('/login', (req, res) => {
//   let email = req.body.email;
//   let pw = req.body.password;

//   user.findOne({
//     where: {
//       email: email,
//       password: pw
//     },
//     attributes: ['role']
//   })
//     .then(result => {
//       console.log(result)
//       if (result === null) {
//         res.render('Login', { mess: "Lỗi ĐN" })
//       }
//       else {
//         var rs = result.role;
//         // console.log(rs);
//         if (rs === 1)
//           res.redirect('/admin');
//         else res.redirect('/user')

//         sess = req.session
//         sess.email = email;
//         req.session.save()
//         console.log(sess.email)
//       }
//     })
//     .catch(err => console.log(err))

// })

// //sign up
// router.post('/signup', (req, res) => {
//   const data = {
//     username: req.body.username,
//     password: req.body.password,
//     salt: req.body.salt,
//     email: req.body.email
//   };
//   let { username, password, salt, email } = data;
//   //insert into table
//   user.create({ username, password, salt, email })
//     .then(result => res.redirect('/login'))
//     .catch(err => console.log(err))
// })

module.exports = router;
