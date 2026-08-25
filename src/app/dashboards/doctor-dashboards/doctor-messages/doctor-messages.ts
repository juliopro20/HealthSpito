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
  selector: 'app-doctor-messages',
  imports: [FormsModule, Sidebar ],
  templateUrl: './doctor-messages.html',
  styleUrl: './doctor-messages.css',
})
export class DoctorMessages {
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
        { fromMe: false, text: "Hi Dr. Friman, my blood pressure readings this week have been a bit high in the mornings.", time: '09:40 AM' },
        { fromMe: true, text: "Thanks for flagging that, Kate. Can you send me your readings from the last 5 days?", time: '09:42 AM' },
        { fromMe: false, text: "Sure, sending them over shortly.", time: '09:43 AM' },
        { fromMe: false, text: "Sure, see you at 2pm!", time: '09:44 AM' },
      ],
    },
    {
      id: 2,
      name: 'Marcus Webb',
      photo: 'https://i.pravatar.cc/80?img=14',
      online: true,
      lastMessage: 'Should I take the extra insulin dose today?',
      lastTime: '25m',
      unread: 2,
      messages: [
        { fromMe: false, text: "My glucose reading this morning was 195 mg/dL.", time: '08:10 AM' },
        { fromMe: false, text: "Should I take the extra insulin dose today?", time: '08:11 AM' },
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
        { fromMe: true, text: "Everything looks great at 24 weeks. Keep up the prenatal vitamins.", time: '11:02 AM' },
        { fromMe: false, text: "Thank you, see you at the next scan.", time: '11:05 AM' },
      ],
    },
    {
      id: 4,
      name: 'Jonah Wick',
      photo: 'https://i.pravatar.cc/80?img=60',
      online: false,
      lastMessage: 'Inhaler is working well, thanks!',
      lastTime: '1d',
      unread: 0,
      messages: [{ fromMe: false, text: 'Inhaler is working well, thanks!', time: 'Yesterday' }],
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
