import express from 'express'
const router = express.Router()

import db from '../db'

const fixtures = router.get('/', function (req, res) {
  db.getFixtures().then((fixtures) => {
    res.send(fixtures)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

export default fixtures
