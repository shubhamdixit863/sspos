
let knex = require('knex');

module.exports = knex({
        client: 'mysql',
        connection: {
                database: 'sspos',
                host: 'localhost',
                password: 'root',
                user: 'root',
                dateStrings: true
        }
});
