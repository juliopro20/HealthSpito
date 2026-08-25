import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Footer } from '../../../components/footer/footer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-login',
  imports: [MatIconModule, Footer],
  templateUrl: './institute-login.html',
  styleUrl: './institute-login.css'
})
export class InstituteLogin {

   private router = inject(Router)

   toHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0,1500);
    });
  }

}
