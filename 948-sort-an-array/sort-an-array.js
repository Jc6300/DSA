var sortArray = function(nums) {
   const mergeSort = (arr, left, right) => {
            if (right - left <= 1) return;

            const mid = Math.floor((left + right) / 2);

            mergeSort(arr, left, mid);
            mergeSort(arr, mid, right);

            merge(arr, left, mid, right);
        };

   
        const merge = (arr, left, mid, right) => {
            let i = left, j = mid;
            const temp = [];

            while (i < mid && j < right) {
                if (arr[i] <= arr[j]) {
                    temp.push(arr[i++]);
                } else {
                    temp.push(arr[j++]);
                }
            }

            while (i < mid) temp.push(arr[i++]);
            while (j < right) temp.push(arr[j++]);

            for (let k = 0; k < temp.length; k++) {
                arr[left + k] = temp[k];
            }
        };

        mergeSort(nums, 0, nums.length);
        return nums;
    }
