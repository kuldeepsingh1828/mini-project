import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checked = false;
  hide = true;
  form: FormGroup;
  submitted = false;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', Validators.required],
    })
  }
  get f() { return this.form.controls; }

  //form submission
  onSubmit() {
    console.log(this.form);
    this.submitted = true;
  }

  //Dialog box
  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponentDialog);

    dialogRef.afterClosed().subscribe(result => {
      this.checked = result;
    });
  }
}



@Component({
  selector: 'register-component-dialog',
  templateUrl: './register.component-dialog.html',
})
export class RegisterComponentDialog { }
