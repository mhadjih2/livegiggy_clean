
exports.up = function(knex) {
  return knex.schema
    .table('authorized_roles', async function (table) {
      table.renameColumn('authorized_id', 'authorized_roles_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('authorized_roles', async function (table) {
      table.renameColumn('authorized_roles_id', 'authorized_id');
    })
};
