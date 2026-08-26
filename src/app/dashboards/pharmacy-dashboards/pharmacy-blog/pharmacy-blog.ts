import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  status: 'Published' | 'Draft';
  date: string;
  reads: number;
}

interface PostFormModel {
  title: string;
  category: string;
  excerpt: string;
  content: string;
}

@Component({
  selector: 'app-pharmacy-blog',
  imports: [FormsModule, Sidebar],
  templateUrl: './pharmacy-blog.html',
  styleUrl: './pharmacy-blog.css',
})
export class PharmacyBlog {
  posts = signal<BlogPost[]>([
    {
      id: 1,
      title: 'Generic vs. brand-name drugs: what\'s actually different',
      excerpt: 'A plain-language look at bioequivalence, cost, and when it matters which one you take.',
      category: 'Medication basics',
      status: 'Published',
      date: '02.06.2020',
      reads: 980,
    },
    {
      id: 2,
      title: 'How to store your medication properly at home',
      excerpt: 'Temperature, humidity, and light — small mistakes that shorten a medication\'s shelf life.',
      category: 'Safety tips',
      status: 'Published',
      date: '28.05.2020',
      reads: 742,
    },
    {
      id: 3,
      title: 'Drug interactions to watch for with common painkillers',
      excerpt: 'What to check before combining OTC pain relief with your regular prescriptions.',
      category: 'Safety tips',
      status: 'Draft',
      date: '—',
      reads: 0,
    },
    {
      id: 4,
      title: 'Understanding your insurance copay for prescriptions',
      excerpt: 'A quick guide to tiers, formularies, and why the same drug can cost differently.',
      category: 'Insurance & billing',
      status: 'Published',
      date: '14.05.2020',
      reads: 1315,
    },
  ]);

  categories = ['Medication basics', 'Safety tips', 'Insurance & billing', 'Vaccinations', 'Wellness'];

  activeFilter = signal<'All' | 'Published' | 'Draft'>('All');
  filters: Array<'All' | 'Published' | 'Draft'> = ['All', 'Published', 'Draft'];

  get filteredPosts(): BlogPost[] {
    const f = this.activeFilter();
    return f === 'All' ? this.posts() : this.posts().filter((p) => p.status === f);
  }

  setFilter(f: 'All' | 'Published' | 'Draft') {
    this.activeFilter.set(f);
  }

  showForm = signal(false);
  formModel: PostFormModel = { title: '', category: this.categories[0], excerpt: '', content: '' };

  toggleForm() {
    this.showForm.update((v) => !v);
  }

  publish(form: NgForm) {
    this.savePost(form, 'Published');
  }

  saveDraft(form: NgForm) {
    this.savePost(form, 'Draft');
  }

  private savePost(form: NgForm, status: 'Published' | 'Draft') {
    if (!this.formModel.title.trim()) {
      form.controls['title']?.markAsTouched();
      return;
    }

    const newPost: BlogPost = {
      id: Date.now(),
      title: this.formModel.title,
      excerpt: this.formModel.excerpt || 'No excerpt provided yet.',
      category: this.formModel.category,
      status,
      date: status === 'Published' ? new Date().toLocaleDateString() : '—',
      reads: 0,
    };

    this.posts.update((list) => [newPost, ...list]);
    this.formModel = { title: '', category: this.categories[0], excerpt: '', content: '' };
    form.resetForm({ category: this.categories[0] });
    this.showForm.set(false);
  }
}
