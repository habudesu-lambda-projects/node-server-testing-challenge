const db = require('../data/db-config.js')

const userModel = require('./user-model.js')

describe('user functions', () => {

    beforeEach(async () => {
        await db('users').truncate()
    })

    it('should add a new user', async () => {
        await userModel.addUser({username: "Kenichiwa", password: "password"})
        const users = await db('users')
        expect(users).toHaveLength(1)
        expect(users[0].username).toBe("Kenichiwa")
    })
    
    it('should delete a user', async () => {
        await Users.deleteUser(1)
        const users = await db('users')
        expect(users).toHaveLength(0)
    })
})