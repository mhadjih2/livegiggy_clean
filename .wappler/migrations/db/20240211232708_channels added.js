
exports.up = function(knex) {
  return knex.schema
    .createTable('channels', async function (table) {
      table.increments('channel_id');
      table.string('channelname');
      table.string('channeluser_id');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('videocreator_id').inTable('pagecontent_pagevideos');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('channels')
};
