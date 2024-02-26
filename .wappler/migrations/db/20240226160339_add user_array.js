
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.json('role_array');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.dropColumn('role_array');
    })
};
