function containsNearbyDuplicate(nums, k) {
    const mapper = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (mapper.has(nums[i]) && (Math.abs(mapper.get(nums[i]) - i) <= k)) return true;
        mapper.set(nums[i], i);
    }

    return false;
};


console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));