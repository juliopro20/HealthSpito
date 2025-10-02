import { Component } from '@angular/core';
import { Footer } from '../../../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pharmacy-onboarding',
  imports: [Footer, CommonModule, MatIconModule],
  templateUrl: './pharmacy-onboarding.html',
  styleUrl: './pharmacy-onboarding.css'
})
export class PharmacyOnboarding {
  formPresent = 'step1';

  changeTab(isPresent: string) {
    this.formPresent = isPresent;
  }

  handleSignUp() {
    // Implement sign-up logic here
    console.log('Sign up process initiated');
  }
}
