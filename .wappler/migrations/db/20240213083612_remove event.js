
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.dropColumn('eventstartdatetime');
      table.dropColumn('eventenddatetime');
      table.dropColumn('latitude');
      table.dropColumn('longitude');
      table.dropColumn('geocoded');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.datetime('eventstartdatetime');
      table.datetime('eventenddatetime');
      table.float('latitude');
      table.float('longitude');
      table.boolean('geocoded');
    })
};
