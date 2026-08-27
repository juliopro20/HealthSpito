import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

interface Collaborator {
  id: number;
  name: string;
  photo: string;
  institution: string;
  role: string;
  sharedProjects: string[];
}

interface InviteFormModel {
  name: string;
  email: string;
  institution: string;
  project: string;
}
@Component({
  selector: 'app-researcher-collaborations',
  imports: [FormsModule, Sidebar],
  templateUrl: './researcher-collaborations.html',
  styleUrl: './researcher-collaborations.css',
})
export class ResearcherCollaborations {
  collaborators: Collaborator[] = [
    {
      id: 1,
      name: 'Dr. Amelia Rho',
      photo: 'https://i.pravatar.cc/80?img=32',
      institution: 'Westbridge University',
      role: 'Co-investigator',
      sharedProjects: ['Cardiovascular risk study', 'Diabetes cohort'],
    },
    {
      id: 2,
      name: 'Dr. Samuel Ortiz',
      photo: 'https://i.pravatar.cc/80?img=17',
      institution: 'National Institute of Public Health',
      role: 'Data analyst',
      sharedProjects: ['Cardiovascular risk study', 'Maternal health study'],
    },
    {
      id: 3,
      name: 'Dr. Lin Wei',
      photo: 'https://i.pravatar.cc/80?img=22',
      institution: 'Coastal Medical Research Center',
      role: 'Geneticist',
      sharedProjects: ['Hypertension genomics'],
    },
    {
      id: 4,
      name: 'Dr. Fatima Al-Sayed',
      photo: 'https://i.pravatar.cc/80?img=8',
      institution: 'Global Health Foundation',
      role: 'Field coordinator',
      sharedProjects: ['Maternal health study'],
    },
  ];

  searchTerm = '';

  get filteredCollaborators(): Collaborator[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.collaborators;
    return this.collaborators.filter(
      (c) => c.name.toLowerCase().includes(term) || c.institution.toLowerCase().includes(term)
    );
  }

  showForm = signal(false);
  formSubmitted = signal(false);
  formModel: InviteFormModel = { name: '', email: '', institution: '', project: '' };

  toggleForm() {
    this.showForm.update((v) => !v);
    this.formSubmitted.set(false);
  }

  submitInvite(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    // TODO: replace with a real API call
    console.log('Inviting collaborator', this.formModel);

    this.formSubmitted.set(true);
    setTimeout(() => {
      this.showForm.set(false);
      this.formSubmitted.set(false);
      this.formModel = { name: '', email: '', institution: '', project: '' };
      form.resetForm();
    }, 1600);
  }
}
