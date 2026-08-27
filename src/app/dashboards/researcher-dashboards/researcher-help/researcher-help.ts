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
  selector: 'app-researcher-help',
  imports: [FormsModule, Sidebar],
  templateUrl: './researcher-help.html',
  styleUrl: './researcher-help.css',
})
export class ResearcherHelp {
    faqs: FaqItem[] = [
    {
      id: 1,
      question: 'How do I request access to a restricted dataset?',
      answer: 'Open Data Access, click "Request access", and fill in your justification. The data governance board typically reviews requests within 5 business days.',
    },
    {
      id: 2,
      question: 'How do I add a milestone to a research project?',
      answer: 'Open Research Project, select a project, and milestones can be added from the project detail view as your work progresses.',
    },
    {
      id: 3,
      question: 'Can I invite a collaborator from another institution?',
      answer: 'Yes — go to Collaborations, click "Invite collaborator", and enter their email and institution. They\'ll receive an invitation to join your project.',
    },
    {
      id: 4,
      question: 'How do I track citations for a published paper?',
      answer: 'Citation counts are shown on each entry in Publications, and aggregated trends are available under Report & Analysis.',
    },
    {
      id: 5,
      question: 'How do I update my institutional affiliation?',
      answer: 'Head to Profile Setting → Practice Details (institution & department) to update your affiliation and contact information.',
    },
  ];

  openFaqId = signal<number | null>(1);

  toggleFaq(id: number) {
    this.openFaqId.update((current) => (current === id ? null : id));
  }

  tickets: Ticket[] = [
    { id: 101, subject: 'Unable to export dataset as CSV', category: 'Technical', status: 'In progress', date: '05.06.2020' },
    { id: 102, subject: 'Missing citation count on a 2019 publication', category: 'Data', status: 'Resolved', date: '29.05.2020' },
    { id: 103, subject: 'Question about grant reporting requirements', category: 'Billing', status: 'Open', date: '02.06.2020' },
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
