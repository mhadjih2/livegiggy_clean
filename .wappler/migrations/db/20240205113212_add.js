
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent_pageimages', async function (table) {
      table.increments('pageimages_id');
      table.string('imagelink');
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('imagecreator_id');
    })
    .createTable('pagecontent_pagevideos', async function (table) {
      table.increments('pagevideos_id');
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('videolink');
      table.string('videocreator_id');
      table.boolean('videoflagged');
      table.boolean('videoauthorized');
      table.boolean('videoonline');
    })
    .createTable('pagecontent_comments', async function (table) {
      table.increments('comments_id');
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('comment');
      table.integer('commentcreator_id');
      table.boolean('commentflagged');
      table.boolean('commentauthorized');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pagecontent_comments')
    .dropTable('pagecontent_pagevideos')
    .dropTable('pagecontent_pageimages')
};
