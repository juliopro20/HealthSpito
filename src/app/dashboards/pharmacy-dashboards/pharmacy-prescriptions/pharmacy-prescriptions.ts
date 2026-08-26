import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

type RxStatus = 'Pending' | 'Ready' | 'Filled' | 'Rejected';

interface Prescription {
  id: number;
  patientName: string;
  patientPhoto: string;
  medication: string;
  dosage: string;
  doctor: string;
  date: string;
  status: RxStatus;
  notes: string;
}

@Component({
  selector: 'app-pharmacy-prescriptions',
  imports: [FormsModule, Sidebar],
  templateUrl: './pharmacy-prescriptions.html',
  styleUrl: './pharmacy-prescriptions.css',
})
export class PharmacyPrescriptions {
  prescriptions = signal<Prescription[]>([
    {
      id: 1,
      patientName: 'Kate Summers',
      patientPhoto: 'https://i.pravatar.cc/80?img=47',
      medication: 'Lisinopril',
      dosage: '10mg · Once daily · 30 tablets',
      doctor: 'Dr. Nik Friman',
      date: '09.06.2020',
      status: 'Pending',
      notes: 'Refill for hypertension follow-up.',
    },
    {
      id: 2,
      patientName: 'Marcus Webb',
      patientPhoto: 'https://i.pravatar.cc/80?img=14',
      medication: 'Insulin glargine',
      dosage: '24 units · Nightly · 1 pen',
      doctor: 'Dr. Nik Friman',
      date: '09.06.2020',
      status: 'Ready',
      notes: 'Urgent — dose adjusted after glucose spike.',
    },
    {
      id: 3,
      patientName: 'Elena Osei',
      patientPhoto: 'https://i.pravatar.cc/80?img=9',
      medication: 'Prenatal vitamins',
      dosage: '1 tablet · Once daily · 90 tablets',
      doctor: 'Dr. Amelia Rho',
      date: '08.06.2020',
      status: 'Filled',
      notes: 'Routine prenatal refill.',
    },
    {
      id: 4,
      patientName: 'Jonah Wick',
      patientPhoto: 'https://i.pravatar.cc/80?img=60',
      medication: 'Fluticasone inhaler',
      dosage: '110mcg · Twice daily · 1 inhaler',
      doctor: 'Dr. Owen Kade',
      date: '08.06.2020',
      status: 'Pending',
      notes: 'Seasonal flare-up, controller dose increase.',
    },
    {
      id: 5,
      patientName: 'Priya Chandran',
      patientPhoto: 'https://i.pravatar.cc/80?img=38',
      medication: 'Sumatriptan',
      dosage: '50mg · As needed · 9 tablets',
      doctor: 'Dr. Nik Friman',
      date: '07.06.2020',
      status: 'Rejected',
      notes: 'Out of stock — awaiting supplier restock.',
    },
  ]);

  activeFilter = signal<'All' | RxStatus>('All');
  filters: Array<'All' | RxStatus> = ['All', 'Pending', 'Ready', 'Filled', 'Rejected'];

  get filteredRx(): Prescription[] {
    const f = this.activeFilter();
    return f === 'All' ? this.prescriptions() : this.prescriptions().filter((r) => r.status === f);
  }

  setFilter(f: 'All' | RxStatus) {
    this.activeFilter.set(f);
  }

  markReady(rx: Prescription) {
    rx.status = 'Ready';
  }

  markFilled(rx: Prescription) {
    rx.status = 'Filled';
  }

  reject(rx: Prescription) {
    rx.status = 'Rejected';
  }
}
