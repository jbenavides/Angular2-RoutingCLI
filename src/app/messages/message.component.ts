import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'app/messages/message.service';

@Component({
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor(private messageService: MessageService, private router: Router) { }

  close(): void {
        // Close the popup.
  }

}
