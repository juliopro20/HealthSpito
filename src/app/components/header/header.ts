import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [MatIconModule, RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'] 
})
export class Header implements OnInit, OnDestroy {
  router = inject(Router);
  showOnboardingNav = false;
  private destroy$ = new Subject<void>();

  ngOnInit() {
    // Listen for router events to check the current URL
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe((event: NavigationEnd) => {
      this.inOnBoarding(event.urlAfterRedirects);
    });

    // Handle the initial URL on component load
    this.inOnBoarding(this.router.url);
  }

  inOnBoarding(url: string) {
    // Set showOnboardingNav to true if the URL matches the patient onboarding or patient feature route
    if (
      url.includes('patient-onboarding') || 
      url.includes('patient-feature') ||
      url.includes('doctor-onboarding') || 
      url.includes('doctor-feature')
    ) {
      this.showOnboardingNav = true;
    } else {
      this.showOnboardingNav = false;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}