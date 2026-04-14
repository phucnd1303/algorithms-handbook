class Solution {
  isPalindrome(s) {
    let newStr = '';

    for (let c of s) {
      if (c.match(/[a-zA-Z0-9]/)) {
        newStr += c.toLowerCase();
      }
    }

    const result = newStr === newStr.split('').reverse().join('');

    return result;
  }
}

const solution = new Solution();
const result = solution.isPalindrome('A man, a plan, a canal: Panama');
console.log(result);
