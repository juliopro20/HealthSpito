import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

interface RxHistoryEntry {
  date: string;
  medication: string;
  doctor: string;
}

interface PatientProfile {
  id: number;
  name: string;
  photo: string;
  age: number;
  gender: 'Female' | 'Male';
  phone: string;
  email: string;
  allergies: string[];
  activeRx: number;
  lastVisit: string;
  history: RxHistoryEntry[];
}

@Component({
  selector: 'app-pharmacy-patient-profiles',
  imports: [FormsModule, Sidebar],
  templateUrl: './pharmacy-patient-profiles.html',
  styleUrl: './pharmacy-patient-profiles.css',
})
export class PharmacyPatientProfiles {
  patients: PatientProfile[] = [
    {
      id: 1,
      name: 'Kate Summers',
      photo: 'https://i.pravatar.cc/80?img=47',
      age: 29,
      gender: 'Female',
      phone: '+1 (555) 201-4489',
      email: 's.ferguson@gmail.com',
      allergies: ['Penicillin'],
      activeRx: 2,
      lastVisit: '09.06.2020',
      history: [
        { date: '09.06.2020', medication: 'Lisinopril 10mg', doctor: 'Dr. Nik Friman' },
        { date: '10.05.2020', medication: 'Aspirin 81mg', doctor: 'Dr. Nik Friman' },
      ],
    },
    {
      id: 2,
      name: 'Marcus Webb',
      photo: 'https://i.pravatar.cc/80?img=14',
      age: 54,
      gender: 'Male',
      phone: '+1 (555) 340-2210',
      email: 'm.webb@gmail.com',
      allergies: ['None known'],
      activeRx: 2,
      lastVisit: '09.06.2020',
      history: [
        { date: '09.06.2020', medication: 'Insulin glargine', doctor: 'Dr. Nik Friman' },
        { date: '15.05.2020', medication: 'Metformin 1000mg', doctor: 'Dr. Nik Friman' },
      ],
    },
    {
      id: 3,
      name: 'Elena Osei',
      photo: 'https://i.pravatar.cc/80?img=9',
      age: 34,
      gender: 'Female',
      phone: '+1 (555) 776-9012',
      email: 'elena.osei@gmail.com',
      allergies: ['Sulfa drugs'],
      activeRx: 1,
      lastVisit: '08.06.2020',
      history: [{ date: '08.06.2020', medication: 'Prenatal vitamins', doctor: 'Dr. Amelia Rho' }],
    },
    {
      id: 4,
      name: 'Jonah Wick',
      photo: 'https://i.pravatar.cc/80?img=60',
      age: 17,
      gender: 'Male',
      phone: '+1 (555) 664-8871',
      email: 'wick.family@gmail.com',
      allergies: ['None known'],
      activeRx: 2,
      lastVisit: '08.06.2020',
      history: [
        { date: '08.06.2020', medication: 'Fluticasone inhaler', doctor: 'Dr. Owen Kade' },
        { date: '02.03.2020', medication: 'Albuterol', doctor: 'Dr. Owen Kade' },
      ],
    },
  ];

  searchTerm = '';
  selectedPatient = signal<PatientProfile | null>(null);

  get filteredPatients(): PatientProfile[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.patients;
    return this.patients.filter((p) => p.name.toLowerCase().includes(term));
  }

  openPatient(patient: PatientProfile) {
    this.selectedPatient.set(patient);
  }

  closeProfile() {
    this.selectedPatient.set(null);
  }
}
