class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let sortedStr = s.split('').sort().join('');
    const hasParentheses =
      sortedStr.includes('()') ||
      sortedStr.includes('{}') ||
      sortedStr.includes('[]');

    while (hasParentheses) {
      sortedStr = sortedStr.replace('()', '');
      sortedStr = sortedStr.replace('{}', '');
      sortedStr = sortedStr.replace('[]', '');

      return sortedStr === '';
    }
  }
}

const solution = new Solution();
const result = solution.isValid('([{}])');
console.log(result);
