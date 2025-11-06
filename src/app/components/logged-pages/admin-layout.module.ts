import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faFilm, faFish } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoggedFooterComponent } from './logged-footer/logged-footer.component';
import { CalendarModule } from 'primeng/calendar';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [LoggedFooterComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FontAwesomeModule,
    NgbDatepickerModule,
    NgSelectModule,

    CalendarModule,
    ProgressBarModule,
  ],
  exports: [LoggedFooterComponent],
  providers: [],
})
export class AdminLayoutModule {
  constructor() {
    library.add(faFilm, faFish, faCoffee);
  }
}
