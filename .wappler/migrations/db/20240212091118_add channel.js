
exports.up = function(knex) {
  return knex.schema
    .createTable('user_channel', async function (table) {
      table.increments('channel_id');
      table.string('channelname');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('pagecontent_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user_channel')
};
