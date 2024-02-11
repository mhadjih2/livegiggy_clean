
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.boolean('cookieconsent').defaultTo(0).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.string('cookieconsent', 255).defaultTo().alter();
    })
};
