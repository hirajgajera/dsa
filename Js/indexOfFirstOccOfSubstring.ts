class Solution {
    strStr(haystack, needle) {
        let hl = haystack.length;
        let nl = needle.length;
        let nIndex = 0;
        for (let i = 0; i < hl; i++) {
            if (haystack[i] === needle[nIndex]) {
                console.log("found", haystack[i], "at i = ", i);
                nIndex++;
            } else {
                console.log("Before Count not find, i = ", i, ", nIndex = ", nIndex);

                i = i - nIndex;

                nIndex = 0;

                console.log("After Count not find, i = ", i, ", nIndex = ", nIndex);
            }

            if (nIndex === nl) {
                return i - nl + 1;
            }
        }

        return -1;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.strStr("hello", "lllo")); // Output: 2
console.log(solution.strStr("aaaaa", "bba")); // Output: -1