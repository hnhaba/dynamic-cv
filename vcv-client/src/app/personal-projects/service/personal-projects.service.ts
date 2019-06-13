import { Injectable } from '@angular/core';
import { PersonalProject } from '../models/personal-project';

@Injectable({
  providedIn: 'root'
})
export class PersonalProjectsService {

    projects = [
        new PersonalProject(
            'CRM',
            [
                'This is an example of a Customer Relationship Managment. The backend server is developed in Flask and it uses MySQL as database',
                'I used docker-compose and Docker to create a development environment easily shareable, so if anyone want to participate it just have to clone the project, start it with just one command (having Docker and docker-compose installed) and start coding.',
                'I implemented a CI/CD pipeline, using Jenkins to automate all the deploymentment. In this case the Jenkins pipeline run some test and the deploys the server in Google App Engine when changes are made in the master branch.'
            ],
            'Python, Flask, Docker, docker-compose, Jenkins, MySQL',
            'https://github.com/CarlosEspinoTimon/crm_service',
            ''
        ),
        new PersonalProject(
            'Virtual CV',
            [
                'In this roject I have created a virtual curriculum vitae where I can show information about me.',
                'Is developed in Angular 7 and deployed in PONER DONDE ESTAAAAAA. with BLAAAAA',
                'The main idea of this project is for me to practise Angular, but as was doing it I thought that I could do it in a way that anyone could just fill some information in some files and it will have this virtual cv.'
            ],
            'Angular 7',
            'https://github.com/CarlosEspinoTimon/vcv',
            'http://localhost:4200'
        ),
        new PersonalProject(
            'Shopping list',
            [
                'This is a project where I wanted to extract information about products from the supermarkets websites and offer it to the users to help them to do their grocery list as cheap as possible.',
                'It consisted in a web client written in Angular 6, a backend server written in Python (Flask), a MySQL instance deployed in Google Compute Engine and wome web scrappers written in Python.',
                'I even wrote an article in Medium about this that you can find in the articles section.'
            ],
            'Python, Flask, Angular 6, MySQL',
            'https://github.com/CarlosEspinoTimon/shopping_list',
            ''
        ),
        new PersonalProject(
            'Sort your classroom',
            [
                'This was my first project when I start studing the degree and learn how to program.',
                'I remember talking with my wife (a school teacher) and she was telling me about how complicated was sometimes to distribute her class. She needed to have homogeneous groups, taking into account thing like the maturity of the child, it capacities or if it were responsible or not.',
                'I decided to create a program where she would insert her students, giving each one some scores about Autonomy, Behavior and Capacities, then program asked how many groups you want to create and give you the solution.',
                'The program was written in Java, the language that I used during my degree and with which I learn to program, and it has even some tests writen in Junit'
            ],
            'Java',
            'https://github.com/CarlosEspinoTimon/sortYourClassroom',
            ''
        ),
    ]

    constructor() { }

    getProjects() {
        return this.projects.map(project => project.name);
    }

    getProject(project: string): PersonalProject {
        return this.projects.filter(projectElement => projectElement.name === project)[0];
    }
}