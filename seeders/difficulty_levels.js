'use strict';
// const faker = require('faker');

module.exports = {
    up :async (queryInterface, Sequelize)=>{

        await queryInterface.sequelize.query("ALTER TABLE difficulty_levels AUTO_INCREMENT = 1;");


    var levels = [ 'Beginner','Medium','Average', 'Standard', 'Intermediate'];
   var new_data = []
  for(var i = 0 ; i < levels.length; i++){
      new_data.push({name : levels[i]});
  }
      return queryInterface.bulkInsert('difficulty_levels', new_data,{} );
  },

  down :  (queryInterface, Sequelize) =>{
      return queryInterface.bulkDelete('difficulty_levels', );
  }
};
