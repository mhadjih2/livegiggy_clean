
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent', async function (table) {
      table.decimal('pageviews').defaultTo(0);
      table.decimal('pagelikes').defaultTo(0);
    })
    .table('pagecontent_pagevideos', async function (table) {
      table.decimal('viewcount').defaultTo(0);
      table.decimal('likecount');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_pagevideos', async function (table) {
      table.dropColumn('viewcount');
      table.dropColumn('likecount');
    })
    .table('pagecontent', async function (table) {
      table.dropColumn('pageviews');
      table.dropColumn('pagelikes');
    })
};
