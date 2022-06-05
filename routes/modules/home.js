// 引用 Express
const express = require('express')
// 引用 Express 路由器
const router = express.Router()

// 引用亂碼產生器
const genUrl = require('../../gen_url')

// 引用 Schema
const urlShorten = require('../../models/urlShorten')

// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')

})

// 從短網址轉到原網址
router.get('/:shortened_URL', (req, res) => {

  const completeURL = 'http://localhost:3000/' + req.params.shortened_URL
  urlShorten.findOne(
    {
      urlAfterShorten: completeURL
    }
  )
    .lean()
    .then(url => {
      if (!url) { // 資料庫內沒有重複的 url

        console.log('completeURL=', completeURL)
        console.log('not found')
        // res.redirect('/')
      } else { // 資料庫內有重複的 url
        res.redirect(url.urlBeforeShorten)
      }

    })

    .catch(error => console.error(error))
})

// 按下 shorten 按鈕
router.post('/', (req, res) => {

  urlShorten.findOne(
    {
      urlBeforeShorten: req.body.urlBeforeShorten
    }
  )
    .lean()
    .then(url => {
      if (!url) { // 資料庫內沒有重複的 url
        const outputUrl = genUrl()
        urlShorten.create({
          urlBeforeShorten: req.body.urlBeforeShorten, urlAfterShorten: outputUrl
        })
          .then(() => {
            res.render('index', {
              urlBeforeShorten: req.body.urlBeforeShorten,
              urlAfterShorten: outputUrl
            })
          })

      } else { // 資料庫內有重複的 url
        console.log('url=', url)
        res.render('index', {
          urlBeforeShorten: url.urlBeforeShorten,
          urlAfterShorten: url.urlAfterShorten
        })
      }
    })


    .catch(error => console.error(error))

})

module.exports = router