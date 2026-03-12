class Solution {
  hasDuplicate(nums) {
    nums.sort((a, b) => a - b);

    for (let index = 0; index < nums.length; index++) {
      if (nums[index] === nums[index + 1]) {
        return true;
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
