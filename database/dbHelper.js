const dbs = require('./index.js');

const findAllQA = (cb) => {
  dbs.UserQA.findAll({})
    .then((data) => {cb.status(200).send(JSON.stringify(data, null, 4))})
    .catch((err) => {console.error('error at qa', err)})
};

const findAllProduct = (cb) => {
  dbs.ProductOverview.findAll({})
    .then((data) => {cb.status(200).send(JSON.stringify(data, null, 4))})
    .catch((err) => {console.error('error at product', err)})
};

const findAllDimension = (cb) => {
  dbs.Dimension.findAll()
    .then((data) => {cb.status(200).send(JSON.stringify(data, null, 4))})
    .catch((err) => {console.error('error at dimension', err)})
};

module.exports = { findAllQA, findAllProduct, findAllDimension }