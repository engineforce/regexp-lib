import { findMatches } from '../src/findMatches';

test('findMatches pass', () => {
  const matches = findMatches(/o/, 'hello world');
  expect(JSON.stringify(matches)).toBe(JSON.stringify([['o'], ['o']]));
});
