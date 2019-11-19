import { Component, OnInit, Input,Output, EventEmitter,} from "@angular/core";
import { LocationService } from "src/app/shared/service/location.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { LocationPackage } from "src/app/shared/model/locationpackage.model";

@Component({
  selector: "app-form-location",
  templateUrl: "./form-location.component.html",
  styleUrls: ["./form-location.component.css"]
})
export class FormLocationComponent implements OnInit {
  addForm: FormGroup;
  id: number = null;
  tenkhuvuc = "";
  mota = "";
  tinhthanh = "";

  @Input() formReady: LocationPackage;
  @Output() event = new EventEmitter<LocationPackage>();
  constructor(
    private ls: LocationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [null, Validators.required],
      tenkhuvuc: [null, Validators.required],
      mota: [null, Validators.required],
      tinhthanh: [null, Validators.required]
    });
  }
  onSubmit(form: LocationPackage) {
    // this.ls.addData(form).subscribe(
    //   res => {
    //     this.router.navigate(["/create-form/location"]);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    this.event.emit(form);
  }
  // deleteLocation(id) {
  //   this.ls.deleteData(id)
  //     .subscribe(res => {
  //         this.router.navigate(['/create-form/location']);
  //       }, (err) => {
  //         console.log(err);
  //       }
  //     );
  // }
}
