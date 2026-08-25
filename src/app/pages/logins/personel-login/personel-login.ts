import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Footer } from '../../../components/footer/footer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personel-login',
  imports: [MatIconModule, Footer],
  templateUrl: './personel-login.html',
  styleUrl: './personel-login.css'
})
export class PersonelLogin {

   private router = inject(Router)
  toHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0,1500);
    });}

    
}
