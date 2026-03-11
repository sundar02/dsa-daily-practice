# 📅 Day 03 – DSA Practice

**Date:** 2026-03-11
**Topic:** Arrays
**Problem:** Product of Array Except Self
**Difficulty:** Medium

---

# 🧠 Problem Statement

Given an integer array `nums`, return an array `answer` such that:

```
answer[i] = product of all elements of nums except nums[i]
```

Constraints:

- Do **not use division**
- Must run in **O(n)** time

Example:

```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

---

# 💡 Approach

We compute the result using **prefix products** and **suffix products**.

### Prefix

Product of all elements **to the left** of index `i`.

### Suffix

Product of all elements **to the right** of index `i`.

Steps:

1. Traverse left → right computing prefix products.
2. Traverse right → left computing suffix products.
3. Multiply prefix and suffix values.

This avoids division and keeps the solution **linear time**.

---

# ⚙️ Algorithm

1. Initialize result array with `1`.
2. Compute prefix product while iterating forward.
3. Compute suffix product while iterating backward.
4. Multiply both values to get final result.

---

# 💻 TypeScript Implementation

```ts
export function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}
```

---

# ⏱ Complexity Analysis

**Time Complexity:**
O(n)

**Space Complexity:**
O(1) (excluding output array)

---

# 🧩 Key Concepts Learned

- Prefix product technique
- Suffix product technique
- Avoiding division
- Efficient array traversal

---

# 🔥 Reflection

This problem demonstrates an important array pattern where we combine **forward and backward passes** to compute results efficiently.
The prefix/suffix technique is commonly used in many **array optimization problems**.
