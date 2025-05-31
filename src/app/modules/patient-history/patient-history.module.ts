import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPatientHistoryComponent } from './components/show-patient-history/show-patient-history.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  {
    path: 'patient-history',
    
    children: [
      {
        path: '',
        component: ShowPatientHistoryComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
    ShowPatientHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise-fade' }),
  ]
})
export class PatientHistoryModule { }
