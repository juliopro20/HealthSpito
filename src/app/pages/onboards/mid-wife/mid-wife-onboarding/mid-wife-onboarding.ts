import { Component } from '@angular/core';
import { Footer } from '../../../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mid-wife-onboarding',
  imports: [Footer, CommonModule, MatIconModule],
  templateUrl: './mid-wife-onboarding.html',
  styleUrl: './mid-wife-onboarding.css'
})
export class MidWifeOnboarding {
  formPresent = 'step1';

  changeTab(isPresent: string) {
    this.formPresent = isPresent;
  }

  handleSignUp() {
    // Implement sign-up logic here
    console.log('Sign up process initiated');
  }
}
