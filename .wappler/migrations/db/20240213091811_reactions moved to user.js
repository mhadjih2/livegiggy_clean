
exports.up = function(knex) {
  return knex.schema
    .createTable('user_userlikes', async function (table) {
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('reaction', 1);
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user_userlikes')
};
