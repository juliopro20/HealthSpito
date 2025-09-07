import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PersonelLogin } from './pages/logins/personel-login/personel-login';
import { InstituteLogin } from './pages/logins/institute-login/institute-login';
import { PatientOnboarding } from './pages/onboards/patient/patient-onboarding/patient-onboarding';
import { PatientFeature } from './pages/onboards/patient/patient-feature/patient-feature';
import { DoctorFeature } from './pages/onboards/doctor/doctor-feature/doctor-feature';
import { DoctorOnboarding } from './pages/onboards/doctor/doctor-onboarding/doctor-onboarding';
import { AdminLogin } from './pages/logins/admin-login/admin-login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'personel-login', component: PersonelLogin },
  { path: 'institute-login', component: InstituteLogin },
  { path: 'admin-login', component: AdminLogin},
  //the onboardings path for the users

  //1) for the patients
  { path: 'patient-feature', component: PatientFeature },
  { path: 'patient-onboarding', component: PatientOnboarding},

  //2) for the doctors
  { path: 'doctor-feature', component: DoctorFeature},
  { path: 'doctor-onboarding', component: DoctorOnboarding}

];
