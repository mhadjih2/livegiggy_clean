
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent_liveevents', async function (table) {
      table.datetime('eventcreateddate');
      table.integer('eventcreator_id');
      table.boolean('eventcancelled').defaultTo(0);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_liveevents', async function (table) {
      table.dropColumn('eventcreateddate');
      table.dropColumn('eventcreator_id');
      table.dropColumn('eventcancelled');
    })
};
