class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let maxWaters = 0;
    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
      const h = Math.min(heights[left], heights[right]);
      const areas = h * (right - left);

      maxWaters = Math.max(maxWaters, areas);

      if (heights[left] <= heights[right]) {
        left++;
      } else {
        right--;
      }
    }

    return maxWaters;
  }
}

const solution = new Solution();
const result = solution.maxArea([1, 7, 2, 5, 4, 7, 3, 6]);
console.log(result);
