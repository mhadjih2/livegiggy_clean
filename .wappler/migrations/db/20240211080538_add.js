
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.datetime('cc_date');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('cc_date');
    })
};
