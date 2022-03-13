function longestPalindrome(str){
  let max = [0, 1]
  
  for(let i = 0; i < str.length; i++){
    const evenPalindrome = getPalindromeSection(i - 1, i, str);
    const oddPalindrome = getPalindromeSection(i+1, i-1, str);
    
    const currMax = evenPalindrome[1] - evenPalindrome[0] > oddPalindrome[1] - oddPalindrome[0] ? evenPalindrome : oddPalindrome;
		max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax; 
  };
  return str.slice(max[0], max[1]);
};

function getPalindromeSection(left, right, str){
  
  while(left >= 0 && right < str.length){
    if(str[left] !== str[right]) break;
    left--
    right++;
  }
  
  return [left + 1, right]
}


longestPalindrome('ABABCecssdeeebbbbaaabbb')