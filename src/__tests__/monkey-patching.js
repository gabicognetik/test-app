const thumbWar = require('../thumb-war');
const utils = require('../utils');

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  };
});

describe('test thumbWar', () => {
  it('should be equal', () => {
    const winner = thumbWar('ceva', 'ceva1');
    expect(winner).toEqual('ceva');
    expect(utils.getWinner).toHaveBeenCalledTimes(2);
    expect(utils.getWinner).toHaveBeenCalledWith('ceva', 'ceva1');
    expect(utils.getWinner.mock.calls).toEqual([
      ['ceva', 'ceva1'],
      ['ceva', 'ceva1'],
    ]);
    utils.getWinner.mockReset();
  });
});
