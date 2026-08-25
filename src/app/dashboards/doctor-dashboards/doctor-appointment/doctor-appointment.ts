import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
type ApptStatus = 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';

interface DoctorAppointment {
  id: number;
  patientName: string;
  patientPhoto: string;
  day: string;
  month: string;
  time: string;
  room: string;
  reason: string;
  status: ApptStatus;
}

@Component({
  selector: 'app-doctor-appointment',
  imports: [NgClass, Sidebar],
  templateUrl: './doctor-appointment.html',
  styleUrl: './doctor-appointment.css',
})
export class DoctorAppointments {
   appointments: DoctorAppointment[] = [
    {
      id: 1,
      patientName: 'Marcus Webb',
      patientPhoto: 'https://i.pravatar.cc/80?img=14',
      day: '09',
      month: 'Jun',
      time: '09:00 – 09:30',
      room: 'Room 204',
      reason: 'Urgent glucose review',
      status: 'Pending',
    },
    {
      id: 2,
      patientName: 'Kate Summers',
      patientPhoto: 'https://i.pravatar.cc/80?img=47',
      day: '10',
      month: 'Jun',
      time: '10:30 – 11:00',
      room: 'Room 204',
      reason: 'Hypertension follow-up',
      status: 'Confirmed',
    },
    {
      id: 3,
      patientName: 'Tobias Reyes',
      patientPhoto: 'https://i.pravatar.cc/80?img=51',
      day: '10',
      month: 'Jun',
      time: '13:00 – 13:30',
      room: 'Room 118',
      reason: 'Post-op check',
      status: 'Confirmed',
    },
    {
      id: 4,
      patientName: 'Jonah Wick',
      patientPhoto: 'https://i.pravatar.cc/80?img=60',
      day: '12',
      month: 'Jun',
      time: '15:30 – 16:00',
      room: 'Room 204',
      reason: 'Asthma review',
      status: 'Pending',
    },
    {
      id: 5,
      patientName: 'Priya Chandran',
      patientPhoto: 'https://i.pravatar.cc/80?img=38',
      day: '02',
      month: 'Jun',
      time: '11:00 – 11:30',
      room: 'Online',
      reason: 'Monthly check-in',
      status: 'Completed',
    },
    {
      id: 6,
      patientName: 'Elena Osei',
      patientPhoto: 'https://i.pravatar.cc/80?img=9',
      day: '30',
      month: 'May',
      time: '09:30 – 10:00',
      room: 'Room 118',
      reason: 'Prenatal check-up',
      status: 'Cancelled',
    },
  ];

  activeTab = signal<'Upcoming' | 'Completed' | 'Cancelled'>('Upcoming');

  get visibleAppointments(): DoctorAppointment[] {
    const tab = this.activeTab();
    if (tab === 'Completed') return this.appointments.filter((a) => a.status === 'Completed');
    if (tab === 'Cancelled') return this.appointments.filter((a) => a.status === 'Cancelled');
    return this.appointments.filter((a) => a.status === 'Pending' || a.status === 'Confirmed');
  }

  get pendingCount(): number {
    return this.appointments.filter((a) => a.status === 'Pending').length;
  }

  setTab(tab: 'Upcoming' | 'Completed' | 'Cancelled') {
    this.activeTab.set(tab);
  }

  approve(appt: DoctorAppointment) {
    appt.status = 'Confirmed';
  }

  decline(appt: DoctorAppointment) {
    appt.status = 'Cancelled';
  }
}
