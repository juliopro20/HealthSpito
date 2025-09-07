import { CommonModule } from '@angular/common';
import { Component, DOCUMENT, inject } from '@angular/core';
import { Footer } from '../../../../components/footer/footer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-feature',
  imports: [CommonModule, Footer],
  templateUrl: './patient-feature.html',
  styleUrl: './patient-feature.css'
})
export class PatientFeature {
  
  featuresArray = [
    {icon: 'onboards-icons1.png', text: 'Appointment Schedulling'},
    {icon: 'onboards-icons2.png', text: 'Patient profile and Account'},
    {icon: 'onboards-icons3.png', text: 'Use AI for Diagnosis'},
    {icon: 'onboards-icons4.png', text: 'Health Information'},
    {icon: 'onboards-icons5.png', text: 'Emergency Services'},
    {icon: 'onboards-icons6.png', text: 'News and Events'},
    {icon: 'onboards-icons7.png', text: 'Contact Information'},
    {icon: 'onboards-icons8.png', text: 'Insurance and Billing Information'},
    
  ]
    //onboards navigations
  
    router = inject(Router)
    document = inject(DOCUMENT); 
  
    onBoardPatient() {
      this.router.navigate(['/patient-onboarding']).then(() => {
        this.document.defaultView?.scrollTo(0, 0); 
      });
    }
}
