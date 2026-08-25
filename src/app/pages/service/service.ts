import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Footer } from '../../components/footer/footer';


interface FunctionalityItem {
  id: number;
  title: string;
  image: string;
  bullets: string[];
}

@Component({
  selector: 'app-service',
  imports: [CommonModule, Footer],
  templateUrl: './service.html',
  styleUrl: './service.css'
})
export class Service {

  service = [
    {
      img: "onboards-icons3.png",
      heading: "Artificial intelligent Model",
      text: "Direct interaction with AI that optimizes time management with great accuracy."
    },
    {
      img: "onboards-icons1.png",
      heading: "Appointment Scheduling",
      text: "Make appointment with health personnel for consultation or drugs prescription"
    },
    {
      img: "telemedicine.png",
      heading: "Telemedicine Services",
      text: "One to one interaction with health personnel for consultation"
    },
    {
      img: "onboards-icons4.png",
      heading: "Health Information",
      text: "We also provide some health information which improve our day to day activities"
    },
    {
      img: "onboards-icons5.png",
      heading: "Emergency Services",
      text: "We provide home facilities with health personnel and drugs delivering"
    },
    {
      img: "onboards-icons6.png",
      heading: " News and Events",
      text: "We provide news and event related to health which create awareness through out the world "
    },
    {
      img: "feedback.png",
      heading: " Prescription Management",
      text: "Based on your lab test result, doctors or nurses can prescribe drugs which save time"
    },
    {
      img: "feedback.png",
      heading: " Feedback Mechanism",
      text: "Notification or updates are done on real time which improve sensibility"
    },

  ]


  // carousel

  currentIndex = signal<number>(0);

  items: FunctionalityItem[] = [
    {
      id: 1,
      title: '1. Patients',
      image: 'patient.png',
      bullets: [
        'Personalized medical advice: Patients can input their symptoms and medical history to receive personalized AI-generated advice and potential diagnoses with doctors for verification through chats.',
        'Disease information: The application can provide detailed information about various diseases, including symptoms, causes, treatment options, and prevention tips.',
        'Hospital Recommendations: In case of severe medical attentions, the system recommend you some professional hospital in your location.',
        'Health reminders: Done using notification for appointments, and health check-ups.'
      ]
    },
    {
      id: 2,
      title: '2. Doctors',
      image: 'doctor.jpg',
      bullets: [
        'AI Clinical Decision Support: Doctors can cross-reference proposed treatment plans and prescriptions against a patient\'s full medical history.',
        'Automated Clinical Charting: Voice-to-text and generative AI tools transcribe consultations directly into Electronic Health Records (EHR).',
        'Patient Escalation Alerts: Real-time push notifications alert clinicians immediately if a monitored patient\'s vital signs breach safe thresholds.',
        'Digital Prescription Management: Seamless generation and dispatch of secure digital prescriptions directly to partnered pharmacies.'
      ]
    },
    {
      id: 3,
      title: '3. Nurses',
      image: 'nurse.png',
      bullets: [
        'Real-time Vital Sign Tracking: Nurses can log and monitor patient vitals via mobile interfaces, instantly triggering automated AI severity scores.',
        'Medication Administration Reminders: Smart scheduling notifications ensure precise medication delivery times, minimizing missed doses.',
        'Wound Care Progress Tracking: AI-powered visual analysis tools track wound healing over time.',
        'Shift Handover Automation: Generative summaries automatically compile patient status updates for incoming nursing shifts.'
      ]
    },
    {
      id: 4,
      title: '4. Researchers',
      image: 'researcher.jpg',
      bullets: [
        'Anonymized Data Lake Access: Researchers can query secure, de-identified patient data pools compliant with international privacy laws.',
        'Predictive Trend Analysis: Machine learning models assist in identifying emerging disease patterns and public health outbreak risks.',
        'Ethical Review Tracking: Built-in workflow managers track institutional review board (IRB) approvals.',
        'Automated Literature Correlation: AI tools cross-reference real-world platform findings with global medical literature.'
      ]
    },
    {
      id: 5,
      title: '5. Hospital Administrators',
      image: 'hospital.png',
      bullets: [
        'AI-driven Staff Scheduling: Intelligent roster generation matches nursing and medical staff availability with expected patient volume peaks.',
        'Bed Turnover Optimization: Predictive analytics forecast patient discharge readiness to minimize wait times.',
        'Automated Billing & Claims: Integrated AI reviews insurance claims before submission to accelerate reimbursement cycles.',
        'Inventory & Supply Tracking: Automated threshold tracking monitors stock levels of critical medical supplies.'
      ]
    },
    {
      id: 6,
      title: '6. Pharmacies',
      image: 'pharmacies.png',
      bullets: [
        'Real-time Inventory Synchronization: Pharmacies can track stock levels dynamically and coordinate automatically with connected clinics.',
        'Prescription Fulfillment Queue: A centralized digital dashboard prioritizes incoming e-prescriptions, reducing wait times.',
        'Drug Interaction Alerts: Automated scanning warns pharmacists of conflicting medications when filling prescriptions.',
        'Medication Adherence Tracking: Automated follow-up prompts remind patients to refill chronic medications on schedule.'
      ]
    },
    {
      id: 7,
      title: '7. Lab Technicians',
      image: 'labtech.png',
      bullets: [
        'Sample Tracking & Barcoding: End-to-end digital tracking ensures biological samples are labeled and stored safely.',
        'AI-assisted Test Validation: Preliminary anomaly detection highlights unusual or critical lab results for immediate review.',
        'Automated Data Entry: Integration with laboratory hardware auto-populates test results into electronic health records.',
        'Result Reporting & Dispatch: Instantaneous formatting and secure uploading of verified diagnostic reports.'
      ]
    },
    {
      id: 8,
      title: '8. Midwives',
      image: 'mid-wife.jpg',
      bullets: [
        'Maternal-Fetal Monitoring: Specialized tracking modules log prenatal vital signs and fetal heart rates with automated risk scoring.',
        'Pregnancy Education Hub: Access to curated guidance materials to share directly with expectant mothers.',
        'Labor & Delivery Timers: Integrated contraction timers and clinical checklists guide midwives safely through labor.',
        'Postpartum Care Reminders: Automated follow-up schedules ensure timely check-ins for maternal recovery and infant milestones.'
      ]
    }
  ];

  prevSlide() {
    this.currentIndex.update((index: number) => (index === 0 ? this.items.length - 1 : index - 1));
  }

  nextSlide() {
    this.currentIndex.update((index: number) => (index === this.items.length - 1 ? 0 : index + 1));
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }

  feedback = [
    {
      img: "contact.png",
      title: "Dr. Nkambi Julius Forsuh",
      location: "Central Hospital Yaounde",
      spec: "Pulmonologists",
      text: "“I have been using this for months now and I highly recommends HealthSpito model  application for its benefits in diagnosis, treatment planning, and connecting with other healthcare professionals.”",
      time: "3 months"
    },
    {
      img: "onboards.png",
      title: "Mrs. Kum Analine Fungong",
      location: "Buea-Cameroon",
      spec: "Business Woman",
      text: "“As a patient, I found HealthSpito website to be user-friendly and helpful. It streamlined my appointment scheduling, provided personalized recommendations, and facilitated a  more...”",
      time: "1 months"
    }
  ]

}
