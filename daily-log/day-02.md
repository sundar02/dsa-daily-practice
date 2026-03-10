# 📅 Day 02 – DSA Practice

**Date:** 2026-03-10
**Topic:** Sliding Window
**Problem:** Longest Substring Without Repeating Characters
**Difficulty:** Medium

---

# 🧠 Problem Statement

Given a string `s`, find the length of the **longest substring without repeating characters**.

Example:

Input:

```
s = "abcabcbb"
```

Output:

```
3
```

Explanation: The answer is `"abc"`.

---

# 💡 Approach – Sliding Window

The **Sliding Window** technique uses two pointers to represent a window of elements in a sequence.

Steps:

1. Maintain two pointers `left` and `right`.
2. Expand the window by moving `right`.
3. If a duplicate character appears:
   - Move `left` until the window becomes valid.

4. Track the maximum window length.

This avoids brute force (`O(n²)`) and solves the problem in **linear time**.

---

# ⚙️ Algorithm

1. Create a `Set` to store characters in the current window.
2. Initialize `left = 0`.
3. Iterate `right` through the string.
4. If character already exists in the set:
   - Remove characters from the left until duplicate is removed.

5. Update maximum window length.

---

# 💻 TypeScript Implementation

```ts
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

// Example
console.log(lengthOfLongestSubstring('abcabcbb'));
```

---

# ⏱ Complexity Analysis

**Time Complexity:**
O(n)

Each character is visited at most twice.

**Space Complexity:**
O(min(n, m)) where `m` is the charset size.

---

# 🧩 Key Concepts Learned

- Sliding Window technique
- Two pointer strategy
- HashSet for fast lookup
- Window expansion and contraction

---

# 🔥 Reflection

Sliding Window is commonly used in problems involving:

- Longest substring
- Minimum window substring
- Maximum sum subarray
- Fixed-size window problems

Mastering this pattern helps solve many **array and string optimization problems** efficiently.
