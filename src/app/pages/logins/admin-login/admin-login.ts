import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Footer } from '../../../components/footer/footer';

@Component({
  selector: 'app-admin-login',
  imports: [MatIconModule, Footer],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css'
})
export class AdminLogin {

}
