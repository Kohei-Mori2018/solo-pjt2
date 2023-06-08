// const knex = require("../db/index");
// const knex = require("knex");
const knexfile = require("../db/index.js");
const knex = require("knex")(knexfile);

/**
 * テーブル名称productsを代入
 */
const PRODUCT_TABLE = "training_table";

module.exports = {
    /**
    * @returns {promise}productテーブルの中身を全て取得
    */
    // postgre であればselect * from training_table idを昇順で並べて出してとなる。
    async getAll() {
        return await knex.select("*").from(PRODUCT_TABLE).orderBy("id", "asc")
    },
    async insertTraining(title, day, id2) {
        knex(PRODUCT_TABLE).insert({ title: title, day: day, id2: id2 }).then((data) => console.log(data))
    }
}
