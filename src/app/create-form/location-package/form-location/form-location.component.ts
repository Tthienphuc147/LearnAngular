import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { LocationService } from "src/app/shared/service/location.service";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
  FormControl
} from "@angular/forms";
import { LocationPackage } from "src/app/shared/model/locationpackage.model";

@Component({
  selector: "app-form-location",
  templateUrl: "./form-location.component.html",
  styleUrls: ["./form-location.component.css"]
})
export class FormLocationComponent implements OnInit {
  formLocation: FormGroup;
  id: number = null;
  tenkhuvuc = "";
  mota = "";
  tinhthanh = "";
  gId: number = null;
  _id: string = "";

  @Input() formReady: LocationPackage;
  // @Output() event = new EventEmitter<LocationPackage>();
  constructor(
    private ls: LocationService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.generateId();
    console.log(this.formReady);
    this.formLocation = this.formBuilder.group({
      id: new FormControl(this.formReady.id),
      tenkhuvuc: [this.formReady.tenkhuvuc, Validators.required],
      mota: new FormControl(this.formReady.mota),
      tinhthanh: new FormControl(this.formReady.tinhthanh)
    });
  }
  onSubmit(form: LocationPackage) {
    if (this.formReady.id === null) {
      this.ls.addData(form).subscribe(
        res => {
          this.router.navigate(["/create-form/location"]);
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.ls.updateData(this.route.snapshot.params["id"], form).subscribe(
        res => {
          this.router.navigate(["/create-form/location"]);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
  deleteLocation(id) {
    this.ls.deleteData(id).subscribe(
      res => {
        this.router.navigate(["/create-form/location"]);
      },
      err => {
        console.log(err);
      }
    );
  }
  generateId() {
    this.ls.getData().subscribe(res => {
      console.log(res);
      const xMax = Math.max(...Array.from(res, o => o.id));
      this.gId = xMax;
    });
  }
}
