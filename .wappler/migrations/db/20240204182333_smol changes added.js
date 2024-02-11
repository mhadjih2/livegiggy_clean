
exports.up = function(knex) {
  return knex.schema
    .table('page-content', async function (table) {
      table.string('pagetype', 1 );
      table.integer('last_editor_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page-content', async function (table) {
      table.dropColumn('pagetype');
      table.dropColumn('last_editor_id');
    })
};
