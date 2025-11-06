import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert';
import { DataTablesModule } from 'angular-datatables';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { NgxCurrencyModule } from 'ngx-currency';
import { SpinnerLoaderComponent } from './spinner-loader/spinner-loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);
@NgModule({
  declarations: [AlertComponent, SpinnerLoaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule,
    NgxMaskModule.forRoot(),
    FullCalendarModule,
    NgxCurrencyModule,
    FontAwesomeModule,
  ],

  exports: [
    AlertComponent,
    DataTablesModule,
    NgxMaskModule,
    FullCalendarModule,
    NgxCurrencyModule,
    SpinnerLoaderComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
