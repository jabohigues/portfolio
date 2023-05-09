import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttoncv',
  templateUrl: './buttoncv.component.html',
  styleUrls: ['./buttoncv.component.scss']
})
export class ButtoncvComponent implements OnInit {
  @Input() isHome: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
