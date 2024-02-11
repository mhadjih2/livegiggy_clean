
exports.up = function(knex) {
  return knex.schema
    .table('page-content', async function (table) {
      table.integer('user_id');
    })
    .createTable('page-content_comments', async function (table) {
      table.increments('comments_id');
      table.integer('page-content_id').unsigned();
      table.foreign('page-content_id').references('page-content_id').inTable('page-content').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('comment');
      table.datetime('comment_date');
      table.integer('user_id');
    })
    .table('page-content_page-images', async function (table) {
      table.renameColumn('creator_id', 'user_id');
    })
    .table('page-content_page-videos', async function (table) {
      table.renameColumn('creator_id', 'user_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page-content_page-videos', async function (table) {
      table.renameColumn('user_id', 'creator_id');
    })
    .table('page-content_page-images', async function (table) {
      table.renameColumn('user_id', 'creator_id');
    })
    .dropTable('page-content_comments')
    .table('page-content', async function (table) {
      table.dropColumn('user_id');
    })
};
