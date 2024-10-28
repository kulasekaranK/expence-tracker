
import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-expense-notification',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './expense-notification.component.html',
  styleUrls: ['./expense-notification.component.css'],
})
export class ExpenseNotificationComponent implements AfterViewInit{
  monthBudget: number = 0;
  yearBudget: number = 0;
  displaymonthBudget:number = JSON.parse(localStorage.getItem("monthBudget") || "0" );
  displayyearBudget:number = JSON.parse(localStorage.getItem("yearBudget") || "0" );
  alert:boolean = false;
  yalert:boolean = false;
  currentMonthExpense:number = 0;
  currentYearExpense:number = 0;

  constructor( private service:NotificationService){
   
    }
   

   ngAfterViewInit(): void {
      this.currentMonthExpense = this.service.monthexpense;
      this.currentYearExpense = this.service.yearexpense;
      this.alert = this.currentMonthExpense>this.displaymonthBudget;
      if(this.alert){
        setInterval(()=>{
          this.alert =false;
        },20000)
      }
      this.yalert = this.currentYearExpense> this.displayyearBudget;
      if(this.yalert){
        setInterval(()=>{
          this.yalert = false;
        },20000)
      }
 
    }
  mbudget() {
    localStorage.setItem('monthBudget', JSON.stringify(this.monthBudget));
    this.displaymonthBudget = this.monthBudget;
    this.alert = this.currentMonthExpense>this.displaymonthBudget;
      if(this.alert){
        setInterval(()=>{
          this.alert =false;
        },20000)
      }

  }
  ybudget(){
    localStorage.setItem("yearBudget", JSON.stringify(this.yearBudget));
    this.displayyearBudget = this.yearBudget;
    this.yalert = this.currentYearExpense> this.displayyearBudget;
      if(this.yalert){
        setInterval(()=>{
          this.yalert = false;
        },20000)
      }
  }
}
