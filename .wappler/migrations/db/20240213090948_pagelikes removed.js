
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.dropColumn('pagelikes');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.float('pagelikes').defaultTo(0);
    })
};
