import { describe, it, expect } from 'vitest';
import { productExceptSelf } from './productExceptSelf.js';

describe('productExceptSelf', () => {
  it('example case', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it('handles zeros', () => {
    expect(productExceptSelf([0, 1, 2, 3])).toEqual([6, 0, 0, 0]);
  });
});
