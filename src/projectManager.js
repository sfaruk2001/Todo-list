import Project from './project.js';
//don't know if i need a project manager

export default class ProjectManager {
    projects = [new Project('Home')];
    _currProject = this.projects[0];//keep track of selected obj

    addProject(project) {
        this.projects.push(project);
    }

    get currProject() {
        return this.currentProject;
    }

    set currProject(project) {
        this.currentProject = project;
    }

    printProjects() {
        console.log('Your Projects');
        for (let i = 0; i < this.projects.length; i++) {
            console.log(this.projects[i]);
        }
    }
}