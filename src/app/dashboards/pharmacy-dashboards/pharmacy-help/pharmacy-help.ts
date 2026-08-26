import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface Ticket {
  id: number;
  subject: string;
  category: string;
  status: 'Open' | 'In progress' | 'Resolved';
  date: string;
}

interface SupportFormModel {
  category: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-pharmacy-help',
  imports: [FormsModule, Sidebar],
  templateUrl: './pharmacy-help.html',
  styleUrl: './pharmacy-help.css',
})
export class PharmacyHelp {
  faqs: FaqItem[] = [
    {
      id: 1,
      question: 'How do I mark a prescription as ready for pickup?',
      answer: 'Open Prescriptions, find the request, and click "Mark ready" once it\'s filled. The patient sees an update automatically.',
    },
    {
      id: 2,
      question: 'What happens when a drug goes out of stock?',
      answer: 'Go to Drugs, and any item at zero quantity is flagged "Out of stock" automatically. You can still add a restock date once your supplier confirms.',
    },
    {
      id: 3,
      question: 'How do I issue a refund on a payment?',
      answer: 'Open Payments & Receipts, find the transaction, and use the receipt view to process a refund. This updates the order status as well.',
    },
    {
      id: 4,
      question: 'Can patients see my published blog posts?',
      answer: 'Yes — anything marked "Published" in Blog is visible to all patients in the app. Drafts stay private until you publish them.',
    },
    {
      id: 5,
      question: 'How do I update my pharmacy\'s operating hours?',
      answer: 'Head to Profile Setting → Pharmacy Details to update your hours, address, and contact information.',
    },
  ];

  openFaqId = signal<number | null>(1);

  toggleFaq(id: number) {
    this.openFaqId.update((current) => (current === id ? null : id));
  }

  tickets: Ticket[] = [
    { id: 101, subject: 'Barcode scanner not reading labels', category: 'Technical', status: 'In progress', date: '05.06.2020' },
    { id: 102, subject: 'Duplicate entry in drug inventory', category: 'Data', status: 'Resolved', date: '29.05.2020' },
    { id: 103, subject: 'Question about insurance claim export', category: 'Billing', status: 'Open', date: '02.06.2020' },
  ];

  categories = ['Technical', 'Billing', 'Data', 'Account', 'Other'];

  supportForm: SupportFormModel = { category: this.categories[0], subject: '', message: '' };
  submitted = signal(false);

  submitTicket(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    // TODO: replace with a real API call
    console.log('New support ticket', this.supportForm);

    this.tickets = [
      {
        id: Date.now(),
        subject: this.supportForm.subject,
        category: this.supportForm.category,
        status: 'Open',
        date: new Date().toLocaleDateString(),
      },
      ...this.tickets,
    ];

    this.submitted.set(true);
    setTimeout(() => {
      this.submitted.set(false);
      this.supportForm = { category: this.categories[0], subject: '', message: '' };
      form.resetForm({ category: this.categories[0] });
    }, 1600);
  }
}
