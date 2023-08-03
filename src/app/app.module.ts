import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoComponent } from './components/producto/producto.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './pages/inicio/components/header/header.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgOptimizedImage } from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAr, 'es-AR');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ProductoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    NgOptimizedImage,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
