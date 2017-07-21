//  Import from chai
const expect = require('chai').expect;

//  Test function to check for ship at coordinates
describe('checkForShip', function() {
  const checkForShip = require('../game_logic/ship_methods').checkForShip;

  it('should correctly report no ship at a given player\'s coordinate', function() {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        }
      ],
    };
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
});
