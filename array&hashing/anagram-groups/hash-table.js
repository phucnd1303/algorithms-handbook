class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const result = {};

    for (let str of strs) {
      const count = new Array(26).fill(0);

      for (let c of str) {
        count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
      }

      const key = count.join(',');

      if (!result[key]) {
        result[key] = [];
      }

      result[key].push(str);
    }

    return Object.values(result);
  }
}

const solution = new Solution();
const result = solution.groupAnagrams([
  'eat',
  'tea',
  'tan',
  'ate',
  'nat',
  'bat',
]);
console.log(result);
