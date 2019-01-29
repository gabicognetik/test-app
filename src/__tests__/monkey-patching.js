const thumbWar = require('../thumb-war');
const utils = require('../utils');

describe('test thumbWar', () => {
  it('should be equal', () => {
    jest.spyOn(utils, 'getWinner');
    utils.getWinner.mockImplementation((p1, p2) => p1);
    const winner = thumbWar('ceva', 'ceva1');
    expect(winner).toEqual('ceva');
    expect(utils.getWinner).toHaveBeenCalledTimes(2);
    expect(utils.getWinner).toHaveBeenCalledWith('ceva', 'ceva1');
    expect(utils.getWinner.mock.calls).toEqual([
      ['ceva', 'ceva1'],
      ['ceva', 'ceva1'],
    ]);
    utils.getWinner.mockRestore();
  });
});
