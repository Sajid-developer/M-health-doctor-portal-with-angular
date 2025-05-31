import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { TimeSettingModule } from './modules/time-setting/time-setting.module';
import { ConsultationHistoryModule } from './modules/consultation-history/consultation-history.module';
import { AuthModule } from './modules/auth/auth.module';
import { PatientHistoryModule } from './modules/patient-history/patient-history.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SupportTicketModule } from './modules/support-ticket/support-ticket.module';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,

    AuthModule,
    DashboardModule,
    TimeSettingModule,
    ConsultationHistoryModule,
    PatientHistoryModule,
    SupportTicketModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
