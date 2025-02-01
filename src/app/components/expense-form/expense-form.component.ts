import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
})
export class ExpenseFormComponent {
  amount!: number;
  category!: string;
  date!: string;

  constructor(private expenseService: ExpenseService) {}

  addExpense() {
    this.expenseService.addExpense({
      amount: this.amount,
      category: this.category,
      date: this.date,
    });
    alert('Expense Added!');
    this.amount = 0;
    this.category = '';
    this.date = '';
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-form',
  imports: [],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent {

}
