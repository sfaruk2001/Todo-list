
import ToDo from './todo.js';
import Project from './project.js';

let home = new Project("Home");
let task1 = new ToDo("Shihab's Birthday", "It's Shihab's 23rd Birthday on December 27th!", "12/27/2024", "High");
let task2 = new ToDo("Ifra's Birthday", "Ifra's 13th birthday!", "08/13/25", "Low");
let task3 = new ToDo("Tom's Birthday", "Tom's 25th birthday!", "12/15/2024", "High");
home.addTask(task1);
home.addTask(task2);
home.addTask(task3);
home.printTasks();
home.removeTask(task2);
home.printTasks();
