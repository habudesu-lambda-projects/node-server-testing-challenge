// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: '../database/users.db3'
    },
    migrations: {
      directory: './database/migrations.js'
    },
    useNullAsDefault: true
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: '../database/testing.db3'
    },
    migrations: {
      directory: './database/migrations.js'
    },
    useNullAsDefault: true
  }

};
