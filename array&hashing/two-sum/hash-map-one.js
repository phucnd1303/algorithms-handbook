class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i <= nums.length; i++) {
      const diff = target - nums[i];

      if (prevMap.has(diff)) {
        return [prevMap.get(diff), i];
      }

      prevMap.set(nums[i], i);
    }

    return [];
  }
}

const solution = new Solution();
const result = solution.twoSum([2, 7, 11, 15], 17);

console.log(result);
