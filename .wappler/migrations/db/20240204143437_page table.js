
exports.up = function(knex) {
  return knex.schema
    .createTable('page-content', async function (table) {
      table.increments('page-content_id');
      table.string('page-title');
      table.text('page-description');
      table.boolean('page-content-online');
      table.boolean('page-content-private');
      table.datetime('page_date_created').defaultTo(knex.fn.now());
      table.datetime('page-content_date_edited');
      table.datetime('event-start_datetime');
      table.datetime('event-end_datetime');
      table.decimal('latitude');
      table.decimal('longitude');
      table.boolean('geocoded');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('page-content')
};
