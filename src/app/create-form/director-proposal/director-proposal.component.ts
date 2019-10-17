import { FormGroup, FormControl, FormBuilder ,AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-director-proposal',
  templateUrl: './director-proposal.component.html',
  styleUrls: ['./director-proposal.component.css']
})
export class DirectorProposalComponent implements OnInit {

  directorProposalForm: FormGroup;
  minDate = new Date(2019, 10, 7);
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  
  }
  createForm() {

    this.directorProposalForm = this.fb.group({
      isAgreed: new FormControl(),
      reason: new FormControl(),
      dateS: new FormControl(),
      expectedDate: new FormControl()

    });
  }
 
}
