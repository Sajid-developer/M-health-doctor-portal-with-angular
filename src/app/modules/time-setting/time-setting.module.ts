import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetTimeSlotsComponent } from './components/set-time-slots/set-time-slots.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'time-setting',
    
    children: [
      {
        path: '',
        component: SetTimeSlotsComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
    SetTimeSlotsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class TimeSettingModule { }
