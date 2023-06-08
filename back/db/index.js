// const knex = require("knex");
// const knexConfig = require("./knexfile");

// const environment = process.env.DATABASE_URL ? "production" : "development";
// knex(knexConfig[environment]);
// console.log(environment);

// module.exports = knex(knexConfig[environment]);

const knexConfig = require("./knexfile");
const environment = process.env.DATABASE_URL ? "production" : "development";

module.exports = knexConfig[environment]; //knex()

