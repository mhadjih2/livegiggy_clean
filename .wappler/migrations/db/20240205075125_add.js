
exports.up = function(knex) {
  return knex.schema
    .table('page-content', async function (table) {
      table.decimal('latitude').alter();
      table.decimal('longitude').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page-content', async function (table) {
      table.float('latitude').alter();
      table.float('longitude').alter();
    })
};
