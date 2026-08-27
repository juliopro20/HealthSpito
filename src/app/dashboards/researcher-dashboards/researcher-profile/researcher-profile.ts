import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

interface PersonalInfo {
  fullName: string;
  specialty: string;
  email: string;
  phone: string;
  bio: string;
}

interface InstitutionDetails {
  institution: string;
  department: string;
  orcidId: string;
  officeHours: string;
}

interface SecurityForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface NotificationPrefs {
  newAppointments: boolean;
  messages: boolean;
  labResults: boolean;
  marketing: boolean;
}

type ProfileTab = 'personal' | 'practice' | 'security' | 'notifications';

@Component({
  selector: 'app-researcher-profile',
  imports: [FormsModule, Sidebar],
  templateUrl: './researcher-profile.html',
  styleUrl: './researcher-profile.css',
})
export class ResearcherProfile {
   activeTab = signal<ProfileTab>('personal');

  tabs: Array<{ id: ProfileTab; label: string }> = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'practice', label: 'Practice Details' },
    { id: 'security', label: 'Security' },
    { id: 'notifications', label: 'Notifications' },
  ];

  setTab(tab: ProfileTab) {
    this.activeTab.set(tab);
    this.savedTab.set(null);
  }

  personal: PersonalInfo = {
    fullName: 'Dr. Amara Okafor',
    specialty: 'Principal Investigator · Epidemiology',
    email: 'amara.okafor@westbridge.edu',
    phone: '+1 (555) 610-3392',
    bio: 'Epidemiologist with 14 years of experience in population health research, focused on chronic disease surveillance and cohort studies.',
  };

  practice: InstitutionDetails = {
    institution: 'Westbridge University',
    department: 'Epidemiology & Public Health',
    orcidId: '0000-0002-1825-0097',
    officeHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
  };

  security: SecurityForm = { currentPassword: '', newPassword: '', confirmPassword: '' };

  notifications: NotificationPrefs = {
    newAppointments: true,
    messages: true,
    labResults: true,
    marketing: false,
  };

  savedTab = signal<ProfileTab | null>(null);

  saveTab(tab: ProfileTab) {
    // TODO: replace with a real API call per tab
    console.log('Saving', tab, {
      personal: this.personal,
      practice: this.practice,
      security: this.security,
      notifications: this.notifications,
    }[tab]);

    if (tab === 'security') {
      this.security = { currentPassword: '', newPassword: '', confirmPassword: '' };
    }

    this.savedTab.set(tab);
    setTimeout(() => this.savedTab.set(null), 2200);
  }
}
