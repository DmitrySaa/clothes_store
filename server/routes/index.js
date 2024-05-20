const Router = require('express')
const router = new Router()
const userRoter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const clothesRouter = require('./clothesRouter')

router.use('/user', userRoter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/clothes', clothesRouter)

module.exports = router