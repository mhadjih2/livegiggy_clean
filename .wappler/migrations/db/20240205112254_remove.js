
exports.up = function(knex) {
  return knex.schema
    .dropTable('pagecontent_comments')
    .dropTable('pagecontent_pagevideos')
    .dropTable('pagecontent_pageimages')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('pagecontent_pageimages', async function (table) {
      table.increments('pageimages_id').primary().notNullable();
      table.string('imagelink', 255);
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('creator_id');
    })
    .createTable('pagecontent_pagevideos', async function (table) {
      table.increments('pagevideos_id').primary().notNullable();
      table.string('videolink', 255);
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('creator_id');
      table.boolean('flagged');
    })
    .createTable('pagecontent_comments', async function (table) {
      table.increments('comment_id').primary().notNullable();
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
      table.text('comment');
      table.datetime('commentdate');
      table.integer('user_id');
      table.boolean('flagauthorized');
      table.datetime('flaggedcommentdate');
    })
};
