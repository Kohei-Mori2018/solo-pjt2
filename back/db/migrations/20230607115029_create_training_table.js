/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("training_table", function (table) {
        table.increments("id").primary();
        table.string("title", 128);
        table.bigint("day");
        table.bigint("id2");
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
    return knex.schema.dropTable("training_table");
};
