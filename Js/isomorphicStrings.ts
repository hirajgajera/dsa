function isIsomorphic(s, t) {
    let charArrayS = new Array(26).fill(0);
    let charArrayT = new Array(26).fill(0);

    if (s.length !== t.length) return false;

    for (let i = 0; i < t.length; i++) {
        charArrayT[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] = s[i];
        charArrayS[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] = t[i];
    }
    console.log(charArrayS);
    console.log(charArrayT);


    for (let i = 0; i < t.length; i++) {
        if (charArrayT[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] !== 0 && charArrayT[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] !== s[i] || charArrayS[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] !== 0 && charArrayS[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] !== t[i]) {
            return false;
        }
    }



    return true;
};

// console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
// console.log(isIsomorphic("paper", "title"));
// console.log(isIsomorphic("badc", "baba"));