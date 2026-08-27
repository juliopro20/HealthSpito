import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

type PubStatus = 'Published' | 'Under review' | 'Draft';

interface Publication {
  id: number;
  title: string;
  journal: string;
  coAuthors: string;
  status: PubStatus;
  date: string;
  citations: number;
  doiOrNote: string;
}

interface PubFormModel {
  title: string;
  journal: string;
  coAuthors: string;
}
@Component({
  selector: 'app-researcher-publications',
  imports: [FormsModule, Sidebar],
  templateUrl: './researcher-publications.html',
  styleUrl: './researcher-publications.css',
})
export class ResearcherPublications {
  publications = signal<Publication[]>([
    {
      id: 1,
      title: 'Ten-year trends in cardiovascular risk factors across three metropolitan cohorts',
      journal: 'Journal of Epidemiology & Public Health',
      coAuthors: 'A. Okafor, A. Rho, S. Ortiz',
      status: 'Published',
      date: '03.2020',
      citations: 41,
      doiOrNote: '10.1234/jeph.2020.0301',
    },
    {
      id: 2,
      title: 'Genetic variants associated with treatment-resistant hypertension: a case-control study',
      journal: 'Hypertension Research Quarterly',
      coAuthors: 'A. Okafor, L. Wei',
      status: 'Under review',
      date: 'Submitted 05.2020',
      citations: 0,
      doiOrNote: 'Under review since May 2020',
    },
    {
      id: 3,
      title: 'Maternal outcomes in low-resource community health settings: a preliminary analysis',
      journal: 'Global Maternal Health',
      coAuthors: 'A. Okafor, S. Ortiz',
      status: 'Draft',
      date: '—',
      citations: 0,
      doiOrNote: 'Internal draft, not yet submitted',
    },
    {
      id: 4,
      title: 'Type 2 diabetes prevalence trends: a decade in review',
      journal: 'Diabetes & Metabolic Disorders Journal',
      coAuthors: 'A. Okafor, A. Rho, L. Wei',
      status: 'Published',
      date: '11.2019',
      citations: 78,
      doiOrNote: '10.1234/dmdj.2019.1102',
    },
  ]);

  activeFilter = signal<'All' | PubStatus>('All');
  filters: Array<'All' | PubStatus> = ['All', 'Published', 'Under review', 'Draft'];

  get filteredPubs(): Publication[] {
    const f = this.activeFilter();
    return f === 'All' ? this.publications() : this.publications().filter((p) => p.status === f);
  }

  setFilter(f: 'All' | PubStatus) {
    this.activeFilter.set(f);
  }

  showForm = signal(false);
  formModel: PubFormModel = { title: '', journal: '', coAuthors: '' };

  toggleForm() {
    this.showForm.update((v) => !v);
  }

  addPublication(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    this.publications.update((list) => [
      {
        id: Date.now(),
        title: this.formModel.title,
        journal: this.formModel.journal || 'Not yet assigned',
        coAuthors: this.formModel.coAuthors || 'A. Okafor',
        status: 'Draft',
        date: '—',
        citations: 0,
        doiOrNote: 'Internal draft, not yet submitted',
      },
      ...list,
    ]);

    this.formModel = { title: '', journal: '', coAuthors: '' };
    form.resetForm();
    this.showForm.set(false);
  }
}
