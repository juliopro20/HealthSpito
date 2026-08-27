import { Component, signal } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-researcher-reports',
  imports: [Sidebar],
  templateUrl: './researcher-reports.html',
  styleUrl: './researcher-reports.css',
})
export class ResearcherReports {
  activeRange = signal<'This quarter' | 'This year' | 'All time'>('This year');
  ranges: Array<'This quarter' | 'This year' | 'All time'> = ['This quarter', 'This year', 'All time'];

  setRange(r: 'This quarter' | 'This year' | 'All time') {
    this.activeRange.set(r);
  }

  summary = [
    { label: 'Publications', value: 22, delta: '+2 this year' },
    { label: 'Citations', value: 486, delta: '+64 this year' },
    { label: 'Grant funding secured', value: '$1.2M', delta: 'Across 4 grants' },
    { label: 'Avg. review time', value: '38 days', delta: '-6 days vs last year' },
  ];

  progressByProject = [
    { name: 'Cardiovascular risk study', pct: 68 },
    { name: 'Diabetes cohort', pct: 82 },
    { name: 'Hypertension genomics', pct: 41 },
    { name: 'Maternal health study', pct: 23 },
  ];

  citationsByYear = [
    { label: '2017', pct: 32 },
    { label: '2018', pct: 51 },
    { label: '2019', pct: 74 },
    { label: '2020', pct: 100 },
  ];

  fundingByAgency = [
    { label: 'National Health Research Council', pct: 100 },
    { label: 'Global Health Foundation', pct: 62 },
    { label: 'University Research Grant', pct: 38 },
    { label: 'Private Industry Partner', pct: 21 },
  ];
}
