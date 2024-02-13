
exports.up = function(knex) {
  return knex.schema
    .table('pagecontent_pagevideos', async function (table) {
      table.dropColumn('featured');
      table.boolean('livestream');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('pagecontent_pagevideos', async function (table) {
      table.string('featured', 255);
      table.dropColumn('livestream');
    })
};
