class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
      }
    }

    return maxProfit;
  }
}

const solution = new Solution();
const result = solution.maxProfit([10, 1, 5, 6, 7, 1]);
console.log(result);
