
exports.up = function(knex) {
  return knex.schema
    .dropTable('user_channel')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('user_channel', async function (table) {
      table.increments('channel_id').primary().notNullable();
      table.string('channelname', 255);
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('pagecontent_id', 255);
      table.text('channeldescription');
      table.string('channelimage', 255);
      table.boolean('channeloffline').defaultTo(0);
    })
};
