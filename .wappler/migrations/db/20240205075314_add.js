
exports.up = function(knex) {
  return knex.schema
    .table('page-content_comments', async function (table) {
      table.datetime('flagged_comment_date');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('page-content_comments', async function (table) {
      table.dropColumn('flagged_comment_date');
    })
};
