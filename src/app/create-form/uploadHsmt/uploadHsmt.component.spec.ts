/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UploadHsmtComponent } from './uploadHsmt.component';

describe('UploadHsmtComponent', () => {
  let component: UploadHsmtComponent;
  let fixture: ComponentFixture<UploadHsmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadHsmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadHsmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
