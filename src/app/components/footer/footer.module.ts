import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, DialogModule, SharedModule],
  exports: [FooterComponent],
})
export class FooterModule {}
