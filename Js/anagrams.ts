// function isAnagram(s, t) {
//     let answer = true;
//     let sMap = new Map();
//     let tMap = new Map();

//     if (s.length !== t.length) return false;

//     for (let i = 0; i < s.length; i++) {
//         if (sMap.has(s[i])) {
//             sMap.set(s[i], sMap.get(s[i]) + 1);
//         } else {
//             sMap.set(s[i], 1)
//         }
//         if (tMap.has(t[i])) {
//             tMap.set(t[i], tMap.get(t[i]) + 1);
//         } else {
//             tMap.set(t[i], 1)

//         }
//     }

//     sMap.forEach((value, key) => {
//         if (!tMap.has(key) || (tMap.has(key) && tMap.get(key) !== value)) answer = false;
//     })

//     return answer;
// };


function isAnagram(s, t) {
    let charArray = new Array(26).fill(0);

    if (s.length !== t.length) return false;

    for (const c of s) {
        charArray[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    for (const c of t) {
        if (charArray[c.charCodeAt(0) - 'a'.charCodeAt(0)] === 0) return false;

        charArray[c.charCodeAt(0) - 'a'.charCodeAt(0)] -= 1
    }

    return true;
}


// console.log(isAnagram("car", "rat"));
console.log(isAnagram("aacc", "ccac"));