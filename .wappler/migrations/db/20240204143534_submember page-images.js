
exports.up = function(knex) {
  return knex.schema
    .createTable('page-content_page-images', async function (table) {
      table.increments('page-images_id');
      table.integer('page-content_id').unsigned();
      table.foreign('page-content_id').references('page-content_id').inTable('page-content').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('page-content_page-images')
};
