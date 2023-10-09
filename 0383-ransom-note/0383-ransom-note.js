/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
 
    const ransomNoteFreq = {};
    const magazineFreq = {};


    for (const char of ransomNote) {
        ransomNoteFreq[char] = (ransomNoteFreq[char] || 0) + 1;
    }

    for (const char of magazine) {
        magazineFreq[char] = (magazineFreq[char] || 0) + 1;
    }

    for (const char in ransomNoteFreq) {
        if (!magazineFreq[char] || magazineFreq[char] < ransomNoteFreq[char]) {
            return false;
        }
    }

    return true;
};
