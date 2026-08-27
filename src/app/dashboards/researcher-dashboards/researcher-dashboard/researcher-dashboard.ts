import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

interface ActiveProject {
  id: number;
  title: string;
  status: 'On track' | 'At risk' | 'Delayed';
  progress: number;
  deadline: string;
}

interface ActivityItem {
  time: string;
  actorPhoto: string;
  actorName: string;
  action: string;
}

@Component({
  selector: 'app-researcher-dashboard',
  imports: [Sidebar],
  templateUrl: './researcher-dashboard.html',
  styleUrl: './researcher-dashboard.css',
})
export class ResearcherDashboard {
  stats = [
    { label: 'Active projects', value: 5, delta: '2 ending this quarter', icon: 'project' },
    { label: 'Datasets accessed', value: 18, delta: '3 pending approval', icon: 'data' },
    { label: 'Publications', value: 22, delta: '+2 this year', icon: 'publications' },
    { label: 'Collaborators', value: 34, delta: 'Across 6 institutions', icon: 'collaborations' },
  ];

  projects: ActiveProject[] = [
    { id: 1, title: 'Long-term cardiovascular risk in urban populations', status: 'On track', progress: 68, deadline: '30.09.2020' },
    { id: 2, title: 'Genomic markers of treatment-resistant hypertension', status: 'At risk', progress: 41, deadline: '15.08.2020' },
    { id: 3, title: 'Diabetes prevalence trends: 10-year cohort study', status: 'On track', progress: 82, deadline: '12.11.2020' },
    { id: 4, title: 'Maternal health outcomes in low-resource settings', status: 'Delayed', progress: 23, deadline: '05.07.2020' },
  ];

  fundingByProject = [
    { label: 'Cardiovascular risk study', pct: 100 },
    { label: 'Hypertension genomics', pct: 74 },
    { label: 'Diabetes cohort', pct: 61 },
    { label: 'Maternal health study', pct: 38 },
  ];

  activity: ActivityItem[] = [
    { time: '09:20 AM', actorPhoto: 'https://i.pravatar.cc/80?img=32', actorName: 'Dr. Amelia Rho', action: 'shared a new dataset with you' },
    { time: 'Yesterday', actorPhoto: 'https://i.pravatar.cc/80?img=17', actorName: 'Dr. Samuel Ortiz', action: 'commented on your manuscript draft' },
    { time: '2 days ago', actorPhoto: 'https://i.pravatar.cc/80?img=22', actorName: 'Dr. Lin Wei', action: 'requested access to the hypertension cohort' },
    { time: '3 days ago', actorPhoto: 'https://i.pravatar.cc/80?img=8', actorName: 'Ethics Review Board', action: 'approved protocol amendment #4' },
  ];
}
