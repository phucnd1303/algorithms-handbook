class Solution {
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const sSorted = s.split('').sort().join('');
    const tSorted = t.split('').sort().join('');

    return sSorted == tSorted;
  }
}

const solution = new Solution();
const firstResult = solution.isAnagram('anagram', 'nagaram');
const secondResult = solution.isAnagram('rat', 'car');

console.log(`[anagram, nagaram] is anagram: ${firstResult}`);
console.log(`[rat, car] is anagram: ${secondResult}`);
