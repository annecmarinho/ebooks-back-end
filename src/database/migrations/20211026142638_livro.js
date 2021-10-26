
exports.up = function(knex) {
    return knex.schema.createTable('livro', function(table){
        table.string('book_id').primary().notNullable();
        table.string('título').primary().notNullable();
        table.string('autor').primary().notNullable();

     });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("livro");
};
