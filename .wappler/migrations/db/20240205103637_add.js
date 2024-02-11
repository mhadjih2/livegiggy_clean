
exports.up = function(knex) {
  return knex.schema
    .table('page-content_comments', async function (table) {
      table.renameColumn('flagged_comment', 'flagauthorized');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page-content_comments', async function (table) {
      table.renameColumn('flagauthorized', 'flagged_comment');
    })
};
