# 📅 Day 01 – DSA Practice

**Date:** 2026-03-09
**Topic:** Arrays / Hash Map
**Problem:** Two Sum
**Difficulty:** Easy

---

# 🧠 Problem Statement

Given an array of integers `nums` and an integer `target`, return the **indices of the two numbers** such that they add up to the target.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

---

# 💡 Approach

Use a **Hash Map** to store previously visited numbers.

Steps:

1. Iterate through the array.

2. For each number, compute the **complement**

   ```
   complement = target - nums[i]
   ```

3. Check if the complement exists in the map.

4. If it exists, return the indices.

5. Otherwise store the current number with its index.

This allows solving the problem in **one pass**.

---

# ⚙️ Algorithm

1. Create an empty map.
2. Traverse the array.
3. Compute the complement.
4. If complement exists → return indices.
5. Otherwise store current value in the map.

---

# 💻 TypeScript Implementation

```ts
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// Example
console.log(twoSum([2, 7, 11, 15], 9));
```

---

# ⏱ Complexity Analysis

**Time Complexity:**
O(n) — We traverse the array once.

**Space Complexity:**
O(n) — HashMap stores elements.

---

# 📝 Key Concepts Learned

- HashMap for fast lookup
- Complement-based search
- One-pass algorithm
- Reducing brute force `O(n²)` to `O(n)`

---

# 🔥 Reflection

Two Sum is a classic problem that introduces the **HashMap lookup technique**, which appears in many other problems such as:

- Subarray Sum Equals K
- Longest Substring Without Repeating Characters
- Two Sum II

Understanding this pattern helps solve many **array and hashing problems efficiently**.
