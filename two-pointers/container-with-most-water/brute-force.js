class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let result = 0;

    for (let i = 0; i < heights.length; i++) {
      for (let j = i + 1; j < heights.length; j++) {
        result = Math.max(result, Math.min(heights[i], heights[j]) * (j - i));
      }
    }

    return result;
  }
}

const solution = new Solution();
const result = solution.maxArea([1, 7, 2, 5, 4, 7, 3, 6]);
console.log(result);
