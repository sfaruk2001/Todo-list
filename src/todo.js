
//consider checklist and notes functionality

export default class ToDo {

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    }

    set taskTitle(name) {
        this.title = name;
    }

    set taskDescription(desc) {
        this.description = desc;
    }

    set taskDate(dt) {
        this.dueDate = dt;
    }

    //High, Medium, Low
    set taskPriority(level) {
        this.priority = level;
    }

    changeCompletionStatus() {
        if (this.isComplete === false) {
            this.isComplete === true;
        } else {
            this.isComplete === false;
        }
    } 


}

