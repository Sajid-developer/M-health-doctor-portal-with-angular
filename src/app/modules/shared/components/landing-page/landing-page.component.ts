import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  language: string = sessionStorage.getItem('appLanguageCode') || 'en';

  infoSlider: any[] = [
    {
      title: 'Consult with the doctor through voice and video',
      text: 'Skip the queue and consult with top doctors in the country. Book an appointment at your convenience and get your consultation on time.',
      buttonText: 'Book Now',
      imageUrl: './assets/images/landing/video_consultation1.png',
      imageAlt: 'slide-1',
    },
    {
      title: 'Consult with top Doctors',
      text: 'Skip the queue and consult with top doctors in the country. Book an appointment at your convenience and get your consultation on time.',
      buttonText: 'Book an Appointment',
      imageUrl: './assets/images/landing/consultation_with_top_doctors2.png',
      imageAlt: 'slide-2',
    },
    {
      title: 'Self Management',
      text: 'To improve your health awareness, get medical guidance from expert doctors. You can subscribe to different categories of Health Tips to get daily medical contents.',
      buttonText: 'Subscribe Now',
      imageUrl: './assets/images/landing/Self_management3.png',
      imageAlt: 'slide-3',
    },
  ];

  cardInfo: any[] = [
    {
      title: 'Obstetrics & Gynaecolog',
      text: 'Doctor specialized in Child Birth and women Diseases.',
      imageUrl: './assets/images/landing/Gynecology.jpg',
      imageAlt: 'Gynecology',
    },
    {
      title: 'Pediatric specialist',
      text: 'Doctor who is Specialized in Child Health.',
      imageUrl: './assets/images/landing/12. Paediatric Specialist.jpg',
      imageAlt: 'Paediatric Specialist',
    },
    {
      title: 'Orthopaedic Surgery',
      text: 'Doctor who specialized in the surgery and treatment of Bone ...',
      imageUrl: './assets/images/landing/10. Orthopedic Surgey.jpg',
      imageAlt: 'Orthopedic Surgey',
    },
    {
      title: 'Internal Medicine Special',
      text: 'A doctor who specialized adult diseases and manages chronic ...',
      imageUrl: './assets/images/landing/9. Internal Medicine special.jpg',
      imageAlt: 'Internal Medicine special',
    },
    {
      title: 'Neurologist',
      text: 'Doctor who is specialized in the treatment of Neurological ...',
      imageUrl: './assets/images/landing/Neurologist.jpg',
      imageAlt: 'Neurologist',
    },
    {
      title: 'Family Medicine Specialist',
      text: 'Doctor specialized in the treatment of the whole family acro ...',
      imageUrl: './assets/images/landing/4. Family medicine specialis.jpg',
      imageAlt: 'Family medicine specialis',
    },
    {
      title: 'Ophthalmologist',
      text: 'Doctor who specialized treatment of eye Diseases.',
      imageUrl: './assets/images/landing/3. Ophthalmologist.jpg',
      imageAlt: 'Ophthalmologist',
    },
    {
      title: 'Cardiologist',
      text: 'Doctor who has the specialty to manage heart disease.',
      imageUrl: './assets/images/landing/1. Cardiologist.jpg',
      imageAlt: 'Cardiologist',
    },
    {
      title: 'Dermatologist',
      text: 'A doctor who specialized diseases of skin.',
      imageUrl: './assets/images/landing/Dermologist.jpg',
      imageAlt: 'Dermologist',
    },
    {
      title: 'Dentist',
      text: 'A doctor who treats oral health conditions.',
      imageUrl: './assets/images/landing/Dentist.jpg',
      imageAlt: 'Dentist',
    },
    {
      title: 'Urologist',
      text: 'A doctor who specializes in the study or treatment of the fu ...',
      imageUrl: './assets/images/landing/urologist.jpg',
      imageAlt: 'urologist',
    },
    {
      title: 'Nephrologist',
      text: 'A doctor who treats of the urinary system.',
      imageUrl: './assets/images/landing/7. Neurologist.jpg',
      imageAlt: 'Neurologist',
    },
    {
      title: 'Vascular Surgeon',
      text: 'A doctor who treats diseases of vascular system.',
      imageUrl: './assets/images/landing/Vusclar.jpg',
      imageAlt: 'Vascular',
    },
    {
      title: 'Pathologist',
      text: 'A specialist who examines body issues.',
      imageUrl: './assets/images/landing/Pathologist.jpg',
      imageAlt: 'Pathologist',
    },
    {
      title: 'Gynaecologist',
      text: 'A doctor specialized in Child Birth and women Diseases.',
      imageUrl: './assets/images/landing/Gynecology.jpg',
      imageAlt: 'Gynecology',
    },
    {
      title: 'General physician',
      text: 'Doctor who treats general medical ilneses.',
      imageUrl: './assets/images/landing/General physician.jpg',
      imageAlt: 'General physician',
    },
  ]

  changeLanguage(event: any) { }

  handleLogin() {
    console.warn("Login button clicked.");
  }

  handleRegister() {
    console.warn("Sign up button clicked.");
  }
}
