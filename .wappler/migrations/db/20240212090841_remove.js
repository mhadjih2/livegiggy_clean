
exports.up = function(knex) {
  return knex.schema
    .dropTable('channels')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('channels', async function (table) {
      table.increments('channel_id').primary().notNullable();
      table.string('channelname', 255);
      table.string('channeluser_id', 255);
    })
};
