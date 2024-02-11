
exports.up = function(knex) {
  return knex.schema
    .createTable('authorized_roles', async function (table) {
      table.increments('auth_roles_id');
      table.string('role');
      table.string('rolename');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('authorized_roles')
};
