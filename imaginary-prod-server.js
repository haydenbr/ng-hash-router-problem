const express = require('express')
const app = express()
const port = 3000

app.use('/Home', express.static('some-other-path'))
app.use('/dist/ng-hash-router-problem', express.static('dist/ng-hash-router-problem'))

app.listen(port, () => console.log(`listening on port ${port}`))
