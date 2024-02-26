
exports.up = function(knex) {
  return knex.schema
    .createTable('rolearray', async function (table) {
      table.increments('rolearray_id');
      table.json('rolearray');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('rolearray')
};
