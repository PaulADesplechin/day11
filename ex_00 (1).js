async function asyncFunc() {
    try {
        return "Hello World!";
    } catch (error) {
        console.log(error);
    }
}

asyncFunc().then(console.log);
