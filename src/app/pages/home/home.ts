import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, Renderer2, inject, DOCUMENT } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { Footer } from '../../components/footer/footer';
import { Router } from '@angular/router';

interface Card {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CdkAccordionModule, MatIconModule, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  @ViewChild('track', { static: true }) track!: ElementRef;

  // Original cards
  originalCards: Card[] = [
    {
      icon: 'how_to_reg',
      title: 'Meeting Doctors',
      description: 'HealthSpito provides well-experienced doctors worldwide through which you can interact with them in real time.',
      buttonText: 'Learn'
    },
    {
      icon: 'stars',
      title: 'Health Reach',
      description: 'HealthSpito provide or recommend best health centres based on your location which are also affiliated to our system.',
      buttonText: 'Learn'
    },
    {
      icon: 'cloud_done',
      title: 'Use Our AI',
      description: 'Your situation is specific to you. You can interact with our AI Model by asking questions and getting quick responses within a short period of time.',
      buttonText: 'Learn'
    },
    {
      icon: ' local_hospital',
      title: 'Pharmacies locations and drugs prices.',
      description: 'We provide pharmacies with drugs you currently need which help save time finding them.',
      buttonText: 'Learn'
    },
    {
      icon: 'local_hotel',
      title: 'Home Health Services',
      description: 'In case you need special assistance, HealthSpito provides such services by connecting you with health experts.',
      buttonText: 'Learn'
    }
  ];

  // Tripled for seamless infinite loop
  cards: Card[] = [...this.originalCards, ...this.originalCards, ...this.originalCards];

  currentIndex = this.originalCards.length; // Start in the middle segment
  cardWidth = 220;
  gap = 20;
  isAnimating = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.updateOffset();
    this.startInfiniteRotation();
  }

  startInfiniteRotation(): void {
    setInterval(() => {
      this.next();
    }, 6000);
  }

  next(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex++;

    this.updateOffset();

    // Seamless reset after second set
    if (this.currentIndex >= 2 * this.originalCards.length) {
      setTimeout(() => {
        this.renderer.setStyle(this.track.nativeElement, 'transition', 'none');
        this.currentIndex = this.originalCards.length;
        this.updateOffset();
        setTimeout(() => {
          this.renderer.setStyle(
            this.track.nativeElement,
            'transition',
            'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          );
          this.isAnimating = false;
        }, 50);
      }, 800);
    } else {
      setTimeout(() => {
        this.isAnimating = false;
      }, 800);
    }
  }

  prev(): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex--;

    this.updateOffset();

    // Seamless backward reset
    if (this.currentIndex < this.originalCards.length) {
      setTimeout(() => {
        this.renderer.setStyle(this.track.nativeElement, 'transition', 'none');
        this.currentIndex = 2 * this.originalCards.length - 1;
        this.updateOffset();
        setTimeout(() => {
          this.renderer.setStyle(
            this.track.nativeElement,
            'transition',
            'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          );
          this.isAnimating = false;
        }, 50);
      }, 800);
    } else {
      setTimeout(() => {
        this.isAnimating = false;
      }, 800);
    }
  }

  goTo(index: number): void {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex = this.originalCards.length + index;
    this.updateOffset();

    setTimeout(() => {
      this.isAnimating = false;
    }, 800);
  }

  updateOffset(): void {
    const offset = -this.currentIndex * (this.cardWidth + this.gap);
    this.renderer.setStyle(this.track.nativeElement, 'transform', `translateX(${offset}px)`);
  }

  getCardScale(index: number): number {
    return index === this.currentIndex ? 1.15 : 1.0;
  }

  getCardZIndex(index: number): number {
    return index === this.currentIndex ? 3 : 1;
  }

  // Helper: get indices for pagination
  getIndicatorIndex(): number {
    return this.currentIndex % this.originalCards.length;
  }

  // Why Use HealthSpito Cards
  whyUseCard = [
    {
      title: "One-to-one interaction",
      text: "HealthSpito provides a one-to-one chatting system where the user can interact with the AI Model, with each other, or even a medical institute."
    },
    {
      title: "Results are coded",
      text: "Results provided by the AI model and the health personnel can only be viewed by those of interest. Even the admin can’t see this information since they are personal."
    },
    {
      title: "Protection of Data",
      text: "By using new modern technologies, we offer data protection and privacy between the user concerned and the system."
    }
  ];

  // FAQ Data
  faqArray = [
    {
      question: 'How accurate are the AI recommendations?',
      answer: "HealthSpito's AI provides highly accurate health recommendations by analyzing vast medical data and symptoms, but final insights are reviewed by certified professionals to ensure reliability, safety, and personalized care, making it a trusted support tool."
    },
    {
      question: 'Can HealthSpito diagnose medical conditions?',
      answer: "Yes, the AI can assist in identifying potential conditions based on data analysis or information provided by the users (patients), but it does not provide definitive diagnoses. A qualified healthcare provider must confirm any diagnosis."
    }
  ];

  // Organization Data
  orgArray = [
    {
      image: "biaka 1.png",
      title: "Biaka Hospital",
      text: "The Biaka University Institute of Buea teaching hospital, commonly known as Biaka Hospital, launched on Tuesday, August 10th, 2021.",
      url: "https://biakahc.org/tag/hospital/"
    },
    {
      image: "CHUY.png",
      title: "CHUY",
      text: "The Central University Institute of Yaounde, known as CHUY Hospital, launched on Tuesday, August 10th, 2021.",
      url: "https://africaresearchconnects.com/institution/9000004898/"
    },
    {
      image: "buea_hospital 1.png",
      title: "Buea Regional Hospital",
      text: "The Buea Regional Hospital is a state hospital launched on Tuesday, August 10th, 2021.",
      url: "https://africaresearchconnects.com/institution/9000100672/"
    }
  ];

  // Contact Info
  contactArray = [
    { icon: "phone", title: "Contact", info: "+237 999 999 999" },
    { icon: "location_on", title: "Location", info: "Buea Molyko" },
    { icon: "email", title: "Email", info: "example@gmail.com" }
  ];


  
  //onboards navigations

  router = inject(Router)
  document = inject(DOCUMENT); 

  onBoardPatient() {
    this.router.navigate(['/patient-feature']).then(() => {
      this.document.defaultView?.scrollTo(0, 0); 
    });
  }

  onBoardDoctor() {
    this.router.navigate(['/doctor-feature']).then(() => {
      this.document.defaultView?.scrollTo(0, 0); 
    });
  }
}
