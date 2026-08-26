import { Component, signal } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

type PaymentStatus = 'Paid' | 'Pending' | 'Refunded';

interface Payment {
  id: string;
  patientName: string;
  patientPhoto: string;
  orderId: string;
  amount: number;
  method: 'Card' | 'Insurance' | 'Cash';
  status: PaymentStatus;
  date: string;
}

@Component({
  selector: 'app-pharmacy-payments',
  imports: [Sidebar],
  templateUrl: './pharmacy-payments.html',
  styleUrl: './pharmacy-payments.css',
})
export class PharmacyPayments {
  stats = [
    { label: "Today's revenue", value: '$2,340', delta: '+8% vs yesterday' },
    { label: 'This week', value: '$14,920', delta: '+3.2% vs last week' },
    { label: 'Pending payments', value: '$486', delta: '3 transactions' },
    { label: 'Refunds issued', value: '$118', delta: '2 this week' },
  ];

  payments = signal<Payment[]>([
    {
      id: 'PMT-3391',
      patientName: 'Kate Summers',
      patientPhoto: 'https://i.pravatar.cc/80?img=47',
      orderId: 'ORD-1042',
      amount: 18.6,
      method: 'Insurance',
      status: 'Paid',
      date: '09.06.2020',
    },
    {
      id: 'PMT-3390',
      patientName: 'Marcus Webb',
      patientPhoto: 'https://i.pravatar.cc/80?img=14',
      orderId: 'ORD-1041',
      amount: 52.9,
      method: 'Card',
      status: 'Paid',
      date: '09.06.2020',
    },
    {
      id: 'PMT-3389',
      patientName: 'Elena Osei',
      patientPhoto: 'https://i.pravatar.cc/80?img=9',
      orderId: 'ORD-1040',
      amount: 24.0,
      method: 'Card',
      status: 'Pending',
      date: '08.06.2020',
    },
    {
      id: 'PMT-3388',
      patientName: 'Priya Chandran',
      patientPhoto: 'https://i.pravatar.cc/80?img=38',
      orderId: 'ORD-1038',
      amount: 18.9,
      method: 'Cash',
      status: 'Refunded',
      date: '07.06.2020',
    },
    {
      id: 'PMT-3387',
      patientName: 'Jonah Wick',
      patientPhoto: 'https://i.pravatar.cc/80?img=60',
      orderId: 'ORD-1039',
      amount: 18.9,
      method: 'Insurance',
      status: 'Paid',
      date: '08.06.2020',
    },
  ]);

  activeFilter = signal<'All' | PaymentStatus>('All');
  filters: Array<'All' | PaymentStatus> = ['All', 'Paid', 'Pending', 'Refunded'];

  get filteredPayments(): Payment[] {
    const f = this.activeFilter();
    return f === 'All' ? this.payments() : this.payments().filter((p) => p.status === f);
  }

  setFilter(f: 'All' | PaymentStatus) {
    this.activeFilter.set(f);
  }

  viewingReceipt = signal<Payment | null>(null);

  openReceipt(payment: Payment) {
    this.viewingReceipt.set(payment);
  }

  closeReceipt() {
    this.viewingReceipt.set(null);
  }
}
