import { Component, DOCUMENT, inject } from '@angular/core';
import { Footer } from '../../../../components/footer/footer';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-researcher-feature',
  imports: [Footer, CommonModule],
  templateUrl: './researcher-feature.html',
  styleUrl: './researcher-feature.css'
})
export class ResearcherFeature {

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
  
    onBoardResearcher() {
      this.router.navigate(['/researcher-onboarding']).then(() => {
        this.document.defaultView?.scrollTo(0, 0); 
      });
    }

  
}
