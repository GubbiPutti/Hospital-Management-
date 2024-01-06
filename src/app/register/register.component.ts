import { Component } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor() {}

ngOnInit():void{}

registerForm = new FormGroup({
firstname :new FormControl("",Validators.required),
lastname :new FormControl(""),
email :new FormControl(""),
mobile :new FormControl(""),
gender :new FormControl(""),
pwd:new FormControl(""),
rpwd :new FormControl("")

  });

// registerForm = new FormGroup({
//   firstname: ['', Validators.required],
//   lastname: ['', Validators.required],
//   email: ['', [Validators.required, Validators.email]],
//   mobile: ['', Validators.required],
//   gender: ['m', Validators.required],
//   pwd: ['', [Validators.required, Validators.minLength(6)]],
//   rpwd: ['', [Validators.required, Validators.minLength(6)]]
// });

  registerSubmitted()
  {
    console.log(this.registerForm.value);
  }

}
