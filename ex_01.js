function promiseMe(promise) {
    if (typeof promise !== "string") {
        throw new Error("The input must be a string");
    }
    return new Promise((resolve) => {
        resolve(`I promise you to ${promise}`);
    });
}

promiseMe("fly to Mars").then((value) => {
    console.log(value);
});
