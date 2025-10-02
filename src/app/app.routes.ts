import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PersonelLogin } from './pages/logins/personel-login/personel-login';
import { InstituteLogin } from './pages/logins/institute-login/institute-login';
import { PatientOnboarding } from './pages/onboards/patient/patient-onboarding/patient-onboarding';
import { PatientFeature } from './pages/onboards/patient/patient-feature/patient-feature';
import { DoctorFeature } from './pages/onboards/doctor/doctor-feature/doctor-feature';
import { DoctorOnboarding } from './pages/onboards/doctor/doctor-onboarding/doctor-onboarding';
import { AdminLogin } from './pages/logins/admin-login/admin-login';
import { ResearcherFeature } from './pages/onboards/researcher/researcher-feature/researcher-feature';
import { ResearcherOnboarding } from './pages/onboards/researcher/researcher-onboarding/researcher-onboarding';
import { NurseFeature } from './pages/onboards/nurse/nurse-feature/nurse-feature';
import { NurseOnboarding } from './pages/onboards/nurse/nurse-onboarding/nurse-onboarding';
import { MidWifeFeature } from './pages/onboards/mid-wife/mid-wife-feature/mid-wife-feature';
import { MidWifeOnboarding } from './pages/onboards/mid-wife/mid-wife-onboarding/mid-wife-onboarding';
import { LabTechnicianFeatures } from './pages/onboards/lab-technician/lab-technician-features/lab-technician-features';
import { LabTechnicianOnboarding } from './pages/onboards/lab-technician/lab-technician-onboarding/lab-technician-onboarding';
import { HospitalsFeatures } from './pages/onboards/hospital/hospitals-features/hospitals-features';
import { HospitalsOnboarding } from './pages/onboards/hospital/hospitals-onboarding/hospitals-onboarding';
import { ClinicFeatures } from './pages/onboards/clinic/clinic-features/clinic-features';
import { ClinicOnboarding } from './pages/onboards/clinic/clinic-onboarding/clinic-onboarding';
import { PharmacyFeatures } from './pages/onboards/pharmacy/pharmacy-features/pharmacy-features';
import { PharmacyOnboarding } from './pages/onboards/pharmacy/pharmacy-onboarding/pharmacy-onboarding';
import { LaboratoryFeature } from './pages/onboards/laboratory/laboratory-feature/laboratory-feature';
import { LaboratoryOnboarding } from './pages/onboards/laboratory/laboratory-onboarding/laboratory-onboarding';
import { HealthCareFeatures } from './pages/onboards/health-care/health-care-features/health-care-features';
import { HealthCareOnboarding } from './pages/onboards/health-care/health-care-onboarding/health-care-onboarding';
import { SystemLayout } from './system-layout/system-layout';

export const routes: Routes = [
  {
    path: '',
    component: SystemLayout,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '', component: Home },

      //system logins
      { path: 'personel-login', component: PersonelLogin },
      { path: 'institute-login', component: InstituteLogin },
      { path: 'admin-login', component: AdminLogin },

      //the onboardings path for the user
      //1) for the patients
      { path: 'patient-feature', component: PatientFeature },
      { path: 'patient-onboarding', component: PatientOnboarding },

      //2) for the doctors
      { path: 'doctor-feature', component: DoctorFeature },
      { path: 'doctor-onboarding', component: DoctorOnboarding },

      //3) for the doctors
      { path: 'researcher-feature', component: ResearcherFeature },
      { path: 'researcher-onboarding', component: ResearcherOnboarding },

      //4) for the nurses
      { path: 'nurse-feature', component: NurseFeature },
      { path: 'nurse-onboarding', component: NurseOnboarding },

      //5) for the midwife
      { path: 'midwife-feature', component: MidWifeFeature },
      { path: 'midwife-onboarding', component: MidWifeOnboarding },

      //6) for the lab technician
      { path: 'lab-technician-feature', component: LabTechnicianFeatures },
      { path: 'lab-technician-onboarding', component: LabTechnicianOnboarding },

      //7) for the hospital
      { path: 'hospital-feature', component: HospitalsFeatures },
      { path: 'hospital-onboarding', component: HospitalsOnboarding },

      //8) for the clinic
      { path: 'clinic-feature', component: ClinicFeatures },
      { path: 'clinic-onboarding', component: ClinicOnboarding },

      //9) for the pharmacy
      { path: 'pharmacy-feature', component: PharmacyFeatures },
      { path: 'pharmacy-onboarding', component: PharmacyOnboarding },

      //10) for the laboratory
      { path: 'laboratory-feature', component: LaboratoryFeature },
      { path: 'laboratory-onboarding', component: LaboratoryOnboarding },

      //11) for the health-center
      { path: 'health-center-feature', component: HealthCareFeatures },
      { path: 'health-center-onboarding', component: HealthCareOnboarding },
    ],
  },
];
