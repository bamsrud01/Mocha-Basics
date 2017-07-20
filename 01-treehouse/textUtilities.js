//  Import from Chai library
const expect = require('chai').expect;

//  Chai comparison
expect(true).to.be.true;

function titleCase(title) {
  return title;
}

expect(titleCase('the great mouse detective')).to.be.a('string');
