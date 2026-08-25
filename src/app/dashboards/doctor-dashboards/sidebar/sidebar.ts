import { Component, DOCUMENT, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavIcon =
  | 'dashboard'
  | 'record'
  | 'appointments'
  | 'schedule'
  | 'messages'
  | 'blog'
  | 'pharmacy'
  | 'help'
  | 'profile';

interface NavItem {
  path: string;
  label: string;
  icon: NavIcon;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
   document = inject(DOCUMENT);

  doctor = {
    name: 'Dr. Nik Friman',
    role: 'Therapist · Internal Medicine',
    photo: 'https://i.pravatar.cc/80?img=13',
  };

  navItems: NavItem[] = [
    { path: '/doctor-dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/doctor-patient-records', label: 'Patient Record', icon: 'record' },
    { path: '/doctor-appointments', label: 'Appointments', icon: 'appointments' },
    { path: '/doctor-schedule', label: 'Schedule', icon: 'schedule' },
    { path: '/doctor-messages', label: 'Messages', icon: 'messages' },
    { path: '/doctor-blog', label: 'Blog', icon: 'blog' },
    { path: '/doctor-pharmacies', label: 'Pharmacies', icon: 'pharmacy' },
    { path: '/doctor-help', label: 'Help/Support', icon: 'help' },
    { path: '/doctor-profile', label: 'Profile Settings', icon: 'profile' },
  ];

  scrollTop() {
    this.document.defaultView?.scrollTo(0, 0);
  }
}
