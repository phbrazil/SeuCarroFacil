import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './components/shared/shared.module';
import { AdminLayoutModule } from './components/logged-pages/admin-layout.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/logged-pages/home/home.component';
import { registerLocaleData, CurrencyPipe } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { faFilm, faFish } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { InterceptorModule } from './_services/interceptor.module';
import { SearchModule } from './components/search/search.module';
import { ResultsModule } from './components/results/results.module';
import { ServicesModule } from './components/services/services.module';
import { AboutModule } from './components/about/about.module';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { FooterModule } from './components/footer/footer.module';
import { DetailsComponent } from './components/vehicles/details/details.component';

registerLocaleData(localePT);

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, DetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminLayoutModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    InterceptorModule,
    SearchModule,
    ResultsModule,
    ServicesModule,
    AboutModule,
    MenubarModule,
    SidebarModule,
    FooterModule,
  ],
  exports: [],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    library.add(faFilm, faFish);
  }
}
