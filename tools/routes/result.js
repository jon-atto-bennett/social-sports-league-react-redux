import express from 'express'
const router = express.Router()

import db from '../db'

const result = router.post('/', function (req, res) {
  db.saveResult(req.body)
    .then(() => {
      res.sendStatus(201)
    })
})

export default result
