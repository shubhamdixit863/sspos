
let knex = require('knex');

module.exports = knex({
        client: 'mysql',
        connection: {
                database: 'abtus52q_beebags',
                host: 'localhost',
                password: 'root',
                user: 'root',
                dateStrings: true
        }
});
