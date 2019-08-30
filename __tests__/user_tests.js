const db = require('../database/db-config.js')

const userModel = require('../users/user-model.js')

describe('user functions', () => {

    describe('add user', () => {
        beforeEach(async () => {
            await db('users').truncate()
        })

        it('should only have 1 user', async () => {
            await userModel.addUser({username: "Kenichiwa", password: "password"})
            const users = await db('users')
            expect(users).toHaveLength(1)
        })

        it('username should be Kenichiwa', async () => {
            await userModel.addUser({username: "Kenichiwa", password: "password"})
            const users = await db('users')
            expect(users[0].username).toBe("Kenichiwa")
        })
    })

    describe('delete user', () => {

        it('should delete user', async () => {
            await userModel.deleteUser(1)
            const users = await db('users')
            expect(users).toHaveLength(0)
        })
    })
})