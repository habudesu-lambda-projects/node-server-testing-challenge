const db = require('../database/db-config.js')

module.exports = {
    addUser,
    deleteUser
}

async function addUser(user) {
    const test = await db('users').insert(user)
    console.log(test)
}

async function deleteUser(id) {
    await db('users').where({id}).del()
    return db('users')
}