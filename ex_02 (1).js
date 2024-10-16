function checkFuel(fuel = 5) {
    return new Promise((resolve, reject) => {
        fuel >= 9 ? resolve("Ready to launch") : reject("Please refill fuel");
    });
}

checkFuel(12)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
