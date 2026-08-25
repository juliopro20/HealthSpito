import { Component, DOCUMENT, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

type PatientStatus = 'Stable' | 'Critical' | 'Follow-up';

interface VitalEntry {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'flat';
}

interface HistoryEntry {
  date: string;
  title: string;
  note: string;
}

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

interface Patient {
  id: number;
  name: string;
  photo: string;
  age: number;
  gender: 'Female' | 'Male';
  condition: string;
  status: PatientStatus;
  lastVisit: string;
  nextVisit: string;
  phone: string;
  email: string;
  bloodType: string;
  vitals: VitalEntry[];
  history: HistoryEntry[];
  medications: Medication[];
}

interface ScheduleItem {
  time: string;
  patientName: string;
  patientPhoto: string;
  type: string;
}

interface PrescriptionFormModel {
  medication: string;
  dosage: string;
  frequency: string;
  duration: string;
  notes: string;
}

@Component({
  selector: 'app-doctor-dashboard',
  imports: [CommonModule, FormsModule, Sidebar],
  templateUrl: './doctor-dashboard.html',
  styleUrl: './doctor-dashboard.css',
})
export class DoctorDashboard {
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
  doctorDashboards() {
    this.router.navigate(['/doctor-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }

  // ---------- Stats ----------
  stats = [
    { label: 'Total patients', value: 128, delta: '+6 this week', icon: 'users' },
    { label: "Today's appointments", value: 9, delta: '3 remaining', icon: 'calendar' },
    { label: 'Pending results', value: 4, delta: 'Needs review', icon: 'flask' },
    { label: 'Unread messages', value: 12, delta: '5 urgent', icon: 'chat' },
  ];

  // ---------- Patients ----------
  patients: Patient[] = [
    {
      id: 1,
      name: 'Kate Summers',
      photo: 'https://i.pravatar.cc/80?img=47',
      age: 29,
      gender: 'Female',
      condition: 'Hypertension follow-up',
      status: 'Follow-up',
      lastVisit: '05.06.2020',
      nextVisit: '10.06.2020',
      phone: '+1 (555) 201-4489',
      email: 's.ferguson@gmail.com',
      bloodType: 'A+',
      vitals: [
        { label: 'Blood pressure', value: '128/82', trend: 'down' },
        { label: 'Heart rate', value: '76 bpm', trend: 'flat' },
        { label: 'Weight', value: '58 kg', trend: 'flat' },
        { label: 'Temperature', value: '36.7°C', trend: 'flat' },
      ],
      history: [
        { date: '05.06.2020', title: 'Follow-up consultation', note: 'BP improved since medication adjustment.' },
        { date: '10.05.2020', title: 'Started Lisinopril 10mg', note: 'Prescribed after elevated readings.' },
        { date: '02.04.2020', title: 'Initial consultation', note: 'Diagnosed with stage 1 hypertension.' },
      ],
      medications: [
        { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
        { name: 'Aspirin', dosage: '81mg', frequency: 'Once daily' },
      ],
    },
    {
      id: 2,
      name: 'Marcus Webb',
      photo: 'https://i.pravatar.cc/80?img=14',
      age: 54,
      gender: 'Male',
      condition: 'Type 2 diabetes',
      status: 'Critical',
      lastVisit: '01.06.2020',
      nextVisit: '08.06.2020',
      phone: '+1 (555) 340-2210',
      email: 'm.webb@gmail.com',
      bloodType: 'O-',
      vitals: [
        { label: 'Blood glucose', value: '187 mg/dL', trend: 'up' },
        { label: 'Blood pressure', value: '142/91', trend: 'up' },
        { label: 'Weight', value: '94 kg', trend: 'up' },
        { label: 'A1C', value: '8.1%', trend: 'up' },
      ],
      history: [
        { date: '01.06.2020', title: 'Urgent review', note: 'Glucose trending up, adjusting insulin dose.' },
        { date: '15.05.2020', title: 'Lab work', note: 'A1C elevated from last quarter.' },
        { date: '20.03.2020', title: 'Routine check-up', note: 'Discussed diet and exercise plan.' },
      ],
      medications: [
        { name: 'Metformin', dosage: '1000mg', frequency: 'Twice daily' },
        { name: 'Insulin glargine', dosage: '24 units', frequency: 'Nightly' },
      ],
    },
    {
      id: 3,
      name: 'Elena Osei',
      photo: 'https://i.pravatar.cc/80?img=9',
      age: 34,
      gender: 'Female',
      condition: 'Prenatal care',
      status: 'Stable',
      lastVisit: '28.05.2020',
      nextVisit: '18.06.2020',
      phone: '+1 (555) 776-9012',
      email: 'elena.osei@gmail.com',
      bloodType: 'B+',
      vitals: [
        { label: 'Blood pressure', value: '112/74', trend: 'flat' },
        { label: 'Weight', value: '68 kg', trend: 'up' },
        { label: 'Heart rate', value: '82 bpm', trend: 'flat' },
        { label: 'Week', value: '24 wks', trend: 'flat' },
      ],
      history: [
        { date: '28.05.2020', title: 'Second trimester check-up', note: 'All measurements within normal range.' },
        { date: '30.04.2020', title: 'Anatomy scan', note: 'No abnormalities detected.' },
      ],
      medications: [{ name: 'Prenatal vitamins', dosage: '1 tablet', frequency: 'Once daily' }],
    },
    {
      id: 4,
      name: 'Tobias Reyes',
      photo: 'https://i.pravatar.cc/80?img=51',
      age: 61,
      gender: 'Male',
      condition: 'Post-cardiac surgery',
      status: 'Critical',
      lastVisit: '03.06.2020',
      nextVisit: '06.06.2020',
      phone: '+1 (555) 118-4432',
      email: 't.reyes@gmail.com',
      bloodType: 'AB+',
      vitals: [
        { label: 'Blood pressure', value: '138/88', trend: 'flat' },
        { label: 'Heart rate', value: '92 bpm', trend: 'up' },
        { label: 'Oxygen sat.', value: '95%', trend: 'down' },
        { label: 'Weight', value: '81 kg', trend: 'flat' },
      ],
      history: [
        { date: '03.06.2020', title: 'Post-op review', note: 'Incision healing well, mild arrhythmia noted.' },
        { date: '22.05.2020', title: 'CABG surgery', note: 'Triple bypass, no complications.' },
      ],
      medications: [
        { name: 'Metoprolol', dosage: '50mg', frequency: 'Twice daily' },
        { name: 'Clopidogrel', dosage: '75mg', frequency: 'Once daily' },
      ],
    },
    {
      id: 5,
      name: 'Priya Chandran',
      photo: 'https://i.pravatar.cc/80?img=38',
      age: 41,
      gender: 'Female',
      condition: 'Migraine management',
      status: 'Stable',
      lastVisit: '20.05.2020',
      nextVisit: '20.06.2020',
      phone: '+1 (555) 902-3345',
      email: 'p.chandran@gmail.com',
      bloodType: 'A-',
      vitals: [
        { label: 'Blood pressure', value: '118/76', trend: 'flat' },
        { label: 'Heart rate', value: '70 bpm', trend: 'flat' },
        { label: 'Weight', value: '61 kg', trend: 'flat' },
        { label: 'Sleep avg.', value: '6.5 hrs', trend: 'down' },
      ],
      history: [
        { date: '20.05.2020', title: 'Monthly check-in', note: 'Frequency of episodes down to 2/month.' },
        { date: '20.04.2020', title: 'Medication review', note: 'Switched to Sumatriptan as needed.' },
      ],
      medications: [{ name: 'Sumatriptan', dosage: '50mg', frequency: 'As needed' }],
    },
    {
      id: 6,
      name: 'Jonah Wick',
      photo: 'https://i.pravatar.cc/80?img=60',
      age: 17,
      gender: 'Male',
      condition: 'Asthma review',
      status: 'Follow-up',
      lastVisit: '30.05.2020',
      nextVisit: '14.06.2020',
      phone: '+1 (555) 664-8871',
      email: 'wick.family@gmail.com',
      bloodType: 'O+',
      vitals: [
        { label: 'Peak flow', value: '410 L/min', trend: 'up' },
        { label: 'Heart rate', value: '74 bpm', trend: 'flat' },
        { label: 'Oxygen sat.', value: '98%', trend: 'flat' },
        { label: 'Weight', value: '59 kg', trend: 'flat' },
      ],
      history: [
        { date: '30.05.2020', title: 'Inhaler technique review', note: 'Improved control, fewer night symptoms.' },
        { date: '02.03.2020', title: 'Seasonal flare-up', note: 'Adjusted controller dose.' },
      ],
      medications: [
        { name: 'Fluticasone inhaler', dosage: '110mcg', frequency: 'Twice daily' },
        { name: 'Albuterol', dosage: '90mcg', frequency: 'As needed' },
      ],
    },
  ];

  // ---------- Today's schedule ----------
  schedule: ScheduleItem[] = [
    { time: '09:00', patientName: 'Marcus Webb', patientPhoto: 'https://i.pravatar.cc/80?img=14', type: 'Urgent review' },
    { time: '10:30', patientName: 'Kate Summers', patientPhoto: 'https://i.pravatar.cc/80?img=47', type: 'Follow-up' },
    { time: '13:00', patientName: 'Tobias Reyes', patientPhoto: 'https://i.pravatar.cc/80?img=51', type: 'Post-op check' },
    { time: '15:30', patientName: 'Jonah Wick', patientPhoto: 'https://i.pravatar.cc/80?img=60', type: 'Consultation' },
  ];

  // ---------- Table state ----------
  searchTerm = '';
  activeFilter: 'All' | PatientStatus = 'All';
  filters: Array<'All' | PatientStatus> = ['All', 'Critical', 'Follow-up', 'Stable'];

  get filteredPatients(): Patient[] {
    return this.patients.filter((p) => {
      const matchesFilter = this.activeFilter === 'All' || p.status === this.activeFilter;
      const term = this.searchTerm.trim().toLowerCase();
      const matchesSearch =
        !term || p.name.toLowerCase().includes(term) || p.condition.toLowerCase().includes(term);
      return matchesFilter && matchesSearch;
    });
  }

  setFilter(f: 'All' | PatientStatus) {
    this.activeFilter = f;
  }

  // ---------- Patient detail panel ----------
  selectedPatient: Patient | null = null;
  showDetail = false;
  activeTab: 'overview' | 'history' | 'medications' = 'overview';

  openPatient(patient: Patient) {
    this.selectedPatient = patient;
    this.showDetail = true;
    this.activeTab = 'overview';
    this.showPrescriptionForm = false;
    setTimeout(() => {
      this.document.getElementById('patientDetail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  closeDetail() {
    this.showDetail = false;
    this.selectedPatient = null;
  }

  setTab(tab: 'overview' | 'history' | 'medications') {
    this.activeTab = tab;
  }

  // ---------- Prescription quick form ----------
  showPrescriptionForm = false;
  prescriptionSubmitted = false;

  prescriptionForm: PrescriptionFormModel = {
    medication: '',
    dosage: '',
    frequency: '',
    duration: '',
    notes: '',
  };

  togglePrescriptionForm() {
    this.showPrescriptionForm = !this.showPrescriptionForm;
    this.prescriptionSubmitted = false;
  }

  submitPrescription(form: NgForm) {
    if (form.invalid || !this.selectedPatient) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    // TODO: replace with a real API call
    console.log('New prescription for', this.selectedPatient.name, this.prescriptionForm);

    this.selectedPatient.medications.unshift({
      name: this.prescriptionForm.medication,
      dosage: this.prescriptionForm.dosage,
      frequency: this.prescriptionForm.frequency,
    });

    this.prescriptionSubmitted = true;

    setTimeout(() => {
      this.showPrescriptionForm = false;
      this.prescriptionSubmitted = false;
      this.prescriptionForm = { medication: '', dosage: '', frequency: '', duration: '', notes: '' };
      form.resetForm();
    }, 1600);
  }
}