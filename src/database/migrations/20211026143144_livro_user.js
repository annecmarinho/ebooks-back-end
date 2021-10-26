exports.up = function(knex) {
    return knex.schema.createTable('livro_user', function(table){
        table.string('book_id').primary().notNullable();
        table.foreign("book_id").references("book_id").inTable("livro");
        table.string('user_id').primary().notNullable();
        table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
        table.string('título').primary().notNullable();
        table.string('autor').primary().notNullable();

     });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("livro_user");
};
