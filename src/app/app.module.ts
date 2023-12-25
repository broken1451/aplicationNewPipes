import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
// import '@angular/common/locales/global/fr'; -- global aplicado a todos los componentes sin importar el modulo y ni usar la funcion registerLocaleData, instalando ng add @angular/localize
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { OcultarCaracterPipe } from './pipes/ocultar-caracter.pipe';

registerLocaleData(localeEs); 
registerLocaleData(localeFr); 
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    OcultarCaracterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: LOCALE_ID, // idiioma por defecto de la app
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
