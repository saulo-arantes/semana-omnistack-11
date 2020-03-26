exports.up = knex => {
  return knex.schema.createTable('ngos', table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('state', 2).notNullable();
  });
};

exports.down = knex => knex.schema.dropTable('ngos');
