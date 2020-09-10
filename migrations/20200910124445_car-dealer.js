
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 17).unique().notNullable();
      tbl.string('Make', 10).notNullable();
      tbl.string('Model', 10).notNullable();
      tbl.float('Mileage', 10).notNullable();

      tbl.string('Transmission');
      tbl.string('TitleStatus');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars');
};
