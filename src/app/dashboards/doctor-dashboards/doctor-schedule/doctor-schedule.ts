import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

type SlotStatus = 'available' | 'booked' | 'blocked';

interface Slot {
  time: string;
  status: SlotStatus;
  patientName?: string;
}

interface DayColumn {
  label: string;
  date: string;
  slots: Slot[];
}

interface TimeOffForm {
  date: string;
  startTime: string;
  endTime: string;
  reason: string;
}

const HOURS = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

@Component({
  selector: 'app-doctor-schedule',
  imports: [FormsModule, Sidebar],
  templateUrl: './doctor-schedule.html',
  styleUrl: './doctor-schedule.css',
})
export class DoctorSchedule {
  weekLabel = signal('8 – 14 June 2020');

  days = signal<DayColumn[]>([
    { label: 'Mon', date: '8', slots: this.buildDay(['10:00'], ['13:00', '14:00']) },
    { label: 'Tue', date: '9', slots: this.buildDay(['09:00', '10:30'], ['15:00']) },
    { label: 'Wed', date: '10', slots: this.buildDay(['10:30', '13:00'], []) },
    { label: 'Thu', date: '11', slots: this.buildDay([], ['09:00', '09:30', '10:00']) },
    { label: 'Fri', date: '12', slots: this.buildDay(['15:30'], []) },
    { label: 'Sat', date: '13', slots: this.buildDay([], ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']) },
    { label: 'Sun', date: '14', slots: this.buildDay([], ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']) },
  ]);

  private buildDay(booked: string[], blocked: string[]): Slot[] {
    return HOURS.map((time) => {
      if (booked.includes(time)) return { time, status: 'booked' as SlotStatus, patientName: 'Booked' };
      if (blocked.includes(time)) return { time, status: 'blocked' as SlotStatus };
      return { time, status: 'available' as SlotStatus };
    });
  }

  toggleSlot(day: DayColumn, slot: Slot) {
    if (slot.status === 'booked') return; // can't toggle a booked slot from the grid
    slot.status = slot.status === 'available' ? 'blocked' : 'available';
  }

  availableCount = computed(() =>
    this.days().reduce((sum, d) => sum + d.slots.filter((s) => s.status === 'available').length, 0)
  );
  bookedCount = computed(() =>
    this.days().reduce((sum, d) => sum + d.slots.filter((s) => s.status === 'booked').length, 0)
  );
  blockedCount = computed(() =>
    this.days().reduce((sum, d) => sum + d.slots.filter((s) => s.status === 'blocked').length, 0)
  );

  showTimeOffForm = signal(false);
  timeOffSubmitted = signal(false);

  timeOffForm: TimeOffForm = { date: '', startTime: '', endTime: '', reason: '' };

  toggleTimeOffForm() {
    this.showTimeOffForm.update((v) => !v);
    this.timeOffSubmitted.set(false);
  }

  submitTimeOff() {
    if (!this.timeOffForm.date || !this.timeOffForm.startTime || !this.timeOffForm.endTime) return;

    // TODO: replace with a real API call
    console.log('Blocking time off', this.timeOffForm);

    this.timeOffSubmitted.set(true);
    setTimeout(() => {
      this.showTimeOffForm.set(false);
      this.timeOffSubmitted.set(false);
      this.timeOffForm = { date: '', startTime: '', endTime: '', reason: '' };
    }, 1500);
  }
}
