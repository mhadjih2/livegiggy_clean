
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent_pageimages', async function (table) {
      table.string('featured');
    })
    .table('pagecontent_pagevideos', async function (table) {
      table.string('featured');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_pagevideos', async function (table) {
      table.dropColumn('featured');
    })
    .table('pagecontent_pageimages', async function (table) {
      table.dropColumn('featured');
    })
};
