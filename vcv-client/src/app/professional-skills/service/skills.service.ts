import { Injectable } from '@angular/core';
import { Skills } from '../models/skills';
import { SkillElement } from '../models/skill-element';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

    skills = [
        new Skills(
            'Languages',
            [
                new SkillElement(
                    'Python',
                    'Proficent',
                    [
                        'Professionally: I have worked in 4 web applications using Python as a backend and in another project I wrote some script in Python to execute some processes such us upload of images.', 
                        'Non-professionally: I have worked in a few project that you can see in the Projects area. '
                    ]
                ),
                new SkillElement(
                    'TypeScript',
                    'Good',
                    [
                        'Professionally: I have worked in 4 web applications using Angular as frontend, using Angular 4, 6 and 7.',
                        'Non-professionally: I have worked in a few project that you can see in the Projects area. '
                    ]
                ),
                new SkillElement(
                    'Java',
                    'Medium',
                    [
                        'I practically studied the whole college career in Java.', 
                        'In my professional life I worked with Java in the Control Panel Project. There were some ETL that needed to client to upload some csv files, we generated portlets for Liferay to handle this situation and this portlets were written in Java.'
                    ]
                ),
                new SkillElement(
                    'JavaScript',
                    'Basic',
                    [
                        'In my professional life I worked a in the Control Panel Project. I had to code som functions in Javascript to implement some functions to handle the layout of the graphs in the Pentaho Dashboard.'
                    ]
                )
            ]
        ),
        new Skills(
            'Databases',
            [
                new SkillElement(
                    'MySQL',
                    'Good',
                    [
                        'Professionally: I have worked in 3 projects', 
                        'Non-professionally: I have two personal projects where I have choose MySQL as my database. The Shopping list and the CRM.'
                    ]
                ),
                new SkillElement(
                    'SQL Server',
                    'Good',
                    [
                        'I have worked professionally in two projects that used SQL Server.'
                    ]
                ),
                new SkillElement(
                    'Datastore',
                    'Medium',
                    [
                        'I have worked professionally in on project where Datastore was the database.'
                    ]
                ),
                new SkillElement(
                    'Firestore',
                    'Medium',
                    [
                        'I have worked professionally in on project where Firestore was the database.'
                    ]
                ),
                new SkillElement(
                    'Elasticsearch',
                    'Basic',
                    [
                        'I worked in a project where I was in charge to change the database from Datastore to Elasticsearh and all the backend.'
                    ]
                )
            ]
        ),
        new Skills(
            'Cloud',
            [
                new SkillElement(
                    'Compute Engine',
                    'Good',
                    [
                        'Professionally: I have worked in 2 projects where I had to deploy and worked with instances in Compute Engine (Linux and Windows Server)',
                        'Non-professionally: I have deployed lots of instances (I have done 2 Coursera courses where I have to deploy multiple instances) and I have one MySQL deployed in a Compute Engine instance.'
                    ]
                ),
                new SkillElement(
                    'App Engine',
                    'Good',
                    [
                        'Professionally: I have worked in 2 projects where the web application was deployed on App Engine.',
                        'Non-professionally: I have used App Engine Standard and Flexible for personal projects (Shopping list and CRM)'
                    ]
                ),
                new SkillElement(
                    'Datastore',
                    'Medium',
                    [
                        'I have worked professionally in on project where Datastore was the database.'
                    ]
                ),
                new SkillElement(
                    'Firestore',
                    'Medium',
                    [
                        'I have worked professionally in on project where Firestore was the database.'
                    ]
                ),
                new SkillElement(
                    'Kubernettes',
                    'Basic',
                    [
                        'Professionally: For one project, there were some web scrappers that were executed everyday, I created a Kubernettes cluster and deploy them with a Docker images and automate their execution.'
                    ]
                )
            ]
        ), ,
        new Skills(
            'Frameworks',
            [
                new SkillElement(
                    'Flask',
                    'Good',
                    [
                        'Professionally: I have worked in 3 projects where Flask was the framework choosen to develop the backend',
                        'Non-professionally:  I have worked in 1 project (CRM) where Flask was I choose Flask as the framework to develop the backend'
                    ]
                ),
                new SkillElement(
                    'Angular',
                    'Good',
                    [
                        'Professionally: I have worked in 4 web applications using Angular as frontend, using Angular 4, 6 and 7.',
                        'Non-professionally: I have worked in a few project that you can see in the Projects area.'
                    ]
                ),
                new SkillElement(
                    'Django',
                    'Basic',
                    [
                        'I have worked professionally in on project where Django was the development framework.'
                    ]
                )
            ]
        ),
        new Skills(
            'Virtualization',
            [
                new SkillElement(
                    'Docker',
                    'Good',
                    [
                        'Professionally: I have worked with Docker in 3 projects where I containerized The environment.',
                        'Non-professionally: I containerized the environment in my CRM project and I plan to do it for now on in all the projects.'
                    ]
                ),
                new SkillElement(
                    'Docker-compose',
                    'Good',
                    [
                        'Professionally: I have worked in 2 projects where I used docker-compose to orchestrate the containers with docker-compose.',
                        'Non-professionally: I have also used in my CRM project.'
                    ]
                ),
                new SkillElement(
                    'Vagrant',
                    'Medium',
                    [
                        'Professionally: I used Vagrant to build an Ubuntu image that configured a VPN and installed Remmina to allow me to access to the Production environment when needed to solve a bug.',
                    ]
                )
            ]
        ),
        new Skills(
            'Automation',
            [
                new SkillElement(
                    'Jenkins',
                    'Medium',
                    [
                        'Professionally: I have worked in one project where I had modify a pipeline to be able at the end to deploy the service in a Docker container remotely.',
                        'Non-professionally: In my CRM project I deployed a Jenkins server and create a pipeline that run the tests and deploy the app to App Engine.'
                    ]
                )
            ]
        ),
        new Skills(
            'Monitoring',
            [
                new SkillElement(
                    'NagiosXI',
                    'Basic',
                    [
                        'Professionally: I have just started to work in a project where I am going to use NagiosXI for infrastructure monitoring.'
                    ]
                )
            ]
        )
    ]


  constructor() { }

  getSkills() {
      return this.skills.map(skill => skill.name);
  }

  getSkill(skill: string): Skills {
      return this.skills.filter(skillElement => skillElement.name === skill)[0];
  }
}