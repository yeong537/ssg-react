import { getRandomMinMax, loop } from './utils';

function rollDice() {
  return getRandomMinMax(1, 6);
}

loop(() => console.log(rollDice()), 20);
