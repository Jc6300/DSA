/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
*/

// function merge(nums1, m, nums2, n) {
//     // Set pointers for nums1 and nums2
//     let p1 = m - 1;
//     let p2 = n - 1;

//     // Set pointer for the end of the merged array
//     let p = m + n - 1;

//     // While there are still elements to compare
//     while (p1 >= 0 && p2 >= 0) {
//         // Compare the two values and insert the larger value at the end of the merged array
//         if (nums1[p1] < nums2[p2]) {
//             nums1[p--] = nums2[p2--];
//         } else {
//             nums1[p--] = nums1[p1--];
//         }
//     }

//     // Add any remaining elements from nums2 to the merged array
//     while (p2 >= 0) {
//         nums1[p--] = nums2[p2--];
//     }
// }
 
 function merge(nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => a - b);
};
