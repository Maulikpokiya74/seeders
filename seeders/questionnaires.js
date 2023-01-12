'use strict';
// const faker = require('faker');

module.exports = {
    up :async (queryInterface, Sequelize)=>{

        await queryInterface.sequelize.query("ALTER TABLE questionnaires AUTO_INCREMENT = 1;");

    var levels = [
    ['-84 x 29 + 365 = ?', '-2071', '2436', '-2801', '2801', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['The smallest prime number is:', '2', '1', '3', '4', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['8597 - ? = 7429 - 4358', '5526', '5426', '5706', '5476', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['How many 3-digit numbers are completely divisible 6 ?', '150', '149', '151', '166', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['107 x 107 + 93 x 93 = ?', '20098', '19578', '19418', '21908', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['The sum of first 45 natural numbers is:', '1035', '1280', '2070', '2140', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['The smallest 3 digit prime number is:', '101', '103', '109', '113', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['72519 x 9999 = ?', '725117481', '674217481', '685126481', '696217481', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['The sum of first five prime numbers is:', '28', '18', '11', '26', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['5358 x 51 = ?', '273258', '273268', '273348', '273358', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['Which of the following is a prime number ?', '97', '93', '33', '81', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['The largest 4 digit number exactly divisible by 88 is:', '9944', '9768', '9988', '8888', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['What least number must be added to 1056, so that the sum is completely divisible by 23 ?', '2', '3', '18', '21', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['Which one of the following is not a prime number?', '91', '71', '61', '31', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['How many days are there in x weeks x days?', '8x', '7x2', '14x', '7', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['Today is Monday. After 61 days, it will be:', 'Saturday', 'Wednesday', 'Tuesday', 'Thursday', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['What was the day of the week on 17th June, 1998?', 'Wednesday', 'Monday', 'Tuesday', 'Thursday', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?', 'Friday', 'Sunday', 'Saturday', 'Wednesday', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['If selling price is doubled, the profit triples. Find the profit percent.', '100', '66/3', '105/3', '120', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:', 'Rs. 698', 'Rs. 650', 'Rs. 690', 'Rs. 700', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:54:10', '2022-11-12 16:54:10'],
    ['Which word does NOT belong with the others?', 'mayonnaise', 'parsley', 'basil', 'dill', 1, 'Global', 5, 5, 10, 0, '', 1, 1, '2022-11-12 16:58:34', '2022-11-12 16:58:34']
    ];

    var new_data = []
  for(var i = 0 ; i < levels.length; i++){
      new_data.push({
  question : levels[i][0],
  correct_answer : levels[i][1],
  wrong_answer_1 : levels[i][2],
  wrong_answer_2 : levels[i][3],
  wrong_answer_3 : levels[i][4],
  difficulty_level_id : levels[i][5],
  regional_relevance : levels[i][6],
  time_for_question  : levels[i][7],
  time_for_answer : levels[i][8], 
  total_time : levels[i][9], 
  is_question_image  : levels[i][10],
  question_image : levels[i][11], 
  created_by : levels[i][12], 
  status : levels[i][13],

    });
  }
      return queryInterface.bulkInsert('questionnaires', new_data,{} );
  },

  down : async (queryInterface, Sequelize) =>{


      return queryInterface.bulkDelete('questionnaires', );
  }
};
