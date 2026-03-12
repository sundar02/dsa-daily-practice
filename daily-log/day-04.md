# 📅 Day 04 – DSA Practice

**Date:** 2026-03-12
**Topic:** Arrays / Dynamic Programming
**Problem:** Maximum Subarray (Kadane’s Algorithm)
**Difficulty:** Medium

---

# 🧠 Problem Statement

Given an integer array `nums`, find the **contiguous subarray** (containing at least one number) that has the **largest sum**, and return its sum.

Example:

```
Input:
nums = [-2,1,-3,4,-1,2,1,-5,4]

Output:
6
```

Explanation:

```
Subarray [4,-1,2,1] has the largest sum = 6
```

---

# 💡 Approach

A brute-force approach would consider **all possible subarrays** and compute their sums.

However, this results in a **time complexity of O(n²)**.

Instead, we use **Kadane’s Algorithm**, which optimizes the solution to **O(n)** using a dynamic programming idea.

Key intuition:

At every index, we decide whether to:

- **Start a new subarray from the current element**
- **Extend the existing subarray**

This is done using:

```
currentSum = max(nums[i], currentSum + nums[i])
```

If the running sum becomes **negative**, it will only reduce future sums, so we reset it.

---

# ⚙️ Algorithm

1. Initialize `currentSum` and `maxSum` with the first element.
2. Traverse the array starting from index `1`.
3. Update the running sum:

```
currentSum = max(nums[i], currentSum + nums[i])
```

4. Update the maximum sum:

```
maxSum = max(maxSum, currentSum)
```

5. Return `maxSum`.

---

# 💻 TypeScript Implementation

```ts
export function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
```

---

# ⏱ Complexity Analysis

**Time Complexity:**
O(n) — We traverse the array once.

**Space Complexity:**
O(1) — Only constant extra variables are used.

---

# 📝 Key Concepts Learned

- Kadane’s Algorithm
- Dynamic Programming optimization
- Running sum technique
- Transforming brute force `O(n²)` into `O(n)`

---

# 🔥 Reflection

The **Maximum Subarray** problem introduces **Kadane’s Algorithm**, a powerful technique used to efficiently solve problems involving **contiguous subarrays**.

This pattern appears in many variations such as:

- Maximum Product Subarray
- Maximum Circular Subarray
- Maximum Sum Rectangle (2D extension)

Understanding Kadane’s algorithm strengthens intuition for **dynamic programming and prefix-based optimization problems** often asked in coding interviews.
