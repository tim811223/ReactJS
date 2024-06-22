import _ from 'lodash';
import { expect, test } from '@jest/globals';
import { getPrimeNumbers } from 'getPrimeNumbers';

test('prime numbers from 1 to 1000', () => {
  expect(getPrimeNumbers(1000)).toEqual(solution(1000));
});

const solution = n => {
  const primes = [];
  const testAndAddPrime = n => {
    const maxDivisor = Math.floor(Math.sqrt(n));
    for (let p of primes.filter(p => p <= maxDivisor))
      if (n % p === 0) return false;
    primes.push(n);
    return true;
  };
  return [2, ... _.range(3, n + 1, 2)].filter(testAndAddPrime);
};
