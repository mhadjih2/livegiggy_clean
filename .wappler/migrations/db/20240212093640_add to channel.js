
exports.up = function(knex) {
  return knex.schema
    .table('user_channel', async function (table) {
      table.text('channeldescription');
      table.string('channelimage');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user_channel', async function (table) {
      table.dropColumn('channeldescription');
      table.dropColumn('channelimage');
    })
};
