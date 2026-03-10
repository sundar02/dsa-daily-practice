import { describe, it, expect } from 'vitest';
import { lengthOfLongestSubstring } from './slidingWindow.js';

describe('lengthOfLongestSubstring', () => {
  it('example case', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('all same characters', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('mixed case', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });
});
