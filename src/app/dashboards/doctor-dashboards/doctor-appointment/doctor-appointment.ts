import { Component } from '@angular/core';


type NavIcon =
  | 'dashboard'
  | 'record'
  | 'appointments'
  | 'schedule'
  | 'messages'
  | 'blog'
  | 'pharmacy'
  | 'help'
  | 'profile';

interface NavItem {
  path: string;
  label: string;
  icon: NavIcon;
}

@Component({
  selector: 'app-doctor-appointment',
  imports: [],
  templateUrl: './doctor-appointment.html',
  styleUrl: './doctor-appointment.css',
})
export class DoctorAppointment {

}
