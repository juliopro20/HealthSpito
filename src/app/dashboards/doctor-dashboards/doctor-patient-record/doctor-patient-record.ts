import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

interface Document {
  id: number;
  name: string;
  type: 'pdf' | 'img';
  size: string;
  date: string;
  category: 'Lab results' | 'Prescriptions' | 'Imaging' | 'Reports';
}

interface PatientFile {
  id: number;
  name: string;
  photo: string;
  age: number;
  gender: 'Female' | 'Male';
  bloodType: string;
  condition: string;
  lastUpdated: string;
  documents: Document[];
}
@Component({
  selector: 'app-doctor-patient-record',
  imports: [FormsModule, Sidebar],
  templateUrl: './doctor-patient-record.html',
  styleUrl: './doctor-patient-record.css',
})
export class DoctorPatientRecord {
   patients: PatientFile[] = [
    {
      id: 1,
      name: 'Kate Summers',
      photo: 'https://i.pravatar.cc/80?img=47',
      age: 29,
      gender: 'Female',
      bloodType: 'A+',
      condition: 'Hypertension follow-up',
      lastUpdated: '05.06.2020',
      documents: [
        { id: 1, name: 'Blood pressure panel', type: 'pdf', size: '1.1 MB', date: '05.06.2020', category: 'Lab results' },
        { id: 2, name: 'Lisinopril prescription', type: 'pdf', size: '0.3 MB', date: '10.05.2020', category: 'Prescriptions' },
        { id: 3, name: 'Initial ECG scan', type: 'img', size: '2.4 MB', date: '02.04.2020', category: 'Imaging' },
      ],
    },
    {
      id: 2,
      name: 'Marcus Webb',
      photo: 'https://i.pravatar.cc/80?img=14',
      age: 54,
      gender: 'Male',
      bloodType: 'O-',
      condition: 'Type 2 diabetes',
      lastUpdated: '01.06.2020',
      documents: [
        { id: 4, name: 'A1C lab results', type: 'pdf', size: '0.8 MB', date: '15.05.2020', category: 'Lab results' },
        { id: 5, name: 'Insulin dosage sheet', type: 'pdf', size: '0.2 MB', date: '01.06.2020', category: 'Prescriptions' },
      ],
    },
    {
      id: 3,
      name: 'Elena Osei',
      photo: 'https://i.pravatar.cc/80?img=9',
      age: 34,
      gender: 'Female',
      bloodType: 'B+',
      condition: 'Prenatal care',
      lastUpdated: '28.05.2020',
      documents: [
        { id: 6, name: 'Anatomy scan report', type: 'img', size: '3.1 MB', date: '30.04.2020', category: 'Imaging' },
        { id: 7, name: 'Second trimester summary', type: 'pdf', size: '0.6 MB', date: '28.05.2020', category: 'Reports' },
      ],
    },
    {
      id: 4,
      name: 'Tobias Reyes',
      photo: 'https://i.pravatar.cc/80?img=51',
      age: 61,
      gender: 'Male',
      bloodType: 'AB+',
      condition: 'Post-cardiac surgery',
      lastUpdated: '03.06.2020',
      documents: [
        { id: 8, name: 'CABG operative report', type: 'pdf', size: '1.4 MB', date: '22.05.2020', category: 'Reports' },
        { id: 9, name: 'Post-op chest X-ray', type: 'img', size: '2.9 MB', date: '03.06.2020', category: 'Imaging' },
        { id: 10, name: 'Metoprolol prescription', type: 'pdf', size: '0.2 MB', date: '03.06.2020', category: 'Prescriptions' },
      ],
    },
  ];

  searchTerm = '';
  selectedPatient = signal<PatientFile | null>(null);
  activeCategory = signal<'All' | Document['category']>('All');

  categories: Array<'All' | Document['category']> = ['All', 'Lab results', 'Prescriptions', 'Imaging', 'Reports'];

  get filteredPatients(): PatientFile[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.patients;
    return this.patients.filter(
      (p) => p.name.toLowerCase().includes(term) || p.condition.toLowerCase().includes(term)
    );
  }

  get visibleDocuments(): Document[] {
    const patient = this.selectedPatient();
    if (!patient) return [];
    const cat = this.activeCategory();
    return cat === 'All' ? patient.documents : patient.documents.filter((d) => d.category === cat);
  }

  openPatient(patient: PatientFile) {
    this.selectedPatient.set(patient);
    this.activeCategory.set('All');
  }

  closeRecord() {
    this.selectedPatient.set(null);
  }

  setCategory(cat: 'All' | Document['category']) {
    this.activeCategory.set(cat);
  }
}
