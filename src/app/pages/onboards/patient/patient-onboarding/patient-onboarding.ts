import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Footer } from '../../../../components/footer/footer';

@Component({
  selector: 'app-patient-onboarding',
  imports: [CommonModule, MatIconModule, Footer],
  templateUrl: './patient-onboarding.html',
  styleUrls: ['./patient-onboarding.css']
})
export class PatientOnboarding {
  formPresent = 'step1';

  changeTab(isPresent: string) {
    this.formPresent = isPresent;
  }

  handleSignUp() {
    // Implement sign-up logic here
    console.log('Sign up process initiated');
  }
}