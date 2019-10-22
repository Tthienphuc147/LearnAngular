import { FormGroup, FormControl, FormBuilder ,AbstractControl } from '@angular/forms';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { PackageService } from '../../shared/service/package.service';

@Component({
  selector: 'app-director-proposal',
  templateUrl: './director-proposal.component.html',
  styleUrls: ['./director-proposal.component.css']
})
export class DirectorProposalComponent implements OnInit {

  directorProposalForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private fs: PackageService
  ) { }

  ngOnInit() {
    this.createForm();

  
  }
  ngOnDestroy() {
        this.fs.Data.directorProposal=this.directorProposalForm.value;
    
  }
  createForm() {

    this.directorProposalForm = this.fb.group({
      isAgreed: new FormControl(this.fs.Data.directorProposal.isAgreed),
      reason: new FormControl(this.fs.Data.directorProposal.reason),
      dateS: new FormControl(this.fs.Data.directorProposal.dateS),
      expectedDate: new FormControl(this.fs.Data.directorProposal.expectedDate)

    });
  }
 
}
