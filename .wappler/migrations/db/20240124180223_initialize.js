
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('user_id');
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('password');
      table.datetime('signup_date').defaultTo(knex.fn.now());
    })
    .createTable('roles', async function (table) {
      table.increments('role_id');
      table.string('user_id');
      table.string('role');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('roles')
    .dropTable('user')
};
