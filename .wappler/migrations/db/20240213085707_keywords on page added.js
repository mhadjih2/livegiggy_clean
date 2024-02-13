
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.string('pagekeywords');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.dropColumn('pagekeywords');
    })
};
