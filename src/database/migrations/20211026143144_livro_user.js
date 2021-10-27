exports.up = function(knex) {
    return knex.schema.createTable('livro_user', function(table){
        table.string('book_id').notNullable();
        table
            .foreign("book_id")
            .references("book_id")
            .inTable("livro")
            .onDelete("cascade");

        table.string('user_id').notNullable();
        table
            .foreign("user_id")
            .references("user_id")
            .inTable("user")
            .onDelete("cascade");
     });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("livro_user");
};
