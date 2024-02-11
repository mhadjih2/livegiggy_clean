
exports.up = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.dropColumn('role2');
      table.dropColumn('role3');
      table.dropColumn('role4');
      table.dropColumn('role5');
      table.dropColumn('role6');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('roles', async function (table) {
      table.string('role2', 255);
      table.string('role3', 255);
      table.string('role4', 255);
      table.string('role5', 255);
      table.string('role6', 255);
    })
};
