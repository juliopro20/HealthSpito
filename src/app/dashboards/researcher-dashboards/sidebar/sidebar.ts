import { Component, DOCUMENT, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavIcon =
  | 'dashboard'
  | 'project'
  | 'data'
  | 'reports'
  | 'publications'
  | 'collaborations'
  | 'help'
  | 'profile';

interface NavItem {
  path: string;
  label: string;
  icon: NavIcon;
}

@Component({
  selector: 'app-researcher-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  document = inject(DOCUMENT);

  researcher = {
    name: 'Dr. Amara Okafor',
    role: 'Principal Investigator · Epidemiology',
    photo: 'https://i.pravatar.cc/80?img=28',
  };

  navItems: NavItem[] = [
    { path: '/researcher-dashboard', label: 'Dashboard Overview', icon: 'dashboard' },
    { path: '/research-project', label: 'Research Project', icon: 'project' },
    { path: '/data-access', label: 'Data Access', icon: 'data' },
    { path: '/researcher-reports', label: 'Report & Analysis', icon: 'reports' },
    { path: '/publications', label: 'Publications', icon: 'publications' },
    { path: '/collaborations', label: 'Collaborations', icon: 'collaborations' },
    { path: '/researcher-help', label: 'Help/Support', icon: 'help' },
    { path: '/researcher-profile', label: 'Profile Setting', icon: 'profile' },
  ];

  scrollTop() {
    this.document.defaultView?.scrollTo(0, 0);
  }
}
