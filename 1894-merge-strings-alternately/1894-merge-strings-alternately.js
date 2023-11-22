/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */


const mergeAlternately = (word1,word2) =>{
    // empty string that will store the merged strings
    let result = ''
    //determine the maximum length between the two input strings.
    for(let i = 0; i <Math.max(word1.length,word2.length);i++){
        if(i < word1.length) result += word1[i]
        if(i < word2.length) result += word2[i]
    }
    //return merged string 
    return result
} 