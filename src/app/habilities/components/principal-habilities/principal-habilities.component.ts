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
    { title: 'Node.js', img: 'logoNodejs' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
