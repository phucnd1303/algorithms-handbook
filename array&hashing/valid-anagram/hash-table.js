class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const count = Array(26).fill(0);

    for (let index = 0; index < s.length; index++) {
      count[s.charCodeAt(index) - 'a'.charCodeAt(0)]++;
      count[t.charCodeAt(index) - 'a'.charCodeAt(0)]--;
    }

    for (let index = 0; index < count.length; index++) {
      if (count[index] !== 0) {
        return false;
      }
    }

    return true;
  }
}

const solution = new Solution();
const firstResult = solution.isAnagram('anagram', 'nagaram');
const secondResult = solution.isAnagram('rat', 'car');

console.log(`[anagram, nagaram] is anagram: ${firstResult}`);
console.log(`[rat, car] is anagram: ${secondResult}`);
