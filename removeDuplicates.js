/* removeDuplicates
* Given a sorted array of integers remove all duplicate numbers
*
*
*/

var removeDuplicates = function(nums) {
    debugger;
    if(nums.length === 0) return 0;
    //track index of unique value
    let unique = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (unique === nums[i]) {
            nums.splice(i, 1);
            i--;
        } else {
            unique = nums[i];
        }
    }

    return nums.length;
};