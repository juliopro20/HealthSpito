import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

interface RxQueueItem {
  id: number;
  patientName: string;
  patientPhoto: string;
  medication: string;
  doctor: string;
  status: 'Pending' | 'Ready' | 'Filled';
  time: string;
}

interface PickupItem {
  time: string;
  patientName: string;
  patientPhoto: string;
  medication: string;
}

@Component({
  selector: 'app-pharmacy-dashboard',
  imports: [Sidebar],
  templateUrl: './pharmacy-dashboard.html',
  styleUrl: './pharmacy-dashboard.css',
})
export class PharmacyDashboard {
  stats = [
    { label: 'Pending prescriptions', value: 14, delta: '5 urgent', icon: 'prescriptions' },
    { label: "Orders today", value: 27, delta: '9 processing', icon: 'orders' },
    { label: 'Low stock alerts', value: 6, delta: 'Needs reorder', icon: 'drugs' },
    { label: "Today's revenue", value: '$2,340', delta: '+8% vs yesterday', icon: 'payments' },
  ];

  rxQueue: RxQueueItem[] = [
    {
      id: 1,
      patientName: 'Kate Summers',
      patientPhoto: 'https://i.pravatar.cc/80?img=47',
      medication: 'Lisinopril 10mg',
      doctor: 'Dr. Nik Friman',
      status: 'Pending',
      time: '09:40 AM',
    },
    {
      id: 2,
      patientName: 'Marcus Webb',
      patientPhoto: 'https://i.pravatar.cc/80?img=14',
      medication: 'Insulin glargine 24u',
      doctor: 'Dr. Nik Friman',
      status: 'Ready',
      time: '09:12 AM',
    },
    {
      id: 3,
      patientName: 'Elena Osei',
      patientPhoto: 'https://i.pravatar.cc/80?img=9',
      medication: 'Prenatal vitamins',
      doctor: 'Dr. Amelia Rho',
      status: 'Filled',
      time: '08:55 AM',
    },
    {
      id: 4,
      patientName: 'Jonah Wick',
      patientPhoto: 'https://i.pravatar.cc/80?img=60',
      medication: 'Fluticasone inhaler',
      doctor: 'Dr. Owen Kade',
      status: 'Pending',
      time: '08:30 AM',
    },
  ];

  topDrugs = [
    { name: 'Lisinopril 10mg', pct: 92 },
    { name: 'Metformin 1000mg', pct: 78 },
    { name: 'Amoxicillin 500mg', pct: 64 },
    { name: 'Fluticasone inhaler', pct: 51 },
    { name: 'Sumatriptan 50mg', pct: 37 },
  ];

  pickups: PickupItem[] = [
    { time: '10:00', patientName: 'Marcus Webb', patientPhoto: 'https://i.pravatar.cc/80?img=14', medication: 'Insulin glargine' },
    { time: '11:30', patientName: 'Priya Chandran', patientPhoto: 'https://i.pravatar.cc/80?img=38', medication: 'Sumatriptan' },
    { time: '13:15', patientName: 'Tobias Reyes', patientPhoto: 'https://i.pravatar.cc/80?img=51', medication: 'Metoprolol' },
    { time: '15:00', patientName: 'Jonah Wick', patientPhoto: 'https://i.pravatar.cc/80?img=60', medication: 'Fluticasone inhaler' },
  ];
}
