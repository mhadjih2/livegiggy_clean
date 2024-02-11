
exports.up = function(knex) {
  return knex.schema
    .table('page-content', async function (table) {
      table.decimal('latitude').alter();
      table.decimal('longitude').alter();
      table.renameColumn('user_id', 'creator_id');
    })
    .table('page-content_page-images', async function (table) {
      table.renameColumn('user_id', 'creator_id');
    })
    .table('page-content_page-videos', async function (table) {
      table.boolean('flagged');
    })
    .table('page-content_comments', async function (table) {
      table.renameColumn('comment_authorized', 'flagged_comment');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page-content_comments', async function (table) {
      table.renameColumn('flagged_comment', 'comment_authorized');
    })
    .table('page-content_page-videos', async function (table) {
      table.dropColumn('flagged');
    })
    .table('page-content_page-images', async function (table) {
      table.renameColumn('creator_id', 'user_id');
    })
    .table('page-content', async function (table) {
      table.float('latitude').alter();
      table.float('longitude').alter();
      table.renameColumn('creator_id', 'user_id');
    })
};
