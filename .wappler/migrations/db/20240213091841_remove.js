
exports.up = function(knex) {
  return knex.schema
    .dropTable('page-content_comment_reactions')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('page-content_comment_reactions', async function (table) {
      table.integer('comment_id').unsigned();
      table.foreign('comment_id').references('comment_id').inTable('pagecontent_comments').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('reaction', 1);
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user');
    })
};
