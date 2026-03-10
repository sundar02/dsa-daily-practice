import { describe, it, expect } from 'vitest';
import { twoSum } from './twoSum.js';

describe('twoSum', () => {
  it('should return correct indices', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
