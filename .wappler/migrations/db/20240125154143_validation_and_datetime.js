
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.string('confirmation_code');
      table.datetime('validated_date');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.dropColumn('confirmation_code');
      table.dropColumn('validated_date');
    })
};
