'use strict';
// const faker = require('faker');

module.exports = {
    up : async (queryInterface, Sequelize)=>{
      await queryInterface.sequelize.query("ALTER TABLE admins AUTO_INCREMENT = 1;");

 
      return queryInterface.bulkInsert('admins', [{
        user_name: 'admin',
        email : 'zleetz@mailinator.com',
        password : '7d9f138535357a1d0a80b6901494e696bfbc5ee8',
        contact_no : '7878747478',
        roles : '1',
        otp : '0',
        status : '1',
        created_at : new Date(),
        updated_at : new Date(),
      },
        
    ],{} );
    
  },

  down :  (queryInterface, Sequelize) =>{
      return queryInterface.bulkDelete('admins', );
  }
};
