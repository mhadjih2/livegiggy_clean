
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent_liveevents', async function (table) {
      table.boolean('eventfinished').defaultTo(0);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_liveevents', async function (table) {
      table.dropColumn('eventfinished');
    })
};
