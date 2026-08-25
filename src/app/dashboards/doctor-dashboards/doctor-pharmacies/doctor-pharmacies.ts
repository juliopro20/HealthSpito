import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

interface Pharmacy {
  id: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
  openNow: boolean;
  is24hr: boolean;
  stock: 'In stock' | 'Limited stock' | 'Out of stock';
}

interface SendRxForm {
  patientName: string;
  medication: string;
  notes: string;
}

@Component({
  selector: 'app-doctor-pharmacies',
  imports: [FormsModule, Sidebar],
  templateUrl: './doctor-pharmacies.html',
  styleUrl: './doctor-pharmacies.css',
})
export class DoctorPharmacies {
  pharmacies: Pharmacy[] = [
    {
      id: 1,
      name: 'GreenLeaf Pharmacy',
      address: '48 Marina Street, Downtown',
      hours: '8:00 AM – 10:00 PM',
      phone: '+1 (555) 220-7743',
      openNow: true,
      is24hr: false,
      stock: 'In stock',
    },
    {
      id: 2,
      name: 'CareFirst 24hr Pharmacy',
      address: '112 Hillcrest Avenue',
      hours: 'Open 24 hours',
      phone: '+1 (555) 883-1120',
      openNow: true,
      is24hr: true,
      stock: 'In stock',
    },
    {
      id: 3,
      name: 'Wellness Corner Drugstore',
      address: '9 Palm Grove Road',
      hours: '9:00 AM – 8:00 PM',
      phone: '+1 (555) 442-5590',
      openNow: false,
      is24hr: false,
      stock: 'Limited stock',
    },
    {
      id: 4,
      name: 'Riverside Pharmacy',
      address: '271 Riverside Boulevard',
      hours: '7:30 AM – 9:00 PM',
      phone: '+1 (555) 907-3312',
      openNow: true,
      is24hr: false,
      stock: 'Out of stock',
    },
    {
      id: 5,
      name: 'MedPlus 24hr',
      address: '15 King Street',
      hours: 'Open 24 hours',
      phone: '+1 (555) 664-2201',
      openNow: true,
      is24hr: true,
      stock: 'In stock',
    },
  ];

  searchTerm = '';
  activeFilter = signal<'All' | 'Open now' | '24-hour'>('All');
  filters: Array<'All' | 'Open now' | '24-hour'> = ['All', 'Open now', '24-hour'];

  get filteredPharmacies(): Pharmacy[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.pharmacies.filter((p) => {
      const matchesSearch = !term || p.name.toLowerCase().includes(term) || p.address.toLowerCase().includes(term);
      const f = this.activeFilter();
      const matchesFilter = f === 'All' || (f === 'Open now' && p.openNow) || (f === '24-hour' && p.is24hr);
      return matchesSearch && matchesFilter;
    });
  }

  setFilter(f: 'All' | 'Open now' | '24-hour') {
    this.activeFilter.set(f);
  }

  sendingTo = signal<Pharmacy | null>(null);
  sendSubmitted = signal(false);

  sendRxForm: SendRxForm = { patientName: '', medication: '', notes: '' };

  openSendForm(pharmacy: Pharmacy) {
    this.sendingTo.set(pharmacy);
    this.sendSubmitted.set(false);
  }

  closeSendForm() {
    this.sendingTo.set(null);
  }

  submitSend(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    // TODO: replace with a real API call
    console.log('Sending prescription to', this.sendingTo()?.name, this.sendRxForm);

    this.sendSubmitted.set(true);
    setTimeout(() => {
      this.sendingTo.set(null);
      this.sendSubmitted.set(false);
      this.sendRxForm = { patientName: '', medication: '', notes: '' };
      form.resetForm();
    }, 1600);
  }
}
