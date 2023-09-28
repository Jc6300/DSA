/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
    const result1 = Array.from(new Set(nums1.filter( num => !nums2.includes(num))))
    const result2 = Array.from(new Set(nums2.filter( num => !nums1.includes(num))))
    return [result1, result2]
};

