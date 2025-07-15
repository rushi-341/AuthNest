const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authMiddleware')
const userCtrl = require('../controllers/userController')

router.post('/register', userCtrl.registerUser)
router.post('/login', userCtrl.loginUser)
router.get('/', auth, userCtrl.getAllUsers)
router.get('/:id', auth, userCtrl.getUserById)
router.put('/:id', auth, userCtrl.updateUser)
router.delete('/:id', auth, userCtrl.deleteUser)

module.exports = router