
exports.up = function(knex) {
  return knex.schema
    .createTable('page-content_page-images', async function (table) {
      table.increments('page_images_id');
      table.string('image-link');
      table.integer('page-content_id').unsigned();
      table.foreign('page-content_id').references('page-content_id').inTable('page-content').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('creator_id');
    })
    .createTable('page-content_page-videos', async function (table) {
      table.increments('page-videos_id');
      table.string('video-link');
      table.integer('page-content_id').unsigned();
      table.foreign('page-content_id').references('page-content_id').inTable('page-content').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('creator_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('page-content_page-videos')
    .dropTable('page-content_page-images')
};
