import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public nombre: string = 'Capitán América';
  public arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public PI: number = Math.PI;
  public porcentaje: number = 0.234;
  public salario: number = 1234.5;
  public json = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };
  
  public valorDePromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  public fecha: Date = new Date();
}
