
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent_pageimages', async function (table) {
      table.integer('order').defaultTo(0).alter();
    })
    .table('pagecontent_pagevideos', async function (table) {
      table.float('order').defaultTo(0).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_pagevideos', async function (table) {
      table.float('order').defaultTo().alter();
    })
    .table('pagecontent_pageimages', async function (table) {
      table.integer('order').defaultTo().alter();
    })
};
