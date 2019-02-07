const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Goods = require('../models/goods')

// 链接 MongoDB 数据库
const url = 'mongodb://localhost:27017/demo'
mongoose.connect(url)

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected success.')
})

mongoose.connection.on('error', ()=> {
  console.log('MongoDB connected fail.')
})

mongoose.connection.on('disconnected', () =>{
  console.log('MongoDB connected disconnected')
})

// 查询商品列表
router.get("/list", (req, res, next) => {
  let page = parseInt(req.param('page'))
  let pageSize = parseInt(req.param('pageSize'))
  let priceLevel = req.param('priceLevel')
  let sort = req.param('sort')
  let skip = (page - 1) * pageSize
  var priceGt = ''
  var priceLte = ''
  let params = {}

  if(priceLevel != 'all') {
    switch(priceLevel) {
      case '0':
        priceGt = 0
        priceLte = 100
          break
      case '1':
        priceGt = 100
        priceLte = 500
            break
      case '2':
        priceGt = 500
        priceLte = 1000
            break
      case '3':
        priceGt = 1000
        priceLte = 5000
            break
    }

    params = {
      salePrice: {
        $gte: priceGt,
        $lte: priceLte
      }
    }
  }

  let goodsModel = Goods.find(params).skip(skip).limit(pageSize)
  goodsModel.sort({'salePrice': sort})
  goodsModel.exec({}, (err, doc) => {
    if(err) {
      res.json({
        status: '1',
        msg: err.message
      })} else {
        res.json({
          status: '0',
          msg: '',
          result: {
            count: doc.length,
            list: doc
          }
        })
      }
    })
})

// 加入购物车
router.post('/goods/addCart', (req, res, next) => {
  let userId = ''
  let productId = req.body.productId
  let User = require('../models/user')

  User.findOne({userId: userId}, (err, userDoc) => {
    if(err) {
      res.json({
        status: "1",
        msg: err.message
      }) else {
        console.log('userDoc: ' + userDoc)
        let goodsItem = ''
        userDoc.carList.forEach((item) => {
          if(item.productId == productId) {
            goodsItem = item
            item.productNum ++
        }
        })
        if(goodsItem) {
          User.save((err2, doc2) => {
            if(err2) {
              res.json({
                status: "1",
                msg: err2.message
              }) else {
                res.json({
                  status: '0',
                  msg: '',
                  result: 'suc'
                }
              })
          }
        })
        } else {
          Goods.findOne({productId: productId}, (err1, doc) => {
        }
        if(userDoc) {
          Goods.findOne({productId: productId}, (err1, doc) => {
            if(err1) {
              res.json({
                status: "1",
                msg: err1.message
              }) else {
                if(doc) {
                  doc.productNum = 1,
                  doc.checked = 1
                  User.carList.push(doc)
                  User.save((err2, doc2) => {
                    if(err2) {
                      res.json({
                        status: "1",
                        msg: err2.message
                      }) else {
                          res.json({
                            status: '0',
                            msg: '',
                            result: 'suc'
                          }
                      })
                      }
                  })
                }
              }
              }
          })
        }
      }
    }
})
})


module.exports = router
