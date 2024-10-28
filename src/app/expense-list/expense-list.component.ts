import { CommonModule } from '@angular/common';
import { RecursiveAstVisitor } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent {
  alert:boolean = false;
  @Input() reciveExpenses: any[] = JSON.parse(
    localStorage.getItem('expenses') || '[]'
  );

  filterExpenses: any[] = [];
  ngOnInit(){
    this.filterExpenses = this.reciveExpenses
  }
  


 
  get category() {
    const category = this.reciveExpenses.map((exp) => exp.category);
    return [...new Set(category)];
  }


  filtercategory(category: any) {
    if (category === 'All') {
      this.filterExpenses = this.reciveExpenses;
    } else {
      this.filterExpenses = this.reciveExpenses.filter(
        (exp) => exp.category === category
      );
    }

  }


  delete(index: number) {
    this.reciveExpenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(this.reciveExpenses));
    this.alert = true;
  }


}
