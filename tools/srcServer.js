import express from 'express'
import webpack from 'webpack'
import path from 'path'
import config from '../webpack.config.dev'
import open from 'open'

import teams from './routes/teams'
import fixtures from './routes/fixtures'
import table from './routes/table'
import result from './routes/result'
/* eslint-disable no-console */

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})

app.use('/teams', teams)
app.use('/fixtures', fixtures)
app.use('/table', table)
app.use('/result', result)

export default app
