import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, CdkAccordionModule, MatIconModule, Footer],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
    // arrays of the questions...
  accordion1 = [
  {
    key: 1,
    question1: 'Can HealthSpito diagnose medical conditions?',
    asnwer1: 'Yes, the AI can assist in identifying potential conditions based on data analysis or information provided by users, but it does not provide definitive diagnoses. A qualified healthcare provider must confirm any diagnosis.'
  },
  { 
    key: 2, 
    question1: 'How can I find a valide health center near me?', 
    asnwer1: 'You can use our location-based search and health center recommendation system to find certified clinics and health centers affiliated with our platform near you.'
  },
  { 
    key: 3, 
    question1: 'Do you offer bulk purchasing discounts?', 
    asnwer1: 'Yes, we offer special pricing and discounts for bulk orders of medical products or supplies. Please contact our support or sales team for more information.'
  },
  { 
    key: 4, 
    question1: 'Can I compare different Medical products on your site?', 
    asnwer1: 'Absolutely! Our platform allows you to compare specifications, prices, and features of various medical products and supplies to find the best fit for your healthcare needs.'
  }
];

accordion2 = [
  {
    key: 5,
    question2: 'What if I need technical support for a Medical product?',
    answer2: 'We have a dedicated support team available to assist you with any technical questions, usage guides, or issues regarding the medical products available on our platform.'
  },
  {
    key: 6,
    question2: 'What are your shipping options and delivery times?',
    answer2: 'We provide various standard and rapid shipping options. Delivery times vary depending on your location and the specific medical product or supplies ordered.'
  },
  {
    key: 7,
    question2: 'Are there warranties on the products sold on your site?',
    answer2: 'Yes, most medical products and equipment sold on our site come with manufacturer warranties. Please review the individual product details for specific warranty coverage.'
  },
  {
    key: 8,
    question2: 'Is there a mobile app for HealthSpito?',
    answer2: 'Currently, our web platform is fully optimized for mobile devices and modern browsers, allowing you to easily access consultations, AI features, and services on the go.'
  }
];

  expandedIndex = 0;
}
