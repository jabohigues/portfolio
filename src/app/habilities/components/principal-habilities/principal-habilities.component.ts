import { Component, OnInit } from '@angular/core';
import { HABILITIES } from 'src/app/global/mocks/mock-habilities';

@Component({
  selector: 'app-principal-habilities',
  templateUrl: './principal-habilities.component.html',
  styleUrls: ['./principal-habilities.component.scss'],
})
export class PrincipalHabilitiesComponent implements OnInit {
  habilities = HABILITIES;

  constructor() {}

  ngOnInit(): void {}
}
