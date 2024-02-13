
exports.up = function(knex) {
  return knex.schema
    .createTable('pagecontent_liveevents', async function (table) {
      table.increments('liveevents_id');
      table.string('eventname');
      table.string('venueaddress');
      table.string('venuecity');
      table.string('venuename');
      table.datetime('eventstartdate');
      table.datetime('eventendtime');
      table.decimal('latitude');
      table.decimal('longitude');
      table.boolean('geocoded').defaultTo(0);
      table.integer('pagecontent_id').unsigned();
      table.foreign('pagecontent_id').references('pagecontent_id').inTable('pagecontent').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pagecontent_liveevents')
};
