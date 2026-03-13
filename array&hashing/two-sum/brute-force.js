class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
      for (let j = 1; j <= nums.length; j++) {
        const sumTwoNumbers = nums[i] + nums[j];

        if (sumTwoNumbers == target) {
          return [i, j];
        }
      }
    }
  }
}

const solution = new Solution();
const result = solution.twoSum([2, 7, 11, 15], 17);
