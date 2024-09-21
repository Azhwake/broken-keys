// Good Luck 💪🏾
function brokenKeys(correct, typed) {
    let broken = [];
    
    // Loop through the correct phrase
    for (let i = 0; i < correct.length; i++) {
        // If the character doesn't match, add to broken list if it's not already there
        if (correct[i] !== typed[i] && !broken.includes(correct[i])) {
            broken.push(correct[i]);
        }
    }
    
    return broken;
}

// Test cases
console.log(brokenKeys("fikrcamp bootcamp", "fikrcomp boorcamp")); // ➞ ["a", "t"]
console.log(brokenKeys("good night", "gppd night"));               // ➞ ["o"]
