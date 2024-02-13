
exports.up = function(knex) {
  return knex.schema
    .table('user_channel', async function (table) {
      table.boolean('channeloffline').defaultTo(0);
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user_channel', async function (table) {
      table.dropColumn('channeloffline');
    })
};
