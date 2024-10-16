function getID() {
    return Math.floor(Math.random() * 5000);
}

function assignID(machineName, newSeed, delay = 700) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const id = getID();
            resolve(`${machineName}: ${id}`);
        }, delay);
    });
}

assignID("Life support", 2, 1000).then((value) => {
    console.log(value);
});
