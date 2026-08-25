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
  selector: 'app-doctor-help',
  imports: [FormsModule, Sidebar],
  templateUrl: './doctor-help.html',
  styleUrl: './doctor-help.css',
})
export class DoctorHelp {
  faqs: FaqItem[] = [
    {
      id: 1,
      question: 'How do I reschedule a patient appointment?',
      answer: 'Go to Appointments, find the visit, and use the reschedule icon next to it to pick a new date and time. The patient is notified automatically.',
    },
    {
      id: 2,
      question: 'Can I send a prescription directly to a pharmacy?',
      answer: 'Yes — open Pharmacies, choose a partner pharmacy, and use "Send prescription" to submit it electronically with patient and medication details.',
    },
    {
      id: 3,
      question: 'How do I block time off on my schedule?',
      answer: 'In Schedule, click "Block time off", set a date and time range, and save. Those slots become unbookable for patients immediately.',
    },
    {
      id: 4,
      question: 'Who can see the posts I publish on the Blog?',
      answer: 'Published posts are visible to all patients in the app. Drafts stay private to you until you choose to publish them.',
    },
    {
      id: 5,
      question: 'How do I update my consultation hours?',
      answer: 'Head to Profile Settings → Practice Details to update your working hours, consultation fees, and clinic address.',
    },
  ];

  openFaqId = signal<number | null>(1);

  toggleFaq(id: number) {
    this.openFaqId.update((current) => (current === id ? null : id));
  }

  tickets: Ticket[] = [
    { id: 101, subject: 'Unable to upload lab result PDF', category: 'Technical', status: 'In progress', date: '05.06.2020' },
    { id: 102, subject: 'Patient record missing recent visit', category: 'Data', status: 'Resolved', date: '29.05.2020' },
    { id: 103, subject: 'Question about billing export', category: 'Billing', status: 'Open', date: '02.06.2020' },
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
