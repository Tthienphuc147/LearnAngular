import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login2FormComponent } from './login2-form.component';

describe('Login2FormComponent', () => {
  let component: Login2FormComponent;
  let fixture: ComponentFixture<Login2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
