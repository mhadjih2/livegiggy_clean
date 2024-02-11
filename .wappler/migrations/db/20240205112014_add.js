
exports.up = function(knex) {
  return knex.schema
    .renameTable('page-content', 'pagecontent')
    .renameTable('page-content_pageimages', 'pagecontent_pageimages')
    .renameTable('page-content_pagevideos', 'pagecontent_pagevideos')
    .renameTable('page-content_comments', 'pagecontent_comments')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('pagecontent_comments', 'page-content_comments')
    .renameTable('pagecontent_pagevideos', 'page-content_pagevideos')
    .renameTable('pagecontent_pageimages', 'page-content_pageimages')
    .renameTable('pagecontent', 'page-content')
};
