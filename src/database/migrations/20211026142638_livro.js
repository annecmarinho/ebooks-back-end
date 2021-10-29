
exports.up = function(knex) {
    return knex.schema.createTable('book', function(table){
        table.string('book_id').primary().notNullable();
        table.string('título').notNullable();
        table.string('autor').notNullable();
        table.string('sinopse').notNullable();
        table.string('categoria').notNullable();
       });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("book");
};
