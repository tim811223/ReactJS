import { describe, expect, test } from '@jest/globals';
import { emailsByState } from 'emailsByState.js';
import profiles from '../profiles.json';

const solution = profiles =>
  profiles.reduce(
    (acc, p) => ({...acc, [p.state]: acc[p.state] ? [...acc[p.state], p.email] : [p.email]}),
    {}
  );

describe('test by state', () => {
  const expected = solution(profiles);
  const actual = emailsByState(profiles);

  Object.keys(expected).forEach(state =>
    test(state, () =>
      expect(actual[state]).toEqual(expect.arrayContaining(expected[state]))
    )
  );
});
