var express = require('express');
var router = express.Router();
var user = require('../models/user');
var post = require('../models/post');
var bodyParser = require('body-parser');
var cors = require('cors');
router.use(bodyParser.json()); // to support JSON bodies
router.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

/* GET home page. */
router.use(cors());
process.env.SECRET_KEY = 'secret'
//=====user
router.get('/admin', (req, res) => {
  user.findAll()
    .then(data => res.send(data))
    .catch(err => console.log(err))
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
  post.update({
    where: {
      id: req.body.id
    }
  })
    .then(() => {
      console.log("update")
      res.sendStatus(200)
    })
    .catch(err => console.log(err))
});

//=====sign up
router.post('/admin', (req, res) => {
  var { username, password, salt, email } = req.body;
  user.create({ username, password, salt, email })
    .then(() => {
      console.log("signup")
      res.sendStatus(200)
    })
    .catch(err => console.log(err))
})

//====login
router.post('/admin', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  user.findOne({
    where: {
      email: email,
      password: password
    },
    attributes: ['role']
  })
    .then(result => {
      return res.end(JSON.stringify(result))
      
    })
    .catch(err => console.log(err))
})











router.get('/', function (req, res, next) {
  res.render('index');
});
//user
router.get('/user/user_info', (req, res) => {
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

router.post('/user/page/add_post', (req, res) => {
  const database = {
    title: req.body.title,
    content: req.body.content,
  };
  let { title, content } = database;
  //insert into table 
  post.create({ title, content })
    .then(result => res.redirect('/user/page'))
    .catch(err => console.log(err))
})
//login
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
      console.log(result)
      if (result === null) {
        res.render('Login', { mess: "Lỗi ĐN" })
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
router.post('/signup', (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
    salt: req.body.salt,
    email: req.body.email
  };
  let { username, password, salt, email } = data;
  //insert into table
  user.create({ username, password, salt, email })
    .then(result => res.redirect('/login'))
    .catch(err => console.log(err))

})

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
//delete post
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
//update post
router.get('/admin/post/update/:id', (req, res) => {
  console.log(sess.email)
  post.findAll({
    attributes: ['title', 'content'],
    where: {
      id: req.params.id
    }
    // post.destroy({  
    //   where: {
    //     id: req.params.id
    // }
  })
    .then(result => {
      console.log(result)
      res.render('components/User/User_info', { result });
    })
    .catch(err => console.log(err))

});


//select user
router.get('/admin/admin_member', (req, res) => {
  user.findAll()
    .then(result => {
      res.render('Admin/Admin_Member', { result });
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
