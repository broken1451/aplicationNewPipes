import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): string {
  // transform(value: unknown, edad: number, activo: boolean, mensaje: string): string {
  transform(value: string, todas: boolean = true): string {
    // console.log({ value, args });
    // console.log({ value, todas });
    value = value.toString().toLowerCase();
    let nombres = value.split(' ');
    // console.log(nombres);
    if (todas) {
      nombres.map((nombre, index) => {
        // console.log(nombres[index]);
        nombres[index] = nombre[0].toUpperCase() + nombre.substring(1);
      });
      // console.log({ nombres });
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');
  }

}
