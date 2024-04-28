function summaryRanges(nums) {
    const answer = [];

    for (let i = 0; i < nums.length; i++) {
        let begin = nums[i];
        while (i + 1 < nums.length && nums[i + 1] - nums[i] === 1) {
            console.log("i", i);

            i++;
        }
        let end = nums[i];

        if (begin === end)
            answer.push(`${begin}`);
        else answer.push(`${begin}->${end}`);
    }

    return answer;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));