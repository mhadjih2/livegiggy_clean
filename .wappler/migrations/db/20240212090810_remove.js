
exports.up = function(knex) {
  return knex.schema
    .table('channels', async function (table) {
      table.dropForeign('user_id');
      table.dropColumn('user_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('channels', async function (table) {
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('videocreator_id').inTable('pagecontent_pagevideos');
    })
};
