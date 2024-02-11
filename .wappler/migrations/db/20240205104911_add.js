
exports.up = function(knex) {
  return knex.schema
    .table('page-content_comments', async function (table) {
      table.renameColumn('comments_id', 'comment_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page-content_comments', async function (table) {
      table.renameColumn('comment_id', 'comments_id');
    })
};
