// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/users.sqlite3'
    },
    migrations: {
      directory: './database/migrations'
    },
    useNullAsDefault: true
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.sqlite3'
    },
    migrations: {
      directory: './database/migrations'
    },
    useNullAsDefault: true
  }

};
