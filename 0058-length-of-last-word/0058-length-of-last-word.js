/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s)  => {
  const trimmedString = s.trim()

  const wordsArray = trimmedString.split(' ')
  const lastWord = wordsArray[wordsArray.length - 1] 

  return lastWord.length 
};