import { Component, DOCUMENT, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-dashboard',
  imports: [],
  templateUrl: './chat-dashboard.html',
  styleUrl: './chat-dashboard.css',
})
export class ChatDashboard {
// dashboards navigations
  router = inject(Router);
  document = inject(DOCUMENT);

  aiChatDashboards() {
    this.router.navigate(['/aichat-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }
  appointmentDashboards() {
    this.router.navigate(['/appointment-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }

  calenderDashboards() {
    this.router.navigate(['/calender-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }

  chatDashboards() {
    this.router.navigate(['/chat-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }

  patientDashboards() {
    this.router.navigate(['/patient-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }

  recordDashboards() {
    this.router.navigate(['/record-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }
}
