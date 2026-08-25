import { Component, DOCUMENT, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface Doctor {
  id: number;
  name: string;
  role: string;
  department: string;
  photo: string;
  rating: number;
  availability: string;
}

interface AppointmentFormModel {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  visitType: 'In person' | 'Video call' | 'Phone call';
  reason: string;
}

@Component({
  selector: 'app-book-appointment',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-appointment.html',
  styleUrl: './book-appointment.css',
})
export class BookAppointment {
   // dashboards navigations
  router = inject(Router);
  document = inject(DOCUMENT);

  aiChatDashboards() {
    this.router.navigate(['/aichat-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }
  appointmentDashboards() {
    this.router.navigate(['/appointment-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }
  calenderDashboards() {
    this.router.navigate(['/calender-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }
  chatDashboards() {
    this.router.navigate(['/chat-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }
  patientDashboards() {
    this.router.navigate(['/patient-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }
  recordDashboards() {
    this.router.navigate(['/record-dashboard']).then(() => {
      this.document.defaultView?.scrollTo(0, 0);
    });
  }

  // ---------- Doctor catalogue ----------
  doctors: Doctor[] = [
    { id: 1, name: 'Nik Friman', role: 'Therapist', department: 'General consultation', photo: 'https://i.pravatar.cc/80?img=13', rating: 4.9, availability: 'Available today' },
    { id: 2, name: 'Dr. Amelia Rho', role: 'Pathologist', department: 'Laboratory / tests', photo: 'https://i.pravatar.cc/80?img=32', rating: 4.8, availability: 'Available Mon' },
    { id: 3, name: 'Dr. Owen Kade', role: 'Nutritionist', department: 'Nutrition', photo: 'https://i.pravatar.cc/80?img=25', rating: 4.7, availability: 'Available Wed' },
    { id: 4, name: 'Dr. Lena Voss', role: 'Cardiologist', department: 'Cardiology', photo: 'https://i.pravatar.cc/80?img=48', rating: 4.9, availability: 'Available Thu' },
    { id: 5, name: 'Dr. Marcus Idi', role: 'Dermatologist', department: 'Dermatology', photo: 'https://i.pravatar.cc/80?img=15', rating: 4.6, availability: 'Available Fri' },
    { id: 6, name: 'Dr. Priya Nathan', role: 'General physician', department: 'General consultation', photo: 'https://i.pravatar.cc/80?img=44', rating: 4.8, availability: 'Available today' },
  ];

  selectedDoctor: Doctor | null = null;
  showForm = false;
  submitted = false;

  appointmentForm: AppointmentFormModel = {
    fullName: '',
    phone: '',
    date: '',
    time: '',
    visitType: 'In person',
    reason: '',
  };

  scrollToCatalogue() {
    this.document.getElementById('doctorCatalogue')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  selectDoctor(doctor: Doctor) {
    this.selectedDoctor = doctor;
    this.showForm = true;
    this.submitted = false;
    setTimeout(() => {
      this.document.getElementById('bookForm')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  changeDoctor() {
    this.showForm = false;
    this.selectedDoctor = null;
    this.scrollToCatalogue();
  }

  submitAppointment(form: NgForm) {
    if (form.invalid || !this.selectedDoctor) {
      Object.values(form.controls).forEach((c) => c.markAsTouched());
      return;
    }

    // TODO: replace with a real API call
    console.log('Booking appointment', {
      doctor: this.selectedDoctor,
      ...this.appointmentForm,
    });

    this.submitted = true;

    setTimeout(() => {
      this.showForm = false;
      this.selectedDoctor = null;
      this.submitted = false;
      this.appointmentForm = {
        fullName: '',
        phone: '',
        date: '',
        time: '',
        visitType: 'In person',
        reason: '',
      };
      form.resetForm();
    }, 1800);
  }
}
