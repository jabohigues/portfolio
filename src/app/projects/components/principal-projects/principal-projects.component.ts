import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/global/mocks/mock-projects';

@Component({
  selector: 'app-principal-projects',
  templateUrl: './principal-projects.component.html',
  styleUrls: ['./principal-projects.component.scss'],
})
export class PrincipalProjectsComponent implements OnInit {
  projects = PROJECTS;

  constructor() {}

  ngOnInit(): void {}
}
