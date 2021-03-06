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

router.get('/getCartCount', (req, res, next) => {
  if(req.cookiesm && req.cookies.userId) {
    var userId = req.cookies.userId
    User.findOne({userId: userId}, (err, doc) => {
      if(err) {
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        })
      } else {
        var cartList = doc.cartList
        let cartCount = 0
        cartList.map((item) => {
          cartCount += parseInt(item.productNum)
        })
        res.json({
          status: '0',
          msg: '',
          result: ''
        })
      }
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
          msg: "",
          result: doc.cartList
    }
  })
})

// 购物车删除

router.post('/cart/del', (req, res, next) => {
  var userId = req.cookies.userId
  var productId = req.body.productId
  User.update({
  userId: userId
}, {
    $pull: {
      'cartList': {
        'productIc': productId
      }
    }
  }, (err, doc) => {
    if(err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
    res.json({
    status: '0',
    msg: '',
    result: 'suc'
  })
  }
})
  }
})

router.post('/cartEdit', (req, res, next) => {
  var userId = req.cookies.userId
  var productId = req.body.productId
  var productNum = req.body.productNum

  User.update({"userId": userId, "cartList.productId": productId}, {
    "cartList.$.productNum": productNum
}, (err, doc) => {
    if(err) {
      res.json({
        "status": '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
      status: '0',
      msg: '',
      result: 'suc'
  })
  }
})
})

router.post("/editCheckAll", (req, res, next) => {
  var userId = req.cookies.userId
  var checkAll = req.body.checkAll ? '1': '0'
  User.findOne({userId: userId}, (err, user) => {
    if(err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      if(user) {
        user.cartList.forEach((item)  => {
          item.checked = checkAll
        })
        user.save(function (err1. doc) {
          if(err1) {
            res.json({
              status: '1',
              msg: err1.message,
              result: ''
            })
          } else {
            res.json({
              status: '0',
              msg: '',
              result: 'suc'
            })
          }
        })
      }
    }
  })
})

// 查询用户地址
router.get('/addressList', (req, res, next) => {
  var userId = req.cookies.userId
  User.findOne({userId:userId}, (err, doc) => {
    if(err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: doc.addressList
      })
    }
  })
})

//设置默认地址
router.post('/setDefault', (req, res, next) => {
  var userId = req.cookies.userId
  var addressId = req.body.addressId
  if(!addressId) {
    res.json({
      status: '1003',
      msg: 'addressId is null',
      result: ''
    })
  } else {
    User.findOne({userId: userId}, (err, doc) => {
      if(err) {
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        })
      } else {
        var addressList = doc.addressList
        addressList.forEach((item) => {
          if(item.addressId == addressId) {
            item.isDefault = true
          } else {
            item.isDefault = false
          }
        })

        doc.save((err1, doc1) => {
            if(err1) {
              res.json({
                status: '1',
                msg: err.message,
                result: ''
              })
            } else {
              res.json({
                status: '0',
                msg: '',
                result: ''
              })
            }
        })
      }
    })
  }
})

//删除地址
router.post('/delAddress', (req, res, next) => {
  var userId = req.cookies.userId
  var addressId = req.body.addressId
  User.update({
    userId: userId
  }, {
    $pull: {
      'addressList': {
        'addressId': addressId
      }
    }
  }, (err, doc) => {
    if(err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: ''
      })
    }
  })
})

//
router.post('/payMent', (req, res, next) => {
  let userId = req.cookies.userId
  let orderTotal = req.body.orderTotal
  let addressId = req.body.orderId
  User.findOne({userId: userId}, (err, doc) => {
    if(err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      var address = ''
      var goodsList = []
       //获取当前的地址信息
       doc.addressList.forEach((item) => {
          if(addressId == item.addressId) {
                address = item
          }
       })

      //获取购物车的购买商品
      doc.cartList.filter((item) => {
        if(item.checked == '1') {
          goodsList.push(item)

        }
      })

      var order = {
        orderId: '',
        orderTotal: orderTotal,
        addressInfo: address,
        goodsList: goodsList,
        orderStatus: '1',
        createDate: ''
      }

      doc.orderList.push(order)

      doc.save((err1, doc1) => {
        if(err1) {
          res.json({
            status: '1',
            msg: err1.message,
            result: ''
          })
        } else {
          res.json({
            status: '0',
            msg: '',
            result: {
              orderId: order.orderId,
              orderTotal: order.orderTotal
            }
          })
        }
      })
    }
  })
})

//根据订单 Id 查询订单信息
router.get('/orderDetail', (req, res, next) => {
  var userId = req.cookires.userId
  var orderId = req.param('orderId')
  User.findOne({userId: userId}, (err, userInfo) => {
    if(err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      var orderList = userInfo.orderList
      if(orderList.length > 0) {
        var orderTotal = 0
        orderList.forEach((item) => {
          if(item.orderId == orderId) {
            orderTotal == item.orderTotal
          }
        })
        if(orderTotal > 0) {
          res.json({
            status: '0',
            msg: '',
            result: {
              orderId: orderId,
              orderTotal: orderTotal
            }
          })
        } else {
          res.json({
            status: '120002',
            msg: '无此订单',
            result: ''
          })
        }
      } else {
        res.json({
          status: '120001',
          msg: '当前用户未创建订单',
          result: ''
        })
      }
    }
  })
})
module.exports = router;
