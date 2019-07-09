var Sequelize = require('sequelize');

const connection = new Sequelize('FECdb', 'root', '', {
  host:'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

connection 
  .authenticate()
  .then( () => {
    console.log('connection has been made')
  })
  .catch( (err) => {
    console.log('err at connection')
  });


const UserQA = connection.define('userqa', {
  user: {
    type: Sequelize.STRING,
    allowNull: false
  },
  question:{
    type: Sequelize.STRING,
    allowNull: false
  },
  answer:{
    type: Sequelize.STRING,
    allowNull: false
  },
  date:{
    type: Sequelize.DATEONLY,
    allowNull: false
  }
});



const ProductOverview = connection.define('overview', {
  sentence:{
    type:Sequelize.STRING,
    allowNull: false
  },
  keyDetail1:{
    type:Sequelize.STRING,
    allowNull: false
  },
  keyDetail2:{
    type:Sequelize.STRING,
    allowNull: false
  },
  keyDetail3:{
    type:Sequelize.STRING,
    allowNull: false
  },
  keyDetail4:{
    type:Sequelize.STRING,
    allowNull: false
  },
  keyDetail5:{
    type:Sequelize.STRING,
    allowNull: false
  },
  keyDetail6:{
    type:Sequelize.STRING,
    allowNull: false
  },
  keyDetail7:{
    type:Sequelize.STRING,
    allowNull: false
  },
  keyDetail8:{
    type:Sequelize.STRING,
    allowNull: false
  },
  keyDetail9:{
    type:Sequelize.STRING,
    allowNull: false
  },
  keyDetail10:{
    type:Sequelize.STRING,
    allowNull: false
  }
});

userQAdata = () => {
for (let i = 0; i <= 50; i++) {
  UserQA.create({
    user: faker.name.findName(),
    question: faker.lorem.sentences() + '?',
    answer: faker.lorem.sentences(),
    date: faker.date.past()
  })
}
};

productData = () => {
  for (let i = 0; i <= 50; i++) {
    ProductOverview.create({
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
    Dimension.create({
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





const Dimension = connection.define('dimension', {
  width: {
    type: Sequelize.INTEGER
  },
  depth: {
    type: Sequelize.INTEGER
  },
  height: {
    type: Sequelize.INTEGER
  },
  additionInfo: {
    type: Sequelize.STRING
  },
  numberOfBoxes: {
    type: Sequelize.INTEGER
  },
  packageWeight: {
    type: Sequelize.INTEGER
  },
  care: {
    type: Sequelize.STRING
  }
});


UserQA.sync({force: false })
  .then( () => { console.log('QA table sync') })
  .catch( (err) => { console.error('userqa sync error', err) 
});

ProductOverview.sync({force: false })
  .then( () => { console.log('Product table sync') })
  .catch( (err) => { console.error('product table fail')
});

Dimension.sync({force: false })
  .then( () => { console.log('Dimension sync success') })
  .catch( (err) => { console.error('Dimension sync failed', err)
});


module.exports = { UserQA, ProductOverview, Dimension };