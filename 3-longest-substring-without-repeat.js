function lengthOfLongestSubstring(s) {
  if (s.length <= 1) return s.length;

  let max = 0;
  let str = '';

  for (let i = 0; i < s.length; i++) {

    let letter = s[i];
    let index = str.indexOf(letter);

    if (index !== -1) {
      str = str.slice(index + 1)
    }

    str = str + letter

    max = Math.max(str.length, max)

  }


  return max;
}

str = "abcabcbb"
const fn = lengthOfLongestSubstring(str);

console.log(fn);
