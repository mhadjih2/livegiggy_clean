
exports.up = function(knex) {
  return knex.schema
    .table('page-content', async function (table) {
      table.dropColumn('yes');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page-content', async function (table) {
      table.string('yes', 255);
    })
};
