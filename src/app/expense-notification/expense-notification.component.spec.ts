import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseNotificationComponent } from './expense-notification.component';

describe('ExpenseNotificationComponent', () => {
  let component: ExpenseNotificationComponent;
  let fixture: ComponentFixture<ExpenseNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
