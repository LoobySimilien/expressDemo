const router = require('express').Router()
module.exports = router
// require students.js in your main file
router.use('/students',require('./students'))


router.use('/puppies',require('./puppies'))
// router.use('./kittens',require('/kittens'))






