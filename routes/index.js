var express = require('express');
var router = express.Router();
var user = require('../models/user');
var post = require('../models/post');
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // to support JSON bodies
router.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
//contact
router.get('/contact', function (req, res, next) {
  res.render('components/Contact/Contact');
});
//user
router.get('/user', function (req, res, next) {
  res.render('User');
});
router.get('/user/page', function (req, res, next) {
  res.render('components/User/Page');
});

router.get('/user/page/user_info', (req, res) => {
  console.log(sess.email)
  user.findAll({
    attributes: ['username', 'email', 'createdAt'],
    where: {
      email: sess.email
    }
  })
    .then(result => {
      console.log(result)
      res.render('components/User/User_info', { result });
    })
    .catch(err => console.log(err))
});
router.get('/user/page/add_post', function (req, res, next) {
  res.render('components/User/AddPost');
});

// router.post('/user/page/add_post', (req, res) => {
//   const database = {
//     title: req.body.title,
//     content: req.body.content,
//   };
//   let { title,content } = database;
//   //insert into table
//   user.create({ title, content })
//     .then(result => res.redirect('/user/page'))
//     .catch(err => console.log(err))

// })

//login
router.get('/login', function (req, res, next) {
  res.render('Login');
});

router.post('/login', (req, res) => {
  let email = req.body.email;
  let pw = req.body.password;

  user.findOne({
    where: {
      email: email,
      password: pw
    },
    attributes: ['role']
  })
    .then(result => {
      if (result === null) {
        res.render('Login',{mess:"Lỗi ĐN"})
      }
      else {
        var rs = result.role;
        // console.log(rs);
        if (rs === 1)
          res.redirect('/admin');
        else res.redirect('/user')

        sess = req.session
        sess.email = email;
        req.session.save()
        console.log(sess.email)
      }
    })
    .catch(err => console.log(err))

})

//sign up
router.get('/signup', function (req, res, next) {
  res.render('SignUp');
});

router.post('/signup', (req, res) => {
  const data = {
    username: req.body.ten,
    password: req.body.pass,
    salt: req.body.salt,
    email: req.body.mail,
  };
  let { username, password, salt, email } = data;
  //insert into table
  user.create({ username, password, salt, email })
    .then(result => res.redirect('/login'))
    .catch(err => console.log(err))

})

//post
router.get('/post', function (req, res, next) {
  res.render('components/Posts/Posts');
});
router.get('/user/post', function (req, res, next) {
  res.render('components/Posts/Posts_user');
});

//member
router.get('/member', function (req, res, next) {
  res.render('components/Member/Member');
});

router.get('/user/member', function (req, res, next) {
  res.render('components/Member/Member_user');
});

//blog
router.get('/blog', function (req, res, next) {
  res.render('components/Blog/Blog');
});

router.get('/user/blog', function (req, res, next) {
  res.render('components/Blog/Blog_user');
});

//admin
router.get('/admin', function (req, res, next) {
  res.render('Admin');
});

///////post
// select post
router.get('/admin/post', (req, res) => {
  post.findAll()
    .then(result => {
      console.log(result);
      res.render('components/Admin/Admin_Post', { result });
    })
    .catch(err => console.log(err))
});
//add post
router.get('/admin/post/add', function (req, res, next) {
  res.render('components/Admin/AddPost');
});
router.post('/admin/post/add', (req, res) => {
  console.log(sess.email)
  const database = {
    title: req.body.title,
    content: req.body.content,
  };
  console.log(database)
  let { title, content } = database;
  //insert into table
  post.create({ title, content })
    .then(result => res.redirect('/admin/post'))
    .catch(err => console.log(err))
})
//deletepost
router.get('/admin/post/delete/:id', (req, res) => {
  post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      console.log(`Delete completed `);
      res.redirect('/admin/post')
    })
    .catch(err => console.log(err))
})

//select user
router.get('/admin/user', (req, res) => {
  user.findAll()
    .then(result => {
      res.render('components/Admin/Admin_Member', { result });
    })
    .catch(err => console.log(err))
});
//delete
router.get('/admin/user/delete/:id', (req, res) => {
  user.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      console.log(`Delete completed `);
      res.redirect('/admin/user')
    })
    .catch(err => console.log(err))
})

module.exports = router;
