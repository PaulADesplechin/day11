function worker(task, timeRequired) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const isLongTask = timeRequired > 1000;
            const message = isLongTask ? `${task} done (took a while)` : `${task} done`;
            resolve(message);
        }, timeRequired);
    });
}

async function factory(tasks) {
    const taskList = tasks.tasks;
    for (let i = 0; i < taskList.length; i++) {
        const currentTask = taskList[i];
        worker(currentTask.task, currentTask.timeRequired).then((result) => {
            console.log(result);
        });
    }
}

let tasks = {
    tasks: [
        { task: 'Teaching Physics', timeRequired: 600 },
        { task: 'Fill water tanks', timeRequired: 1200 },
        { task: 'Fix solar panels', timeRequired: 2000 },
    ],
};

factory(tasks);
