import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  description = '';
  category = '';
  amount: number | null = null;
  date: string = '';
  alert:boolean = false ;
  @Output() addedexpenses = new EventEmitter();
  submit() {

    this.addedexpenses.emit({
      description: this.description,
      category: this.category,
      amount: this.amount,
      date: this.date
    });
    this.description = '';
    this.category = '';
    this.amount = null;
    this.date = '';
    this.alert= true;
    
  }
}
