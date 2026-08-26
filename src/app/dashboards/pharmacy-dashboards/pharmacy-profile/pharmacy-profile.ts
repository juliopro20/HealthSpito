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

interface PharmacyDetails {
  pharmacyName: string;
  address: string;
  licenseNumber: string;
  workingHours: string;
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
  selector: 'app-pharmacy-profile',
  imports: [FormsModule, Sidebar],
  templateUrl: './pharmacy-profile.html',
  styleUrl: './pharmacy-profile.css',
})
export class PharmacyProfile {
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
    fullName: 'Maria Coelho',
    specialty: 'Chief Pharmacist',
    email: 'maria.coelho@greenleaf.com',
    phone: '+1 (555) 220-7743',
    bio: 'Licensed pharmacist with 9 years of experience in retail pharmacy, medication counseling and inventory management.',
  };

  practice: PharmacyDetails = {
    pharmacyName: 'Lovine Medical Center',
    address: '48 Marina Street, Downtown',
    licenseNumber: '75',
    workingHours: 'Mon–Fri, 8:00 AM – 5:00 PM',
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
