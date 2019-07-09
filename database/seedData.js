const dbs = require('./index.js');
var faker = require('faker');

userQAdata = () => {
  for (let i = 0; i <= 50; i++) {
    dbs.UserQA.create({
      user: faker.name.findName(),
      question: faker.lorem.sentences() + '?',
      answer: faker.lorem.sentences(),
      date: faker.date.past()
    })
  }
  };
  
  productData = () => {
    for (let i = 0; i <= 50; i++) {
      dbs.ProductOverview.create({
       sentence: faker.lorem.sentence(),
       keyDetail1: faker.lorem.sentence(),
       keyDetail2: faker.lorem.sentence(),
       keyDetail3: faker.lorem.sentence(),
       keyDetail4: faker.lorem.sentence(),
       keyDetail5: faker.lorem.sentence(),
       keyDetail6: faker.lorem.sentence(),
       keyDetail7: faker.lorem.sentence(),
       keyDetail8: faker.lorem.words(),
       keyDetail9: faker.lorem.words(),
       keyDetail10: faker.lorem.words()
     })
   }
   };
  
  dimensionGen = () => {
    for (let i = 0; i < 50; i++) {
      dbs.Dimension.create({
        width: faker.random.number(),
        depth: faker.random.number(),
        height: faker.random.number(),
        additionInfo: faker.lorem.sentence(),
        numberOfBoxes: faker.random.number(),
        packageWeight: faker.random.number(),
        care: faker.lorem.paragraph()
      })
    }
  };

  userQAdata();
  productData();
  dimensionGen();