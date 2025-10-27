let scores = [85, 92, 78, 90, 88];

// scores.forEach((score, index) => {
//     console.log(`Score ${index + 1}: ${score}`);
// });

scores.push(95); // Add a new score to the end of the array
scores.unshift(80); // Add a new score to the beginning of the array

scores.pop(); // Remove the last score from the array
scores.shift(); // Remove the first score from the array
console.log("Updated Scores:", scores);

// const score2 =scores.map((valuee, index) => {
//     return valuee + 5;
    
// });

// console.log("Scores after adding 5 points:", score2);

const filterUpdate = scores.filter((valuee) => {
    return valuee >= 90;
});

console.log("Điểm trên 90:", filterUpdate);

let user = {
    name: "Alice",
    age: 20,
    major: "Computer Science"
}

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
for (let value of Object.values(user)) {
    console.log(value);
}
