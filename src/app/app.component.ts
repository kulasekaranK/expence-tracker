import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { TotalExpenseComponent } from './total-expense/total-expense.component';
import { ExpenseNotificationComponent } from './expense-notification/expense-notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ExpenseFormComponent,
    ExpenseListComponent,
    TotalExpenseComponent,
    ExpenseNotificationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  expnses:any[]=JSON.parse(localStorage.getItem('expenses') || '[]');
  addExpense(expense:any){
    console.log(expense);
    this.expnses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(this.expnses));
    
  }

  
}
