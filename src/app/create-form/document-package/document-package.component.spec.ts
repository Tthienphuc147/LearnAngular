import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentPackageComponent } from './document-package.component';

describe('DocumentPackageComponent', () => {
  let component: DocumentPackageComponent;
  let fixture: ComponentFixture<DocumentPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
