import { FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PackageService } from '../../shared/service/package.service';
import { FormService } from 'src/app/shared/service/form.service';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-director-proposal',
  templateUrl: './director-proposal.component.html',
  styleUrls: ['./director-proposal.component.css']
})
export class DirectorProposalComponent implements OnInit {

  directorProposalForm: FormGroup;
  dataUser;
  
  constructor(
    private fb: FormBuilder,
    private fs: PackageService,
    private forms: FormService,
    private ls:LoginService

  ) { }

  ngOnInit() {
    this.createForm();
    console.log(this.fs.Data.estimatedBuget.additionalNote);
    if (this.fs.Data.estimatedBuget.additionalNote == "") {
      this.directorProposalForm.disable();
  }
  this.getUserInfor();

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
  getUserInfor() {
    this.ls.getInfor(localStorage.getItem("userId")).subscribe(res => {
      console.log(res.result);
      // tslint:disable-next-line:no-string-literal
     this.dataUser=res.result;
    });
  }
  saveAndNext() {
    // tslint:disable-next-line:max-line-length
    this.forms.submit().subscribe((data) => {
      console.log(data);
    });
  }

}
