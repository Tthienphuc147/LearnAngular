import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-director-proposal',
  templateUrl: './director-proposal.component.html',
  styleUrls: ['./director-proposal.component.css']
})
export class DirectorProposalComponent implements OnInit {

  directorProposalForm: FormGroup;
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
      date: new FormControl(),
      expectedDate: new FormControl()

    });
  }

}
