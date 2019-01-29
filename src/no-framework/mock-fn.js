require('../__no-framework-mocks__/utils');
const utilsPath = require.resolve('../utils');
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils');
require.cache[utilsPath] = require.cache[mockUtilsPath];

const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('ceva', 'ceva1');
assert.strictEqual(winner, 'ceva');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['ceva', 'ceva1'],
  ['ceva', 'ceva1'],
]);

delete require.cache[utilsPath];
