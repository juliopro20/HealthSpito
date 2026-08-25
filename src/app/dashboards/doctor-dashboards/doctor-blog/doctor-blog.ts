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
  selector: 'app-doctor-blog',
  imports: [FormsModule, Sidebar],
  templateUrl: './doctor-blog.html',
  styleUrl: './doctor-blog.css',
})
export class DoctorBlog {
  posts = signal<BlogPost[]>([
    {
      id: 1,
      title: '5 habits that quietly lower your blood pressure',
      excerpt: 'Small daily changes that add up to a meaningfully healthier heart over a few months.',
      category: 'Cardiology',
      status: 'Published',
      date: '02.06.2020',
      reads: 1240,
    },
    {
      id: 2,
      title: 'Understanding your A1C: what the number really means',
      excerpt: 'A plain-language breakdown of one of the most common diabetes lab results.',
      category: 'Diabetes care',
      status: 'Published',
      date: '28.05.2020',
      reads: 892,
    },
    {
      id: 3,
      title: 'Prenatal nutrition myths, debunked',
      excerpt: 'Separating outdated advice from what current guidelines actually recommend.',
      category: 'Prenatal care',
      status: 'Draft',
      date: '—',
      reads: 0,
    },
    {
      id: 4,
      title: 'When a headache is more than "just a headache"',
      excerpt: 'Warning signs that mean a migraine should be evaluated sooner rather than later.',
      category: 'Neurology',
      status: 'Published',
      date: '14.05.2020',
      reads: 2103,
    },
  ]);

  categories = ['General health', 'Cardiology', 'Diabetes care', 'Prenatal care', 'Neurology', 'Pediatrics'];

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
