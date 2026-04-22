class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    let set = new Set();
    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length && i < sortedNums.length - 2; i++) {
      for (let j = i + 1; j < sortedNums.length; j++) {
        for (let k = j + 1; j < sortedNums.length; j++) {
          const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];

          if (sum == 0) {
            set.add(
              JSON.stringify([sortedNums[i], sortedNums[j], sortedNums[k]]),
            );
          }
        }
      }
    }

    return Array.from(set).map((item) => JSON.parse(item));
  }
}

const solution = new Solution();
// const result = solution.threeSum([-1, 0, 1, 2, -1, -4]);
const result = solution.threeSum([0, 0, 0, 0, 0, 0]);
console.log(result);
