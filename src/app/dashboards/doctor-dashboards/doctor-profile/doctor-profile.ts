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

interface PracticeDetails {
  clinicName: string;
  address: string;
  consultationFee: string;
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
  selector: 'app-doctor-profile',
  imports: [FormsModule, Sidebar],
  templateUrl: './doctor-profile.html',
  styleUrl: './doctor-profile.css',
})
export class DoctorProfile {
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
    fullName: 'Dr. Nik Friman',
    specialty: 'Therapist · Internal Medicine',
    email: 'nik.friman@lovine.com',
    phone: '+1 (555) 340-8821',
    bio: 'Internal medicine physician with 12 years of experience, focused on chronic condition management and preventive care.',
  };

  practice: PracticeDetails = {
    clinicName: 'Lovine Medical Center',
    address: '48 Marina Street, Downtown',
    consultationFee: '75',
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
