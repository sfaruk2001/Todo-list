
export default class Project {
    tasks = [];

    constructor(name) {
        this.name = name;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].title === task.title) {
                this.tasks.splice(i,1);
            }
        }
    }

    printTasks() {
        console.log("Your Tasks");
        for (let i = 0; i < this.tasks.length; i++) {
            console.log(this.tasks[i]);
        }
    }


}