import { Component } from '@angular/core';
import { Footer } from '../../../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-health-care-onboarding',
  imports: [Footer, CommonModule, MatIconModule],
  templateUrl: './health-care-onboarding.html',
  styleUrl: './health-care-onboarding.css'
})
export class HealthCareOnboarding {
  formPresent = 'step1';

  changeTab(isPresent: string) {
    this.formPresent = isPresent;
  }

  handleSignUp() {
    // Implement sign-up logic here
    console.log('Sign up process initiated');
  }
}
