import { NgModule } from '@angular/core';
import { MessageService } from './message.service';
import { MessageComponent } from './message.component';
import { SharedModule } from 'app/shared/shared.module';
import { MessageRoutingModule } from 'app/messages/message-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MessageRoutingModule
  ],
  declarations: [MessageComponent],
  providers: [MessageService]
})
export class MessageModule { }
