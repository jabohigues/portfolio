import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild(NgxTypedJsComponent) typed!: NgxTypedJsComponent;

  constructor() {}

  ngOnInit(): void {}
}
