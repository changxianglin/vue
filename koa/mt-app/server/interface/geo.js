import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({
  prefix: '/geo'
})

const sign = '96d5fff28ef79a9021a0bcd44e1626a1'

router.get('/getPosition', async (ctx) => {
  let {status, data: {province, city}} = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
  if(status === 200) {
    ctx.body = {
      province,
      city,
    }
    }else {
      ctx.body = {
        province: '',
        city: '',
      }
  }
})

export default router
