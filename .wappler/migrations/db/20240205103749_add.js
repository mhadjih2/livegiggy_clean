
exports.up = function(knex) {
  return knex.schema
    .dropTable('page-content_comment_reactionsemoji')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('page-content_comment_reactionsemoji', async function (table) {
      table.integer('comment_id').unsigned();
      table.foreign('comment_id').references('comments_id').inTable('page-content_comments').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('reaction', 1);
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('reaction_date');
    })
};
