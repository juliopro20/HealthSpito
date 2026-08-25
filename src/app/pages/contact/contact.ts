import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
contectText = [
    {text: "Contact support"},
    {text: "Feedback and Suggestions"},
    {text: "System Inquiries"}
  ]
}
