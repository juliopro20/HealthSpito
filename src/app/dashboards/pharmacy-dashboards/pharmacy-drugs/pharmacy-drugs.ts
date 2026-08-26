import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

type StockStatus = 'In stock' | 'Low stock' | 'Out of stock';

interface Drug {
  id: number;
  name: string;
  category: string;
  stock: number;
  unitPrice: number;
  expiry: string;
  status: StockStatus;
}

interface DrugFormModel {
  name: string;
  category: string;
  stock: number | null;
  unitPrice: number | null;
  expiry: string;
  supplier: string;
}

@Component({
  selector: 'app-pharmacy-drugs',
  imports: [FormsModule, Sidebar],
  templateUrl: './pharmacy-drugs.html',
  styleUrl: './pharmacy-drugs.css',
})
export class PharmacyDrugs {
  drugs = signal<Drug[]>([
    { id: 1, name: 'Lisinopril 10mg', category: 'Cardiology', stock: 320, unitPrice: 0.42, expiry: '03.2027', status: 'In stock' },
    { id: 2, name: 'Metformin 1000mg', category: 'Diabetes care', stock: 18, unitPrice: 0.31, expiry: '11.2026', status: 'Low stock' },
    { id: 3, name: 'Amoxicillin 500mg', category: 'Antibiotics', stock: 0, unitPrice: 0.55, expiry: '06.2026', status: 'Out of stock' },
    { id: 4, name: 'Fluticasone inhaler', category: 'Respiratory', stock: 64, unitPrice: 18.9, expiry: '01.2027', status: 'In stock' },
    { id: 5, name: 'Sumatriptan 50mg', category: 'Neurology', stock: 12, unitPrice: 2.1, expiry: '09.2026', status: 'Low stock' },
    { id: 6, name: 'Insulin glargine', category: 'Diabetes care', stock: 41, unitPrice: 34.5, expiry: '04.2027', status: 'In stock' },
  ]);

  searchTerm = '';
  activeFilter = signal<'All' | StockStatus>('All');
  filters: Array<'All' | StockStatus> = ['All', 'Low stock', 'Out of stock'];

  categories = ['Cardiology', 'Diabetes care', 'Antibiotics', 'Respiratory', 'Neurology', 'General health'];

  get filteredDrugs(): Drug[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.drugs().filter((d) => {
      const matchesSearch = !term || d.name.toLowerCase().includes(term) || d.category.toLowerCase().includes(term);
      const f = this.activeFilter();
      const matchesFilter = f === 'All' || d.status === f;
      return matchesSearch && matchesFilter;
    });
  }

  setFilter(f: 'All' | StockStatus) {
    this.activeFilter.set(f);
  }

  showForm = signal(false);
  formModel: DrugFormModel = { name: '', category: this.categories[0], stock: null, unitPrice: null, expiry: '', supplier: '' };

  toggleForm() {
    this.showForm.update((v) => !v);
  }

  addDrug(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    const stock = this.formModel.stock ?? 0;
    const status: StockStatus = stock === 0 ? 'Out of stock' : stock < 20 ? 'Low stock' : 'In stock';

    this.drugs.update((list) => [
      {
        id: Date.now(),
        name: this.formModel.name,
        category: this.formModel.category,
        stock,
        unitPrice: this.formModel.unitPrice ?? 0,
        expiry: this.formModel.expiry,
        status,
      },
      ...list,
    ]);

    this.formModel = { name: '', category: this.categories[0], stock: null, unitPrice: null, expiry: '', supplier: '' };
    form.resetForm({ category: this.categories[0] });
    this.showForm.set(false);
  }
}
