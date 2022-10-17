import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.typeWriter();
    setTimeout(this.typeWriter, this.velocidad);
  }
  typeWriter() {
    let parrafo = document.getElementById('welcome');
    if (this.i < 34) {
      console.log('entro');

      parrafo!.innerHTML += this.msg.charAt(this.i);
      this.i++;
      setTimeout(this.typeWriter, this.velocidad);
    }
  }
}
