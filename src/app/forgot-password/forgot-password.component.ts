import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  submitted = false;
  form: FormGroup;

  constructor(private forBuilder: FormBuilder) { }


  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.forBuilder.group({
      username: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
  }

}
