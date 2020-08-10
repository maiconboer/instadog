
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Dog1',
          email: 'dog1@hotmail.com',
          password: '123456'
        },
        {
          username: 'Dog2',
          email: 'dog2@hotmail.com',
          password: '102030'
        },
      ]);
    });
};
