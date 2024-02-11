
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent_comment_reactions', async function (table) {
      table.renameColumn('comment_id', 'comments_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_comment_reactions', async function (table) {
      table.renameColumn('comments_id', 'comment_id');
    })
};
