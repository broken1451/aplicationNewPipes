import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  /**
   * Transforma una URL en una URL segura para su uso en un contexto de confianza limitada.
   * 
   * @param value - La URL que se va a transformar en una URL segura.
   * @param args - Argumentos adicionales opcionales para la transformación.
   * @returns La URL transformada en una URL segura.
   */
  transform(value: unknown, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${value}`); // https://angular.io/api/platform-browser/DomSanitizer 
  }

}
