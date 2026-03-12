class Solution {
  hasDuplicate(nums) {
    const numSet = new Set(nums);

    return numSet.size !== nums.length;
  }
}

const solution = new Solution();
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [1, 2, 3, 4, 5, 1];

const firstResult = solution.hasDuplicate(firstArray);
const secondResult = solution.hasDuplicate(secondArray);

console.log(`[${firstArray}] has duplicate: ${firstResult}`);
console.log(`[${secondArray}] has duplicate: ${secondResult}`);
