
exports.up = function(knex) {
  return knex.schema
    .table('page-content', async function (table) {
      table.renameColumn('page-content_id', 'pagecontent_id');
      table.renameColumn('page-title', 'pagetitle');
      table.renameColumn('page-description', 'pagedescription');
      table.renameColumn('page-content-online', 'pagecontentonline');
      table.renameColumn('page-content-private', 'pagecontentprivate');
      table.renameColumn('page_date_created', 'pagedatecreated');
      table.renameColumn('page-content_date_edited', 'pagecontentdateedited');
      table.renameColumn('event-start_datetime', 'eventstartdatetime');
      table.renameColumn('event-end_datetime', 'eventenddatetime');
      table.renameColumn('last_editor_id', 'lasteditor_id');
    })
    .table('page-content_page-images', async function (table) {
      table.renameColumn('page_images_id', 'pageimages_id');
      table.renameColumn('image-link', 'imagelink');
      table.renameColumn('page-content_id', 'pagecontent_id');
    })
    .table('page-content_page-videos', async function (table) {
      table.renameColumn('page-videos_id', 'pagevideos_id');
      table.renameColumn('video-link', 'videolink');
      table.renameColumn('page-content_id', 'pagecontent_id');
    })
    .table('page-content_comments', async function (table) {
      table.renameColumn('page-content_id', 'pagecontent_id');
      table.renameColumn('comment_date', 'commentdate');
      table.renameColumn('flagged_comment_date', 'flaggedcommentdate');
    })
    .renameTable('page-content_comment_reactions_emoji', 'page-content_comment_reactionsemoji')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('page-content_comment_reactionsemoji', 'page-content_comment_reactions_emoji')
    .table('page-content_comments', async function (table) {
      table.renameColumn('pagecontent_id', 'page-content_id');
      table.renameColumn('commentdate', 'comment_date');
      table.renameColumn('flaggedcommentdate', 'flagged_comment_date');
    })
    .table('page-content_page-videos', async function (table) {
      table.renameColumn('pagevideos_id', 'page-videos_id');
      table.renameColumn('videolink', 'video-link');
      table.renameColumn('pagecontent_id', 'page-content_id');
    })
    .table('page-content_page-images', async function (table) {
      table.renameColumn('pageimages_id', 'page_images_id');
      table.renameColumn('imagelink', 'image-link');
      table.renameColumn('pagecontent_id', 'page-content_id');
    })
    .table('page-content', async function (table) {
      table.renameColumn('pagecontent_id', 'page-content_id');
      table.renameColumn('pagetitle', 'page-title');
      table.renameColumn('pagedescription', 'page-description');
      table.renameColumn('pagecontentonline', 'page-content-online');
      table.renameColumn('pagecontentprivate', 'page-content-private');
      table.renameColumn('pagedatecreated', 'page_date_created');
      table.renameColumn('pagecontentdateedited', 'page-content_date_edited');
      table.renameColumn('eventstartdatetime', 'event-start_datetime');
      table.renameColumn('eventenddatetime', 'event-end_datetime');
      table.renameColumn('lasteditor_id', 'last_editor_id');
    })
};
