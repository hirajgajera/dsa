// 125. Valid Palindrome

function isPalindrome(s) {
    const convertedS = removeNonAlphaNum(s.toLowerCase());
    let left = 0;
    let right = convertedS.length - 1;

    while (left < right) {
        if (convertedS[left] === convertedS[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};

function removeNonAlphaNum(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome(""));