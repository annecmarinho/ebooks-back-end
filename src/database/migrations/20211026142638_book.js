
exports.up = function(knex) {
    return knex.schema.createTable('book', function(table){
        table.string('book_id').primary().notNullable();
        table.string('título').notNullable();
        table.string('autor').notNullable();
        table.string('capa').notNullable();
        table.string('descrição').notNullable();
        

     });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("book");
};
