import { Component, signal } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-pharmacy-reports',
  imports: [Sidebar],
  templateUrl: './pharmacy-reports.html',
  styleUrl: './pharmacy-reports.css',
})
export class PharmacyReports {
  activeRange = signal<'This week' | 'This month' | 'This quarter'>('This month');
  ranges: Array<'This week' | 'This month' | 'This quarter'> = ['This week', 'This month', 'This quarter'];

  setRange(r: 'This week' | 'This month' | 'This quarter') {
    this.activeRange.set(r);
  }

  summary = [
    { label: 'Total revenue', value: '$48,260', delta: '+11% vs previous period' },
    { label: 'Prescriptions filled', value: '1,204', delta: '+64 vs previous period' },
    { label: 'Avg. order value', value: '$40.10', delta: '+2.4%' },
    { label: 'Top-selling drug', value: 'Lisinopril 10mg', delta: '312 units sold' },
  ];

  topDrugsBySales = [
    { name: 'Lisinopril 10mg', pct: 100 },
    { name: 'Metformin 1000mg', pct: 84 },
    { name: 'Insulin glargine', pct: 71 },
    { name: 'Amoxicillin 500mg', pct: 58 },
    { name: 'Fluticasone inhaler', pct: 46 },
  ];

  revenueByWeek = [
    { label: 'Week 1', pct: 62 },
    { label: 'Week 2', pct: 74 },
    { label: 'Week 3', pct: 88 },
    { label: 'Week 4', pct: 100 },
  ];

  categoryBreakdown = [
    { label: 'Cardiology', pct: 34 },
    { label: 'Diabetes care', pct: 27 },
    { label: 'Respiratory', pct: 18 },
    { label: 'Antibiotics', pct: 12 },
    { label: 'Other', pct: 9 },
  ];
}
