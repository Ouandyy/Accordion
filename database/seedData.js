const dbs = require('./index.js');
var faker = require('faker');


dbs.UserQA.sync({force: true })
  .then( () => { console.log('QA table sync') })
  .catch( (err) => { console.error('userqa sync error', err) 
});

dbs.ProductOverview.sync({force: true })
  .then( () => { console.log('Product table sync') })
  .catch( (err) => { console.error('product table fail')
});

dbs.Dimension.sync({force: true })
  .then( () => { console.log('Dimension sync success') })
  .catch( (err) => { console.error('Dimension sync failed', err)
});

ranNumGen = () => {
  return (Math.random() * 95) + 5
};

ranNumBox = () => {
  return (Math.random() * 5) + 1
}

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
       sentence: faker.lorem.paragraph(),
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
        width: ranNumGen(),
        depth: ranNumGen(),
        height: ranNumGen(),
        additionInfo: faker.lorem.sentence(),
        numberOfBoxes: ranNumBox(),
        packageWeight: ranNumGen(),
        care: faker.lorem.paragraph()
      })
    }
  };

  userQAdata();
  productData();
  dimensionGen();