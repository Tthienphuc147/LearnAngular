import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorProposalComponent } from './director-proposal.component';

describe('DirectorProposalComponent', () => {
  let component: DirectorProposalComponent;
  let fixture: ComponentFixture<DirectorProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
