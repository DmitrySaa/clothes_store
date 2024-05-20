const Router = require('express')
const router = new Router()
const clothController = require('../controllers/clothController')
const checkRole = require("../middleware/CheckRoleMiddleware")


router.post('/',checkRole('ADMIN'),clothController.create)
router.get('/',clothController.getAll)
router.get('/:id',clothController.getOne)

module.exports = router