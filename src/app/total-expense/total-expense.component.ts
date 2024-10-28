import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DoCheck, Input } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-total-expense',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-expense.component.html',
  styleUrl: './total-expense.component.css',
})
export class TotalExpenseComponent implements AfterViewInit {
  @Input() reciveExpenses: any[] = [];
  constructor(private service: NotificationService) {}
  ngAfterViewInit() {
    this.service.addMonthexpense(this.getCurrentMonthExpenses());
    this.service.addYearexpense(this.getCurrentYearExpenses());
  }

  gettotalExpenses(): number {
    return this.reciveExpenses.reduce(
      (total, reciveExpenses) => total + reciveExpenses.amount,
      0
    );
  }
  getCurrentMonthExpenses(): number {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    return this.reciveExpenses
      .filter((expense) => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate.getMonth() === currentMonth &&
          expenseDate.getFullYear() === currentYear
        );
      })
      .reduce((total, expense) => total + expense.amount, 0);
  }


  getCurrentYearExpenses(): number {

    const currentYear = new Date().getFullYear();

    return this.reciveExpenses
      .filter((expense) => {
        const expenseDate = new Date(expense.date);
        return (
          expenseDate.getFullYear() === currentYear
        );
      })
      .reduce((total, expense) => total + expense.amount, 0);
  }
}
