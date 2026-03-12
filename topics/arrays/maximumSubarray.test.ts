import { describe, it, expect } from 'vitest';
import { productExceptSelf } from './maximumSubarray.js';

describe('productExceptSelf', () => {
  it.each([
    { input: [1, 2, 3, 4], expected: [24, 12, 8, 6] },
    { input: [0, 1, 2, 3], expected: [6, 0, 0, 0] },
    { input: [0, 1, 2, 0], expected: [0, 0, 0, 0] },
    { input: [2, 3], expected: [3, 2] },
  ])('works for $input', ({ input, expected }) => {
    expect(productExceptSelf(input)).toEqual(expected);
  });
});
