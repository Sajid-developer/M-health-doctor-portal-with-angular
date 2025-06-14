import { Component } from '@angular/core';
import { fontAwesomeSolidIcons } from 'src/assets/font-awsome-icons/icons.font-awesome-solid';

@Component({
  selector: 'app-open-consultation',
  templateUrl: './open-consultation.component.html',
  styleUrls: ['./open-consultation.component.scss']
})
export class OpenConsultationComponent {
  searchIcon = fontAwesomeSolidIcons.faMagnifyingGlass;
  angleRightIcon = fontAwesomeSolidIcons.faAngleDoubleRight;
  rotateIcon = fontAwesomeSolidIcons.faRotate;
  handIcon = fontAwesomeSolidIcons.faHands;

  currentConsultPage: number = 1;
  totalPages: number = 0;
  PAGE_SIZE: number = 8;
  totalConsults: number = 0;

  tableDataInfo: any[] = [
    {
      caseId:'546',
      patientName:'Farhan Akhtar',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'612',
      patientName:'Faisel User',
      consultationType:'Paid',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'RESCHEDULE',
      buttonText2:'CLINIC VISIT',
    },
    {
      caseId:'834',
      patientName:'Aabid Shaan',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'853',
      patientName:'Maksud Akhtar',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'728',
      patientName:'Farhan Ansari',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'647',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'649',
      patientName:'Kamil Noor',
      consultationType:'Paid',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'647',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'649',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'RESCHEDULE',
      buttonText2:'VIDEO',
    },
    {
      caseId:'754',
      patientName:'Kamil Noor',
      consultationType:'Paid',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'RESCHEDULE',
      buttonText2:'CLINIC VISIT',
    },
    {
      caseId:'647',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'649',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'647',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'647',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'649',
      patientName:'Kamil Noor',
      consultationType:'Paid',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'RESCHEDULE',
      buttonText2:'VIDEO',
    },
    {
      caseId:'647',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'649',
      patientName:'Kamil Noor',
      consultationType:'Paid',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'649',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'754',
      patientName:'Kamil Noor',
      consultationType:'Paid',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'RESCHEDULE',
      buttonText2:'CLINIC VISIT',
    },
    {
      caseId:'647',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'649',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
    {
      caseId:'647',
      patientName:'Kamil Noor',
      consultationType:'Free',
      consultDate:'2024-02-27',
      consultTime:'14:00 To 14:30',
      charge:'USD 0.00',
      status:'Booked',
      buttonText1:'',
      buttonText2:'VIDEO',
    },
  ];

  onPageChange(pageNumber: number) {
    this.currentConsultPage = pageNumber;
    console.warn(`You are on page => ${pageNumber}`);
  }
}
