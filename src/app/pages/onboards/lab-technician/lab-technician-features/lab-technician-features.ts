import { Component, DOCUMENT, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Footer } from '../../../../components/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lab-technician-features',
  imports: [CommonModule, Footer],
  templateUrl: './lab-technician-features.html',
  styleUrl: './lab-technician-features.css'
})
export class LabTechnicianFeatures {
    featuresArray = [
    {icon: 'onboards-icons1.png', text: 'Appointment Schedulling'},
    {icon: 'onboards-icons2.png', text: 'Patient profile and Account'},
    {icon: 'telemedicine.png', text: 'Telemedicine Services'},
    {icon: 'onboards-icons4.png', text: 'Health Information'},
    {icon: 'onboards-icons5.png', text: 'Emergency Services'},
    {icon: 'onboards-icons6.png', text: 'News and Events'},
    {icon: 'onboards-icons7.png', text: 'Contact Information'},
    {icon: 'onboards-icons8.png', text: 'Insurance and Billing Information'},
    {icon: 'feedback.png', text: 'Feedback Mechanism'},
    {icon: 'united.png', text: 'Collaboration Features'},
    {icon: 'analytics.png', text: 'Reporting and Analytics'},
    {icon: 'prescription.png', text: 'Prescription Management'}
  ]
    //onboards navigations
  
    router = inject(Router)
    document = inject(DOCUMENT); 
  
    onBoardLabTechnician() {
      this.router.navigate(['/lab-technician-onboarding']).then(() => {
        this.document.defaultView?.scrollTo(0, 0); 
      });
    }
}
