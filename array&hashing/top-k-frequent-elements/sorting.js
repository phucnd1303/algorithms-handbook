class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const counts = new Map();

    for (let num of nums) {
      counts.set(num, (counts.get(num) || 0) + 1);
    }

    return [...counts.keys()]
      .sort((a, b) => counts.get(b) - counts.get(a))
      .slice(0, k);
  }
}

const solution = new Solution();
const result = solution.topKFrequent([1, 2, 2, 3, 3, 3], 2);
console.log(result);
