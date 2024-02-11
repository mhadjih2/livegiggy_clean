
exports.up = function(knex) {
  return knex.schema
    .table('page-content', async function (table) {
      table.string('yes');
    })
    .renameTable('page-content_page-images', 'page-content_pageimages')
    .renameTable('page-content_page-videos', 'page-content_pagevideos')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('page-content_pagevideos', 'page-content_page-videos')
    .renameTable('page-content_pageimages', 'page-content_page-images')
    .table('page-content', async function (table) {
      table.dropColumn('yes');
    })
};
