import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorProviders } from './interceptors';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    HttpInterceptorProviders
  ]
})
export class CoreModule { 
  constructor(){
    registerLocaleData(fr.default);
  }  
}
