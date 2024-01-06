import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  model: any = {}; // Your patient model

  onSubmit() {
    // Handle patient form submission logic here
    console.log('Patient form submitted:', this.model);
  }
}
