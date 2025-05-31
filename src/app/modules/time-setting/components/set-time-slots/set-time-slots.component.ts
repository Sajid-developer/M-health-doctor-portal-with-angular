// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-set-time-slots',
//   templateUrl: './set-time-slots.component.html',
//   styleUrls: ['./set-time-slots.component.scss']
// })
// export class SetTimeSlotsComponent {

// }

import { Component } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { minutesToHoursFormat } from 'src/app/helper/utility';

@Component({
  selector: 'app-set-time-slots',
  templateUrl: './set-time-slots.component.html',
  styleUrls: ['./set-time-slots.component.scss']
})
export class SetTimeSlotsComponent {
  timeSlotForm!: FormGroup;
  daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  numberOfSlotsInADay: number = 0;
  numberOfSlotsInADayArray: any[] = [];

  minutesToHoursFormat = minutesToHoursFormat;


  ngOnInit(){
    this.initilizeTimeSlotForm();
    this.getNumberOfSlotsInADay();
  }

  // Form initilizations start
  initilizeTimeSlotForm() {
    this.timeSlotForm = new FormGroup({
      slotDuration: new FormControl(30),
      fromDate: new FormControl('2024-04-15'),
      toDate: new FormControl('2024-04-21'),
      AvailabilitySlots: new FormControl([]),
    });
  }
  // Form initilizations end

  getNumberOfSlotsInADay() {
    let totalMinutesInADay: number = 1440;
    let slotDuration = +(this.timeSlotForm.value?.slotDuration);

    this.numberOfSlotsInADay = totalMinutesInADay / slotDuration;

    this.numberOfSlotsInADayArray = new Array(this.numberOfSlotsInADay).fill(0).map((_,index) => {
      let startTime = slotDuration * (index);
      let endTime = startTime + slotDuration;
      let res = {
        startTime,
        endTime,
      };
      
      return res;
    });
  }

  addSlot(slot: any, day: any){
    console.log("clicked slot", slot, day);
  }
}
