
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.date('signup_date').defaultTo(knex.fn.now()).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.datetime('signup_date').defaultTo(knex.fn.now()).alter();
    })
};
