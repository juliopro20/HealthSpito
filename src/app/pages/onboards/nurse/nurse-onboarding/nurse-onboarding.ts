import { Component } from '@angular/core';
import { Footer } from '../../../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nurse-onboarding',
  imports: [Footer, CommonModule, MatIconModule],
  templateUrl: './nurse-onboarding.html',
  styleUrl: './nurse-onboarding.css'
})
export class NurseOnboarding {
  formPresent = 'step1';

  changeTab(isPresent: string) {
    this.formPresent = isPresent;
  }

  handleSignUp() {
    // Implement sign-up logic here
    console.log('Sign up process initiated');
  }
}
