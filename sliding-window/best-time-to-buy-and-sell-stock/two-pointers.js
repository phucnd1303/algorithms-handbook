class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let left = 0;
    let right = 0;
    let maxProfit = 0;

    while (left < prices.length) {
      if (prices[left] < prices[right]) {
        maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
      } else {
        left = right;
      }

      right++;
    }

    return maxProfit;
  }
}

const solution = new Solution();
const result = solution.maxProfit([10, 1, 5, 6, 7, 1]);
console.log(result);
