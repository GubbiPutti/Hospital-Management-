import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.css'
})
export class DoctorFormComponent 
{
  model: any = []; // Object to hold form data
  onSubmit() {
    // Implement the logic to handle form submission here
    console.log('Form submitted with data:', this.model);
  }
}
