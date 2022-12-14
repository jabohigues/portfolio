import { Component, OnInit } from '@angular/core';
import { TECNOLOGIES } from 'src/app/global/mocks/mock-tecnologies';

@Component({
  selector: 'app-principal-tecnologies',
  templateUrl: './principal-tecnologies.component.html',
  styleUrls: ['./principal-tecnologies.component.scss'],
})
export class PrincipalTecnologiesComponent implements OnInit {
  tecnologies = TECNOLOGIES;

  constructor() {}

  ngOnInit(): void {}
}
