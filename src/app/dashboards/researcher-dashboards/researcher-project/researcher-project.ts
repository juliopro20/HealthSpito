import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

type ProjectStatus = 'On track' | 'At risk' | 'Delayed' | 'Completed';

interface Milestone {
  title: string;
  date: string;
  done: boolean;
}

interface Project {
  id: number;
  title: string;
  summary: string;
  status: ProjectStatus;
  progress: number;
  startDate: string;
  deadline: string;
  fundingSource: string;
  teamPhotos: string[];
  milestones: Milestone[];
}

interface ProjectFormModel {
  title: string;
  summary: string;
  fundingSource: string;
  deadline: string;
}

@Component({
  selector: 'app-research-project',
  imports: [FormsModule, Sidebar],
  templateUrl: './researcher-project.html',
  styleUrl: './researcher-project.css',
})
export class ResearcherProject {
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Long-term cardiovascular risk in urban populations',
      summary: 'A 10-year prospective cohort study tracking cardiovascular risk factors across three metropolitan areas.',
      status: 'On track',
      progress: 68,
      startDate: '01.2018',
      deadline: '30.09.2020',
      fundingSource: 'National Health Research Council',
      teamPhotos: ['https://i.pravatar.cc/80?img=32', 'https://i.pravatar.cc/80?img=17', 'https://i.pravatar.cc/80?img=22'],
      milestones: [
        { title: 'Baseline data collection complete', date: '03.2019', done: true },
        { title: 'Year 2 follow-up complete', date: '03.2020', done: true },
        { title: 'Interim analysis submitted', date: '07.2020', done: false },
        { title: 'Final report and publication', date: '09.2020', done: false },
      ],
    },
    {
      id: 2,
      title: 'Genomic markers of treatment-resistant hypertension',
      summary: 'Identifying genetic variants associated with poor response to standard antihypertensive therapy.',
      status: 'At risk',
      progress: 41,
      startDate: '06.2019',
      deadline: '15.08.2020',
      fundingSource: 'University Research Grant',
      teamPhotos: ['https://i.pravatar.cc/80?img=8', 'https://i.pravatar.cc/80?img=45'],
      milestones: [
        { title: 'Sample collection complete', date: '12.2019', done: true },
        { title: 'Genomic sequencing complete', date: '04.2020', done: false },
        { title: 'Statistical analysis', date: '07.2020', done: false },
      ],
    },
    {
      id: 3,
      title: 'Diabetes prevalence trends: 10-year cohort study',
      summary: 'Analyzing shifts in type 2 diabetes prevalence and risk factors over the past decade.',
      status: 'On track',
      progress: 82,
      startDate: '09.2017',
      deadline: '12.11.2020',
      fundingSource: 'National Health Research Council',
      teamPhotos: ['https://i.pravatar.cc/80?img=32', 'https://i.pravatar.cc/80?img=22', 'https://i.pravatar.cc/80?img=8', 'https://i.pravatar.cc/80?img=17'],
      milestones: [
        { title: 'Data cleaning and validation', date: '05.2020', done: true },
        { title: 'Draft manuscript', date: '08.2020', done: false },
        { title: 'Peer review submission', date: '11.2020', done: false },
      ],
    },
    {
      id: 4,
      title: 'Maternal health outcomes in low-resource settings',
      summary: 'Evaluating maternal and neonatal outcomes across community health centers with limited resources.',
      status: 'Delayed',
      progress: 23,
      startDate: '02.2020',
      deadline: '05.07.2020',
      fundingSource: 'Global Health Foundation',
      teamPhotos: ['https://i.pravatar.cc/80?img=45', 'https://i.pravatar.cc/80?img=17'],
      milestones: [
        { title: 'Site approvals secured', date: '04.2020', done: true },
        { title: 'Field data collection', date: '06.2020', done: false },
      ],
    },
  ]);

  activeFilter = signal<'All' | ProjectStatus>('All');
  filters: Array<'All' | ProjectStatus> = ['All', 'On track', 'At risk', 'Delayed', 'Completed'];

  get filteredProjects(): Project[] {
    const f = this.activeFilter();
    return f === 'All' ? this.projects() : this.projects().filter((p) => p.status === f);
  }

  setFilter(f: 'All' | ProjectStatus) {
    this.activeFilter.set(f);
  }

  selectedProject = signal<Project | null>(null);

  openProject(project: Project) {
    this.selectedProject.set(project);
  }

  closeProject() {
    this.selectedProject.set(null);
  }

  showForm = signal(false);
  formModel: ProjectFormModel = { title: '', summary: '', fundingSource: '', deadline: '' };

  toggleForm() {
    this.showForm.update((v) => !v);
  }

  createProject(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    this.projects.update((list) => [
      {
        id: Date.now(),
        title: this.formModel.title,
        summary: this.formModel.summary || 'No summary provided yet.',
        status: 'On track',
        progress: 0,
        startDate: new Date().toLocaleDateString(),
        deadline: this.formModel.deadline,
        fundingSource: this.formModel.fundingSource || 'Not yet assigned',
        teamPhotos: [],
        milestones: [],
      },
      ...list,
    ]);

    this.formModel = { title: '', summary: '', fundingSource: '', deadline: '' };
    form.resetForm();
    this.showForm.set(false);
  }
}
