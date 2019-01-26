
exports.up = function(knex, Promise) {
  knex.schema.createTable('chains', function (table) {
    table.increments();
    table.string('description');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('chains');

};
