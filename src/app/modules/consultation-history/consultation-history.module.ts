import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowConsultationHistoryComponent } from './components/show-consultation-history/show-consultation-history.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  {
    path: 'consultation-history',
    component: ShowConsultationHistoryComponent,
  },
];

@NgModule({
  declarations: [
    ShowConsultationHistoryComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise-fade' }),
  ]
})
export class ConsultationHistoryModule { }
