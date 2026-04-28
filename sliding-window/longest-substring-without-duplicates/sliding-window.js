class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }

      set.add(s[right]);
      result = Math.max(result, right - left + 1);
    }

    return result;
  }
}

const solution = new Solution();
const result = solution.lengthOfLongestSubstring('abcabcbb');
console.log(result);
