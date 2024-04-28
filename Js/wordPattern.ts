function wordPattern(pattern, s) {
    let mapper = new Map();
    let mapperR = new Map();
    const sArray = s.split(" ");

    if (sArray.length !== pattern.length) return false;


    for (let i = 0; i < pattern.length; i++) {
        if (mapper.has(pattern[i]) && mapper.get(pattern[i]) !== sArray[i]) return false;
        if (mapperR.has(sArray[i]) && mapperR.get(sArray[i]) !== pattern[i]) return false;
        mapper.set(pattern[i], sArray[i]);
        mapperR.set(sArray[i], pattern[i]);
    };
    return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
console.log(wordPattern("aba", "dog cat cat"));
console.log(wordPattern("abc", "b c a"));
console.log(wordPattern("aaa", "aa aa aa aa"));
