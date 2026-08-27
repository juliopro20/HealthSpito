import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

type AccessStatus = 'Approved' | 'Pending' | 'Restricted';

interface Dataset {
  id: number;
  name: string;
  source: string;
  recordCount: string;
  sensitivity: 'Public' | 'De-identified' | 'Restricted';
  status: AccessStatus;
  updated: string;
}

interface RequestFormModel {
  datasetName: string;
  justification: string;
  duration: string;
}
@Component({
  selector: 'app-researcher-data-access',
  imports: [FormsModule, Sidebar],
  templateUrl: './researcher-data-access.html',
  styleUrl: './researcher-data-access.css',
})
export class ResearcherDataAccess {
   datasets = signal<Dataset[]>([
    {
      id: 1,
      name: 'Urban Cardiovascular Cohort 2018–2020',
      source: 'National Health Research Council',
      recordCount: '12,400 records',
      sensitivity: 'De-identified',
      status: 'Approved',
      updated: '05.06.2020',
    },
    {
      id: 2,
      name: 'Hypertension Genomic Sequencing Panel',
      source: 'University Biobank',
      recordCount: '860 records',
      sensitivity: 'Restricted',
      status: 'Pending',
      updated: '02.06.2020',
    },
    {
      id: 3,
      name: 'Diabetes Prevalence Registry',
      source: 'National Health Research Council',
      recordCount: '48,200 records',
      sensitivity: 'De-identified',
      status: 'Approved',
      updated: '28.05.2020',
    },
    {
      id: 4,
      name: 'Maternal Health Community Survey',
      source: 'Global Health Foundation',
      recordCount: '3,150 records',
      sensitivity: 'Public',
      status: 'Approved',
      updated: '20.05.2020',
    },
    {
      id: 5,
      name: 'Clinical Trial Adverse Events Log',
      source: 'Regulatory Data Office',
      recordCount: '2,940 records',
      sensitivity: 'Restricted',
      status: 'Restricted',
      updated: '14.05.2020',
    },
  ]);

  searchTerm = '';
  activeFilter = signal<'All' | AccessStatus>('All');
  filters: Array<'All' | AccessStatus> = ['All', 'Approved', 'Pending', 'Restricted'];

  get filteredDatasets(): Dataset[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.datasets().filter((d) => {
      const matchesSearch = !term || d.name.toLowerCase().includes(term) || d.source.toLowerCase().includes(term);
      const f = this.activeFilter();
      const matchesFilter = f === 'All' || d.status === f;
      return matchesSearch && matchesFilter;
    });
  }

  setFilter(f: 'All' | AccessStatus) {
    this.activeFilter.set(f);
  }

  showForm = signal(false);
  formSubmitted = signal(false);
  formModel: RequestFormModel = { datasetName: '', justification: '', duration: '' };

  toggleForm() {
    this.showForm.update((v) => !v);
    this.formSubmitted.set(false);
  }

  submitRequest(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    // TODO: replace with a real API call
    console.log('New data access request', this.formModel);

    this.formSubmitted.set(true);
    setTimeout(() => {
      this.showForm.set(false);
      this.formSubmitted.set(false);
      this.formModel = { datasetName: '', justification: '', duration: '' };
      form.resetForm();
    }, 1600);
  }
}
