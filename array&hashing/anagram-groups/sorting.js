class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const result = {};
    for (let i = 0; i < strs.length; i++) {
      const orderedCharacters = strs[i].split('').sort().join('');

      if (!result[orderedCharacters]) {
        result[orderedCharacters] = [];
      }

      result[orderedCharacters].push(strs[i]);
    }

    console.log(result);

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
