import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarCaracter'
})
export class OcultarCaracterPipe implements PipeTransform {

  transform(value: string, ocultar: boolean): string {
    if (ocultar) {
      // una opcion
      let ocultarCaracter = '';
      for (let i = 0; i < value.length; i++) {
        ocultarCaracter += '*';
      }

      // otra opcion
      // ocultarCaracter = '*'.repeat(value.length);
      return ocultarCaracter;
    }
    return value;
  }

}
