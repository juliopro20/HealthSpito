import { Component, signal } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';

type OrderStage = 'Pending' | 'Processing' | 'Ready' | 'Completed' | 'Cancelled';

interface OrderItem {
  name: string;
  qty: number;
}

interface Order {
  id: string;
  patientName: string;
  patientPhoto: string;
  items: OrderItem[];
  total: number;
  date: string;
  stage: OrderStage;
}

const STAGES: OrderStage[] = ['Pending', 'Processing', 'Ready', 'Completed'];

@Component({
  selector: 'app-pharmacy-orders',
  imports: [Sidebar],
  templateUrl: './pharmacy-orders.html',
  styleUrl: './pharmacy-orders.css',
})
export class PharmacyOrders {
  stages = STAGES;

  orders = signal<Order[]>([
    {
      id: 'ORD-1042',
      patientName: 'Kate Summers',
      patientPhoto: 'https://i.pravatar.cc/80?img=47',
      items: [{ name: 'Lisinopril 10mg', qty: 30 }, { name: 'Aspirin 81mg', qty: 30 }],
      total: 18.6,
      date: '09.06.2020',
      stage: 'Pending',
    },
    {
      id: 'ORD-1041',
      patientName: 'Marcus Webb',
      patientPhoto: 'https://i.pravatar.cc/80?img=14',
      items: [{ name: 'Insulin glargine', qty: 1 }, { name: 'Metformin 1000mg', qty: 60 }],
      total: 52.9,
      date: '09.06.2020',
      stage: 'Processing',
    },
    {
      id: 'ORD-1040',
      patientName: 'Elena Osei',
      patientPhoto: 'https://i.pravatar.cc/80?img=9',
      items: [{ name: 'Prenatal vitamins', qty: 90 }],
      total: 24.0,
      date: '08.06.2020',
      stage: 'Ready',
    },
    {
      id: 'ORD-1039',
      patientName: 'Jonah Wick',
      patientPhoto: 'https://i.pravatar.cc/80?img=60',
      items: [{ name: 'Fluticasone inhaler', qty: 1 }],
      total: 18.9,
      date: '08.06.2020',
      stage: 'Completed',
    },
    {
      id: 'ORD-1038',
      patientName: 'Priya Chandran',
      patientPhoto: 'https://i.pravatar.cc/80?img=38',
      items: [{ name: 'Sumatriptan 50mg', qty: 9 }],
      total: 18.9,
      date: '07.06.2020',
      stage: 'Cancelled',
    },
  ]);

  activeFilter = signal<'All' | OrderStage>('All');
  filters: Array<'All' | OrderStage> = ['All', 'Pending', 'Processing', 'Ready', 'Completed', 'Cancelled'];

  get filteredOrders(): Order[] {
    const f = this.activeFilter();
    return f === 'All' ? this.orders() : this.orders().filter((o) => o.stage === f);
  }

  setFilter(f: 'All' | OrderStage) {
    this.activeFilter.set(f);
  }

  stageIndex(order: Order): number {
    return this.stages.indexOf(order.stage as OrderStage);
  }

  advance(order: Order) {
    const idx = this.stages.indexOf(order.stage as OrderStage);
    if (idx >= 0 && idx < this.stages.length - 1) {
      order.stage = this.stages[idx + 1];
    }
  }

  cancel(order: Order) {
    order.stage = 'Cancelled';
  }

  itemsSummary(order: Order): string {
    return order.items.map((i) => `${i.name} × ${i.qty}`).join(', ');
  }
}
