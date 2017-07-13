import express from 'express'
const router = express.Router()

import db from '../db'

const teams = router.get('/', function (req, res) {
  db.getTeams().then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

// router.post('/', function (req, res) {
//   db.saveWidget(req.body)
//   res.sendStatus(200)
// })

export default teams
