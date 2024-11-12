
import ToDo from './todo.js';
import Project from './project.js';
import ProjectManager from './projectManager.js';

let pm = new ProjectManager();
console.log(pm);
pm.printProjects();



let f1 = new Project("Folder 1");
let f2 = new Project("Folder 2");
let task1 = new ToDo("Shihab's Birthday", "It's Shihab's 23rd Birthday on December 27th!", "12/27/2024", "High");
let task2 = new ToDo("Ifra's Birthday", "Ifra's 13th birthday!", "08/13/25", "Low");
let task3 = new ToDo("Tom's Birthday", "Tom's 25th birthday!", "12/15/2024", "High");
f1.addTask(task1);
f1.addTask(task2);
f2.addTask(task3);

pm.addProject(f1);
pm.addProject(f2);

pm.printProjects();
pm.currProject = f2;
console.log(pm.currProject);

/** 
home.printTasks();
home.removeTask(task2);
home.printTasks();
*/