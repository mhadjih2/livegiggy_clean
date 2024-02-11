
exports.up = function(knex) {
  return knex.schema
    .table('page-content_comments', async function (table) {
      table.boolean('comment_authorized');
    })
    .createTable('page-content_comment_reactions_emoji', async function (table) {
      table.integer('comment_id').unsigned();
      table.foreign('comment_id').references('comments_id').inTable('page-content_comments').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('reaction', 1);
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('reaction_date');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('page-content_comment_reactions_emoji')
    .table('page-content_comments', async function (table) {
      table.dropColumn('comment_authorized');
    })
};
