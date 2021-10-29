
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
   table.string('user_id').primary().notNullable();
   table.string('nome').notNullable();
   table.string('email').notNullable();
   table.string('endereço').notNullable();
   table.integer('número').notNullable();
   table.string('estado').notNullable();
   table.string('cidade').notNullable();
  //table.string('descrição').notNullable();

  });
};

exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
