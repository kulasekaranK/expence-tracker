import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  monthexpense:any = [];
  yearexpense:any = [];

  addMonthexpense(amount:number){
    this.monthexpense.push(amount);
  }
  addYearexpense(amount:number){
    this.yearexpense.push(amount);
  }

  
}
