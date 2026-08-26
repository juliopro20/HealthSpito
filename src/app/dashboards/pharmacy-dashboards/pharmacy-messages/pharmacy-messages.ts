import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../sidebar/sidebar';

interface ChatMessage {
  fromMe: boolean;
  text: string;
  time: string;
}

interface Contact {
  id: number;
  name: string;
  photo: string;
  online: boolean;
  lastMessage: string;
  lastTime: string;
  unread: number;
  messages: ChatMessage[];
}

@Component({
  selector: 'app-pharmacy-messages',
  imports: [FormsModule, Sidebar],
  templateUrl: './pharmacy-messages.html',
  styleUrl: './pharmacy-messages.css',
})
export class PharmacyMessages {
   contacts = signal<Contact[]>([
    {
      id: 1,
      name: 'Kate Summers',
      photo: 'https://i.pravatar.cc/80?img=47',
      online: true,
      lastMessage: 'Sure, see you at 2pm!',
      lastTime: '2m',
      unread: 0,
      messages: [
        { fromMe: false, text: "Hi, can you tell me if my Lisinopril refill has been filled yet?", time: '09:40 AM' },
        { fromMe: true, text: "Hi Kate — yes, it's ready for pickup at the counter anytime after 2pm today.", time: '09:42 AM' },
        { fromMe: false, text: "Perfect, thank you!", time: '09:43 AM' },
        { fromMe: false, text: "See you then!", time: '09:44 AM' },
      ],
    },
    {
      id: 2,
      name: 'Marcus Webb',
      photo: 'https://i.pravatar.cc/80?img=14',
      online: true,
      lastMessage: 'I can come by this afternoon to pick it up.',
      lastTime: '25m',
      unread: 2,
      messages: [
        { fromMe: false, text: "Do you have the Insulin glargine pen in stock right now?", time: '08:10 AM' },
        { fromMe: false, text: "I can come by this afternoon to pick it up.", time: '08:11 AM' },
      ],
    },
    {
      id: 3,
      name: 'Elena Osei',
      photo: 'https://i.pravatar.cc/80?img=9',
      online: false,
      lastMessage: 'Thank you, see you at the next scan.',
      lastTime: '3h',
      unread: 0,
      messages: [
        { fromMe: true, text: "Your prenatal vitamins refill is ready — 90 tablets as usual.", time: '11:02 AM' },
        { fromMe: false, text: "Thank you, see you at the next scan.", time: '11:05 AM' },
      ],
    },
    {
      id: 4,
      name: 'Jonah Wick',
      photo: 'https://i.pravatar.cc/80?img=60',
      online: false,
      lastMessage: 'Got the inhaler, thanks so much!',
      lastTime: '1d',
      unread: 0,
      messages: [{ fromMe: false, text: 'Got the inhaler, thanks so much!', time: 'Yesterday' }],
    },
  ]);

  activeContactId = signal(1);
  draftMessage = '';

  get activeContact(): Contact | undefined {
    return this.contacts().find((c) => c.id === this.activeContactId());
  }

  selectContact(id: number) {
    this.activeContactId.set(id);
    this.contacts.update((list) =>
      list.map((c) => (c.id === id ? { ...c, unread: 0 } : c))
    );
  }

  sendMessage() {
    const text = this.draftMessage.trim();
    if (!text) return;

    this.contacts.update((list) =>
      list.map((c) =>
        c.id === this.activeContactId()
          ? {
              ...c,
              lastMessage: text,
              lastTime: 'now',
              messages: [...c.messages, { fromMe: true, text, time: 'Now' }],
            }
          : c
      )
    );

    this.draftMessage = '';
  }
}
