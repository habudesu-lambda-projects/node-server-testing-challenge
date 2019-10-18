const express = require('express')

const router = express.Router()

const User = require('./user-model.js')

router.post('/', async ( req, res ) => {
    const user = req.body
    try {
        const newUser = await User.addUser(user)
        res.status(201).json({message: "User Created", user: newUser})
    }
    catch(error) {
        res.status(500).json({message: "Could Not Create New User", error: error})
    }
})

router.delete('/:id', async ( req, res ) => {
    const {id} = req.params
    try {
        const user = await User.deleteUser(id)
        res.status(201).json({message: "User Deleted"})
    }
    catch(error) {
        res.status(500).json({message: "Could Not Delete User", error: error})
    }
})

module.exports = router