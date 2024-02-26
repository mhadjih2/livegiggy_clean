
exports.up = function(knex) {
  return knex.schema
    .table('rolearray', async function (table) {
      table.integer('user_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('rolearray', async function (table) {
      table.dropColumn('user_id');
    })
};
