function initializeMachine(machineName, timeRequired, message = "initialized") {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${machineName} ${message}`);
        }, timeRequired * 1000);
    });
}

initializeMachine("Spaceship", 4, "ready to fly").then((value) => {
    console.log(value);
});
