let age = parseInt(prompt("Введіть свій вік:"));

if (age < 0) {
    console.log("Невірний вік");
} else if (age <= 18) {
    console.log("Ви ще не повнолітній");
} else {
    console.log("Ви стали дорослим");
}
age=18;
