const Router = require('express')
const router = new Router()
const clothController = require('../controllers/clothController')


router.post('/',clothController.create)
router.get('/',clothController.getAll)
router.get('/:id',clothController.getOne)

module.exports = router