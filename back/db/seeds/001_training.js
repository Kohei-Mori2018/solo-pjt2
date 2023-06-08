const knex = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('training_table').del()
  await knex('training_table').insert([
    { title: "メッシを目指して筋トレ", day: 1686150000000, id2: 1686183275009 },
    { title: "ロナウドを目指して筋トレ", day: 1686668400000, id2: 1686183296995 },
    { title: "ロナウドを目指して飲み会", day: 1685718000000, id2: 1686183311392 }
  ]);
};
