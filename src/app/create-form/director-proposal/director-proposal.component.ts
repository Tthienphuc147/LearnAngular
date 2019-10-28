import { FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PackageService } from '../../shared/service/package.service';
import { FormService } from 'src/app/shared/service/form.service';

@Component({
  selector: 'app-director-proposal',
  templateUrl: './director-proposal.component.html',
  styleUrls: ['./director-proposal.component.css']
})
export class DirectorProposalComponent implements OnInit {

  directorProposalForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private fs: PackageService,
    private forms: FormService

  ) { }

  ngOnInit() {
    this.createForm();


  }
  ngOnDestroy() {
    this.fs.Data.directorProposal = this.directorProposalForm.value;

  }
  createForm() {

    this.directorProposalForm = this.fb.group({
      isAgreed: new FormControl(this.fs.Data.directorProposal.isAgreed),
      reason: new FormControl(this.fs.Data.directorProposal.reason),
      dateS: new FormControl(this.fs.Data.directorProposal.dateS),
      expectedDate: new FormControl(this.fs.Data.directorProposal.expectedDate)

    });
  }
  saveAndNext() {
    // tslint:disable-next-line:max-line-length
    this.forms.submit().subscribe((data) => {
      console.log(data);
    });
  }

}
