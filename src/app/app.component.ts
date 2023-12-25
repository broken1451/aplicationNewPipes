import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public nombre: string = 'Capitán América';
  public nombre2: string = 'jUaN pAbLo';
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
  public idioma: string = 'es';
  public videoUrl: string = 'https://www.youtube.com/embed/fSKQRDq3RkM?si=k0gfhdGgMfqU9zFA';
  public activar: boolean = true;

  changeIdioma(idioma: any) { 
    this.idioma = idioma;
  }

  ocultarMostrar() {
    this.activar = !this.activar;
  }
}
