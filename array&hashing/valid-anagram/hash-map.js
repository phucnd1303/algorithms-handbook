class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const countS = {};
    const countT = {};

    for (let index = 0; index < s.length; index++) {
      countS[s[index]] = (countS[s[index]] || 0) + 1;
      countT[t[index]] = (countT[t[index]] || 0) + 1;
    }

    for (const key in countS) {
      if (countS[key] !== countT[key]) {
        return false;
      }
    }

    return true;
  }
}

const solution = new Solution();
const firstResult = solution.isAnagram('anagram', 'ngaaram');
const secondResult = solution.isAnagram('rat', 'car');

console.log(`[anagram, nagaram] is anagram: ${firstResult}`);
console.log(`[rat, car] is anagram: ${secondResult}`);
