
exports.up = function(knex) {
    return knex.schema.createTable('livro', function(table){
        table.string('book_id').primary().notNullable();
        table.string('título').notNullable();
        table.string('autor').notNullable();
        table.string('autor').notNullable();

     });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("livro");
};
