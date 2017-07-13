import express from 'express'
const router = express.Router()

import db from '../db'

const table = router.get('/', function (req, res) {
  db.getTable().then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

export default table
