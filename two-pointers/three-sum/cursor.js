class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    if (nums.length < 3) {
      return [];
    }

    let set = new Set();
    let firstIndex = 0;
    let secondIndex = firstIndex + 1;
    let thirdIndex = secondIndex + 1;
    const sortedNums = nums.sort((a, b) => a - b);
    const length = sortedNums.length;

    do {
      const sum =
        sortedNums[firstIndex] +
        sortedNums[secondIndex] +
        sortedNums[thirdIndex];

      if (sum == 0) {
        set.add(
          JSON.stringify([
            sortedNums[firstIndex],
            sortedNums[secondIndex],
            sortedNums[thirdIndex],
          ]),
        );
      }

      if (firstIndex == length - 3) {
        break;
      }

      if (secondIndex == length) {
        firstIndex++;
        secondIndex = firstIndex + 1;
        thirdIndex = secondIndex + 1;
      }

      if (thirdIndex == length) {
        secondIndex++;
        thirdIndex = secondIndex + 1;
      } else {
        thirdIndex++;
      }
    } while (firstIndex < length);

    return Array.from(set).map((item) => JSON.parse(item));
  }
}

const solution = new Solution();
const result = solution.threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);
