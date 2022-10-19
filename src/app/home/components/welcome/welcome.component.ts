import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  parrafo1: string = '¡Hola!';
  parrafo2: string = 'Soy Juan,';
  parrafo3: string = 'Desarrollador Web';
  i: number = 0;
  msg: string = '¡Hola!\nSoy Juan,\nDesarrollador Web';
  velocidad: number = 2;
  @ViewChild(NgxTypedJsComponent) typed!: NgxTypedJsComponent;

  constructor() {}

  ngOnInit(): void {}
}
