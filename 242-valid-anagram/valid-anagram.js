/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   //if strings are not the same length they cant be anagrams
        if(s.length !== t.length) return false
        
// creates objects to count char frequencies
        const countS = {}
        const countT = {}
// loop over each character in both strings
for(let i =0; i < s.length; i++){
 // Increment the count for the character in string s
    countS[s[i]] = (countS[s[i]] || 0) + 1
  // Increment the count for the character in string t
    countT[t[i]] = (countT[t[i]] || 0) + 1
}
// Compare the character counts between the two strings
for(const key in countS){
 // If any character count doesn't match, they're not anagrams
    if(countS[key] !== countT[key]){
        return false
    }
}
// Char counts match
return true
};