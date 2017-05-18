import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  private messages: string[] = [];

  addMessage(message: string): void {
        let currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
  }

}