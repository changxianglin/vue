import axios from 'axios'

const instance = aixos.create({
  baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
  timeout: 1000,
  header: {

  }
})

export default instance
