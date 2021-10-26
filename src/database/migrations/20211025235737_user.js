
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
   table.string('user_id').primary().notNullable();
   table.string('nome').primary().notNullable();
   table.string('email').primary().notNullable();
   table.string('endereço').primary().notNullable();
   table.string('número').primary().notNullable();
   table.string('estado').primary().notNullable();
   table.string('cidade').primary().notNullable();

  });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
  
};
