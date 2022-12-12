import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-habilities',
  templateUrl: './principal-habilities.component.html',
  styleUrls: ['./principal-habilities.component.scss'],
})
export class PrincipalHabilitiesComponent implements OnInit {
  habilities = [
    { title: 'Angular', img: 'logoAngular' },
    { title: 'TypeScript', img: 'logoTypescript' },
    { title: 'JavaScript', img: 'logoJS' },
    { title: 'HTML', img: 'logoHTML' },
    { title: 'CSS', img: 'logoCSS' },
    { title: 'jQuery', img: 'logoJQuery' },
    { title: 'Node.js', img: 'logoNodejs' },
    { title: 'Express', img: 'logoExpress' },
    { title: 'Prisma', img: 'logoPrisma' },
    { title: 'Java', img: 'logoJava' },
    { title: 'MySQL', img: 'logoMySQL' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
