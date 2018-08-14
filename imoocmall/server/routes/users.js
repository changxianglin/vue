var express = require('express');
var router = express.Router();

const User = require('./../models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send('test');
});

router.post('/login', (req, res, next) => {
  var param = {
   userName: req.body.userName,
   userPwd: req.body.userPwd
  }
  User.findOne(param,  (err, doc) => {
  if(err) {
    res.json({
        status: '1',
        msg: err.message
    })
  } else {
    if(doc) {
      res.cookie("userId", doc.userId, {
        path: '/',
        maxAge: 1000 * 60 * 60
      })
      res.cookie("userName", doc.userName, {
        path: '/',
        maxAge: 1000 * 60 * 60
      })
      // req.session.user = doc
      res.json({
        status: '0',
        msg: '',
        result: {
          userName: doc.userName
        }
      })
    }
  }
})
})

// 登出接口
router.post("/logout", (req, res, next) => {
  res.cookie('userId', '', {
    path: '/',
    maxAge: -1
})
res.json({
  status: '0',
  msg: '',
  result: ''
})
})

router.get('/checkLogin', (req, res, next) => {
  if(req.cookies.userId) {
    res.json({
      status: '0',
      msg: '',
      result: req.cookies.userName || ''
    })
  } else {
    res.json({
      status: '1',
      msg: '当前未登陆',
      result: ''
    })
}
})

// 查询当前购物车数据
router.get('/cartList', (req, res, next) => {
  var userId = req.cookies.userId
  User.findOne({userId: userId}, (err, doc) => {
    if(err) {
      res.json({
        status: '1',
        msg: err.msg,
        result: ''
      })
    } else {
        if(doc) {
          status: '0',
          msg: ""
          result: doc.cartList
  }
})
})

module.exports = router;
