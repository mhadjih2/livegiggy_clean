
exports.up = function(knex) {
  return knex.schema
    .dropTable('page-content_reactions')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('page-content_reactions', async function (table) {
      table.integer('page-content_id').unsigned();
      table.foreign('page-content_id').references('pagecontent_id').inTable('page-content').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('reaction', 1);
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user');
    })
};
