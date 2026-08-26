import { Component, DOCUMENT, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavIcon =
  | 'dashboard'
  | 'prescriptions'
  | 'drugs'
  | 'orders'
  | 'payments'
  | 'messages'
  | 'blog'
  | 'patients'
  | 'reports'
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

  pharmacy = {
    name: 'GreenLeaf Pharmacy',
    role: 'Chief Pharmacist · Maria Coelho',
    photo: 'https://i.pravatar.cc/80?img=45',
  };

  navItems: NavItem[] = [
    { path: '/pharmacy-dashboard', label: 'Dashboard Overview', icon: 'dashboard' },
    { path: '/pharmacy-prescriptions', label: 'Prescriptions', icon: 'prescriptions' },
    { path: '/pharmacy-drugs', label: 'Drugs', icon: 'drugs' },
    { path: '/pharmacy-orders', label: 'Order Processing', icon: 'orders' },
    { path: '/pharmacy-payments', label: 'Payments & Receipts', icon: 'payments' },
    { path: '/pharmacy-messages', label: 'Messages', icon: 'messages' },
    { path: '/pharmacy-blog', label: 'Blog', icon: 'blog' },
    { path: '/pharmacy-patient-profiles', label: 'Patient Profiles', icon: 'patients' },
    { path: '/pharmacy-reports', label: 'Report & Analysis', icon: 'reports' },
    { path: '/pharmacy-help', label: 'Help/Support', icon: 'help' },
    { path: '/pharmacy-profile', label: 'Profile Setting', icon: 'profile' },
  ];

  scrollTop() {
    this.document.defaultView?.scrollTo(0, 0);
  }
}
