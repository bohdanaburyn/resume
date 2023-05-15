let age = parseInt(prompt("Enter your age:"));

if (age < 0) {
    console.log("Invalid age");
} else if (age <= 18) {
    console.log("You are not yet an adult");
} else {
    console.log("You have become an adult");
}

