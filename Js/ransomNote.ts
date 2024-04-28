// function canConstruct(ransomNote, magazine) {

//     let ransomMap = new Map();
//     let magazineMap = new Map();

//     for (let i = 0; i < ransomNote.length; i++) {
//         let found = ransomMap.has(ransomNote[i]);
//         ransomMap.set(ransomNote[i], found ? ransomMap.get(ransomNote[i]) + 1 : 1)
//     }

//     for (let i = 0; i < magazine.length; i++) {
//         let found = magazineMap.has(magazine[i]);
//         magazineMap.set(magazine[i], found ? magazineMap.get(magazine[i]) + 1 : 1)
//     }

//     console.log(ransomMap);
//     console.log(magazineMap);

//     let answer = true;

//     ransomMap.forEach((value, key) => {
//         if (!magazineMap.has(key) || magazineMap.get(key) !== value) answer = false;
//     });

//     return answer;
// };


// console.log(canConstruct("a", "b"));
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aab"));   

function canConstruct(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    const alphabetsCounter = new Array(26).fill(0);



    for (const c of magazine) {
        alphabetsCounter[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (const c of ransomNote) {
        if (alphabetsCounter[c.charCodeAt(0) - 'a'.charCodeAt(0)] === 0) return false;
        alphabetsCounter[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    return true;
}
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));  