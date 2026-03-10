/**
 * Problem: Longest Substring Without Repeating Characters
 * Pattern: Sliding Window
 *
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 *
 * Example:
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: "abc"
 */
/**
 * Longest Substring Without Repeating Characters
 * Pattern: Sliding Window
 */

export function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
