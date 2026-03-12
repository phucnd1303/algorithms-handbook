class Solution {
  hasDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }

    return false;
  }
}

const solution = new Solution();
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [1, 2, 3, 4, 5, 1];

const firstResult = solution.hasDuplicate(firstArray);
const secondResult = solution.hasDuplicate(secondArray);

console.log(`[${firstArray}] has duplicate: ${firstResult}`);
console.log(`[${secondArray}] has duplicate: ${secondResult}`);
