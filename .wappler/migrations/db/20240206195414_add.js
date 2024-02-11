
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent_pageimages', async function (table) {
      table.integer('order');
    })
    .table('pagecontent_pagevideos', async function (table) {
      table.decimal('order');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_pagevideos', async function (table) {
      table.dropColumn('order');
    })
    .table('pagecontent_pageimages', async function (table) {
      table.dropColumn('order');
    })
};
