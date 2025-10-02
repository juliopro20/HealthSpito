import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-system-layout',
  imports: [Header, RouterOutlet],
  templateUrl: './system-layout.html',
  styleUrl: './system-layout.css'
})
export class SystemLayout {

}
