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

router.get("/", (req, res, next) => {
  let page = parseInt(req.param('page'))
  let pageSize = parseInt(req.param('pageSize'))
  let sort = req.param('sort')
  let skip = (page - 1) * pageSize
  let params = {}
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

module.exports = router
