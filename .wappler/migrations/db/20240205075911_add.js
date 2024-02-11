
exports.up = function(knex) {
  return knex.schema
    .table('page-content_page-videos', async function (table) {
      table.renameColumn('user_id', 'creator_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page-content_page-videos', async function (table) {
      table.renameColumn('creator_id', 'user_id');
    })
};
