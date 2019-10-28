import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedBudgetComponent } from './estimated-budget.component';



describe('EstimatedBudgetComponent', () => {
  let component: EstimatedBudgetComponent;
  let fixture: ComponentFixture<EstimatedBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatedBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
